## 编程作业
在 TaskControlBlock 结构体中新增 task_syscall_times 和 task_start_time 两个字段，task_syscall_times 用于记录 任务的 syscall 次数，task_start_time 用于记录任务第一次 Running 的时间。在 syscall 中增加对 TaskControlBlock 的 task_syscall_times 和 task_start_time 的处理。在 sys_task_info 方法中取到当前任务的 TaskControlBlock 并取出相关参数后赋值到 TaskInfo 即可。

## 简答作业

1. `bad_address` 测例访问了无效的内存地址会产生 `Exception::StoreFault` 访存错误的 Trap。`bad_instructions` 使用了 S 态指令， `bad_register` 访问了 S 态的寄存器，两者都会产出 `Exception::IllegalInstruction` 的 Trap。 `trap_handler` 中进行的 Trap 分发会将上述情况打印错误信息并调用 `exit_current_and_run_next` 结束当前程序并运行下一个程序。上述观察使用的 RustSBI 版本号是 0.3.0-alpha.2。

2. 
    1. 刚进入 __restore 时，a0 是系统调用的返回值。__restore 的用处之一初始化操作系统后进入 U 态开始运行应用程序，用处之二是处理完 Trap 后回到 U 态。
    2. sstatus 寄存器保存 CPU 的特权级信息，sepc 寄存器记录下一条指令的地址，
    3. x2(sp) 需要用于查找每个寄存器被保存的位置。 x4(tp) 寄存器除非手动出于特殊用处使用否则不会用到，因此在这里可以跳过。
    4. L60：该指令之后，sp 指向用户栈，sscratch 指向内核栈。
    5. `__restore` 中 `sret` 指令发生状态切换。该指令执行后 `sstatus ` 的 `SPP` 字段会被设置为 U，CPU 会跳转到 `sepc` 寄存器指向的指令。
    6. L13：该指令之后，sp 指向内核栈，sscratch 指向用户栈。
    7. 从 ecall 指令开始 U 态会进入 S 态。

## 荣誉准则

1. 在完成本次实验的过程（含此前学习的过程）中，我曾分别与 以下各位 就（与本次实验相关的）以下方面做过交流，还在代码中对应的位置以注释形式记录了具体的交流对象及内容：

    无

2. 此外，我也参考了 以下资料 ，还在代码中对应的位置以注释形式记录了具体的参考来源及内容：

    [rCore-Tutorial-Book-v3](https://rcore-os.cn/rCore-Tutorial-Book-v3/index.html)

3. 我独立完成了本次实验除以上方面之外的所有工作，包括代码与文档。 我清楚地知道，从以上方面获得的信息在一定程度上降低了实验难度，可能会影响起评分。

4. 我从未使用过他人的代码，不管是原封不动地复制，还是经过了某些等价转换。 我未曾也不会向他人（含此后各届同学）复制或公开我的实验代码，我有义务妥善保管好它们。 我提交至本实验的评测系统的代码，均无意于破坏或妨碍任何计算机系统的正常运转。 我清楚地知道，以上情况均为本课程纪律所禁止，若违反，对应的实验成绩将按“-100”分计。

