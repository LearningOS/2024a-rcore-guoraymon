//!Implementation of [`TaskManager`]
use core::cmp::Ordering;

use super::TaskControlBlock;
use crate::sync::UPSafeCell;
use alloc::collections::binary_heap::BinaryHeap;
use alloc::sync::Arc;
use lazy_static::*;

struct ReadyQueueEntry {
    task: Arc<TaskControlBlock>,
    stride: isize,
}
impl Eq for ReadyQueueEntry {}
impl PartialEq for ReadyQueueEntry {
    fn eq(&self, other: &Self) -> bool {
        self.stride == other.stride
    }
}
impl Ord for ReadyQueueEntry {
    fn cmp(&self, other: &Self) -> Ordering {
        other.stride.cmp(&self.stride)
    }
}
impl PartialOrd for ReadyQueueEntry {
    fn partial_cmp(&self, other: &Self) -> Option<Ordering> {
        Some(other.stride.cmp(&self.stride))
    }
}

///A array of `TaskControlBlock` that is thread-safe
pub struct TaskManager {
    ready_queue: BinaryHeap<ReadyQueueEntry>,
}

/// A simple FIFO scheduler.
impl TaskManager {
    ///Creat an empty TaskManager
    pub fn new() -> Self {
        Self {
            ready_queue: BinaryHeap::new(),
        }
    }
    /// Add process back to ready queue
    pub fn add(&mut self, task: Arc<TaskControlBlock>) {
        self.ready_queue.push(ReadyQueueEntry { task, stride: 0 });
    }
    /// Take a process out of the ready queue
    pub fn fetch(&mut self) -> Option<Arc<TaskControlBlock>> {
        self.ready_queue.pop().map(|mut entry| {
            entry.stride += entry.task.inner_exclusive_access().priority;
            entry.task
        })
    }
}

lazy_static! {
    /// TASK_MANAGER instance through lazy_static!
    pub static ref TASK_MANAGER: UPSafeCell<TaskManager> =
        unsafe { UPSafeCell::new(TaskManager::new()) };
}

/// Add process to ready queue
pub fn add_task(task: Arc<TaskControlBlock>) {
    //trace!("kernel: TaskManager::add_task");
    TASK_MANAGER.exclusive_access().add(task);
}

/// Take a process out of the ready queue
pub fn fetch_task() -> Option<Arc<TaskControlBlock>> {
    //trace!("kernel: TaskManager::fetch_task");
    TASK_MANAGER.exclusive_access().fetch()
}
