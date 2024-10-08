searchState.loadedDescShard("os", 0, "The main module and entrypoint\nclear BSS segment\nConstants in the kernel\nSBI console driver, for text output\nkernel log info\nThe panic handler\nLoading user applications into memory\nGlobal logger\nMemory management implementation\nPrint! to the host console using the format string and …\nPrintln! to the host console using the format string and …\nthe rust entry-point of os\nSBI call wrappers\nSynchronization and interior mutability primitives\nImplementation of syscalls\nTask management implementation\nRISC-V timer-related functionality\nTrap handling functionality\nclock frequency\nkernel heap size\nkernel stack size\nthe max number of syscall\nthe physical memory end\npage size : 4KB\npage size bits: 12\nthe virtual addr of trapoline\nthe virtual addr of trap context\nuser app’s stack size\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\npanic handler\nAll of app’s name\nReturns the argument unchanged.\nget applications data\nget app data from name\nget app number\nCalls <code>U::from(self)</code>.\nlist all apps\na simple logger\nReturns the argument unchanged.\ninitiate logger\nCalls <code>U::from(self)</code>.\ntracker for physical page frame allocation and deallocation\nThe kernel’s initial memory mapping(kernel address space)\nmap permission corresponding to that in pte: <code>R W X U</code>\naddress space\npage table entry structure\nphysical address\nphysical page number\nvirtual address\nvirtual page number\nImplementation of physical and virtual address and page …\nbits of page table entry\nAllocate a physical page frame in FrameTracker style\nImplementation of <code>FrameAllocator</code> which controls all the …\nThe global allocator\ninitiate heap allocator, frame allocator and kernel space\nImplementation of <code>MapArea</code> and <code>MemorySet</code>.\nImplementation of <code>PageTableEntry</code> and <code>PageTable</code>.\nphysical page number\nremap test in kernel space\nTranslate&amp;Copy a ptru8 array with LENGTH len to a mutable …\nTranslate a ptru8 array through page table and return a …\nTranslate&amp;Copy a ptru8 array end with <code>\\0</code> to a <code>String</code> Vec …\nphysical address\nphysical address\nphysical page number\na simple range structure for type T\niterator for the simple range structure\niterator for phy/virt page number\na simple range structure for virtual page number\nvirtual address\nvirtual page number\nCheck if the physical address is aligned by page size\nCheck if the virtual address is aligned by page size\nGet the (ceil) physical page number\nGet the (ceil) virtual page number\nGet the (floor) physical page number\nGet the (floor) virtual page number\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet the reference of page(array of bytes)\nGet mutable reference to <code>PhysAddr</code> value Get the mutable …\nGet the mutable reference of physical address\nGet the reference of page table(array of ptes)\nGet the indexes of the page table entry\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nGet the page offset of physical address\nGet the page offset of virtual address\nstep by one element(page number)\nframe allocator instance through lazy_static!\ntracker for physical page frame allocation and deallocation\nan implementation for frame allocator\nAllocate a physical page frame in FrameTracker style\na simple test for frame allocator\nDeallocate a physical page frame with a given ppn\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\ninitiate the frame allocator using <code>ekernel</code> and <code>MEMORY_END</code>\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a new FrameTracker\nphysical page number\nheap allocator instance\nheap space ([u8; KERNEL_HEAP_SIZE])\npanic when heap allocation error occurs\ninitiate heap allocator\nThe kernel’s initial memory mapping(kernel address space)\nmap area structure, controls a contiguous piece of virtual …\nmap permission corresponding to that in pte: <code>R W X U</code>\nmap type for memory set: identical or framed\naddress space\nReadable\nAccessible in U mode\nWritable\nExcutable\nChange page table by writing satp CSR Register.\nReturns the set containing all flags.\nappend the area to new_end\nReturns the intersection between the two sets of flags.\nDisables all flags disabled in the set.\nReturns the union of the two sets of flags.\nAdds the set of flags.\nReturns the raw value of the flags currently stored.\nReturns the left flags, but with all the right flags …\nToggles the set of flags.\nReturns the complement of this set of flags.\nReturns <code>true</code> if all of the flags in <code>other</code> are contained …\ndata: start-aligned but maybe with shorter length assume …\nReturns the difference between the flags in <code>self</code> and <code>other</code>.\nReturns an empty set of flags.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert from underlying bit representation, unless that …\nConvert from underlying bit representation, dropping any …\nConvert from underlying bit representation, preserving all …\nInclude sections in elf and trampoline and TrapContext and …\nCreate a new address space by copy code&amp;data from a exited …\nInserts the specified flags in-place.\nAssume that no conflicts.\nReturns the intersection between the flags in <code>self</code> and …\nReturns <code>true</code> if there are flags common to both <code>self</code> and …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if all flags are currently set.\nReturns <code>true</code> if no flags are currently stored.\nMention that trampoline is not collected by areas.\nCreate a new empty <code>MemorySet</code>.\nWithout kernel stacks.\nReturns the complement of this set of flags.\nAdd a new MapArea into this MemorySet. Assuming that there …\nRemove all <code>MapArea</code>\nremap test in kernel space\nRemoves the specified flags in-place.\nremove a area\nInserts or removes the specified flags depending on the …\nshrink the area to new_end\nReturns the set difference of the two sets of flags.\nDisables all flags enabled in the set.\nReturns the symmetric difference between the flags in <code>self</code> …\nToggles the specified flags in-place.\nGet the page table token\nTranslate a virtual page number to a page table entry\nReturns the union of between the flags in <code>self</code> and <code>other</code>.\npage table entry flags\npage table structure\npage table entry structure\nReturns the set containing all flags.\nReturns the intersection between the two sets of flags.\nDisables all flags disabled in the set.\nReturns the union of the two sets of flags.\nAdds the set of flags.\nReturns the raw value of the flags currently stored.\nbits of page table entry\nReturns the left flags, but with all the right flags …\nToggles the set of flags.\nReturns the complement of this set of flags.\nReturns <code>true</code> if all of the flags in <code>other</code> are contained …\nReturns the difference between the flags in <code>self</code> and <code>other</code>.\nReturns an empty set of flags.\nCreate an empty page table entry\nThe page pointered by page table entry is executable?\nFind PageTableEntry by VirtPageNum\nFind PageTableEntry by VirtPageNum, create a frame for a …\nGet the flags from the page table entry\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert from underlying bit representation, unless that …\nConvert from underlying bit representation, dropping any …\nConvert from underlying bit representation, preserving all …\nTemporarily used to get arguments from user space.\nInserts the specified flags in-place.\nReturns the intersection between the flags in <code>self</code> and …\nReturns <code>true</code> if there are flags common to both <code>self</code> and …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if all flags are currently set.\nReturns <code>true</code> if no flags are currently stored.\nThe page pointered by page table entry is valid?\nset the map between virtual page number and physical page …\nCreate a new page table\nCreate a new page table entry\nReturns the complement of this set of flags.\nGet the physical page number from the page table entry\nThe page pointered by page table entry is readable?\nRemoves the specified flags in-place.\nInserts or removes the specified flags depending on the …\nReturns the set difference of the two sets of flags.\nDisables all flags enabled in the set.\nReturns the symmetric difference between the flags in <code>self</code> …\nToggles the specified flags in-place.\nget the token from the page table\nget the page table entry from the virtual page number\nget the physical address from the virtual address\nTranslate&amp;Copy a ptru8 array with LENGTH len to a mutable …\nTranslate a ptru8 array through page table and return a …\nTranslate&amp;Copy a ptru8 array end with <code>\\0</code> to a <code>String</code> Vec …\nReturns the union of between the flags in <code>self</code> and <code>other</code>.\nremove the map between virtual page number and physical …\nThe page pointered by page table entry is writable?\nuse sbi call to getchar from console (qemu uart handler)\nuse sbi call to putchar in console (qemu uart handler)\ngeneral sbi call\nuse sbi call to set timer\nuse sbi call to shutdown the kernel\nWrap a static data structure inside it so that we are able …\ninner data\nUniprocessor interior mutability primitives\nWrap a static data structure inside it so that we are able …\nPanic if the data has been borrowed.\nReturns the argument unchanged.\ninner data\nCalls <code>U::from(self)</code>.\nUser is responsible to guarantee that inner struct is only …\nexec syscall\nexit syscall\nfork syscall\ngetpid syscall\ngettime syscall\nmmap syscall\nmunmap syscall\nread syscall\nsbrk syscall\nsetpriority syscall\nspawn syscall\ntaskinfo syscall\nwaitpid syscall\nwrite syscall\nyield syscall\nFile and filesystem-related syscalls\nProcess management syscalls\nhandle syscall exception with <code>syscall_id</code> and other …\nwrite buf of length <code>len</code>  to a file with <code>fd</code>\nTask information\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nTask status in it’s life cycle\ntask exits and submit an exit code\nYOUR JOB: get time with second and microsecond HINT: You …\nYOUR JOB: Implement mmap.\nYOUR JOB: Implement munmap.\nchange data segment size\nYOUR JOB: Implement spawn. HINT: fork + exec =/= spawn\nYOUR JOB: Finish sys_task_info to pass testcases HINT: You …\nIf there is not a child process whose pid is same as …\ncurrent task gives up resources for other tasks\nThe numbers of syscall called by task\nTotal running time of task\npid of usertests app in make run TEST=1\nCreation of initial process\nKernel stack for a process(task)\nAbstract structure of PID\nProcessor management structure\nready to run\nrunning\ntask context structure containing some registers\nTask control block structure\nA array of <code>TaskControlBlock</code> that is thread-safe\ntask status: UnInit, Ready, Running, Exited\nuninitialized\nexited\nAdd init process to the manager\nAdd process to ready queue\nImplementation of <code>TaskContext</code>\nThe task currently executing on the current processor\nGet a copy of the current task\nGet the mutable reference to trap context of current task\nGet the current user token(addr of page table)\nExit the current ‘Running’ task and run the next task …\nTake a process out of the ready queue\nReturns the argument unchanged.\nTask pid implementation.\nThe basic control flow of each core, helping to select and …\nMutable\nCalls <code>U::from(self)</code>.\nKernel stack corresponding to PID\nallocate a new kernel stack\nImplementation of <code>TaskManager</code>\nProcess identifier\nAllocate a new PID\nImplementation of <code>Processor</code> and Intersection of control …\nRet position after task switching\nThe main part of process execution and scheduling Loop …\ns0-11 register, callee saved\nReturn to idle control flow for new scheduling\nStack pointer\nSuspend the current ‘Running’ task and run the next …\nWrap <code>switch.S</code> as a function\nGet current task through take, leaving a None in its place\nTypes related to task management &amp; Functions for …\ntask context structure containing some registers\nReturns the argument unchanged.\nCreate a new task context with a trap return addr and a …\nCalls <code>U::from(self)</code>.\nRet position after task switching\ns0-11 register, callee saved\nStack pointer\nCreate a new empty task context\nKernel stack for a process(task)\nAbstract structure of PID\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet the top of the KernelStack\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturn (bottom, top) of a kernel stack in kernel space.\nallocate a new kernel stack\nAllocate a new PID\nPush a variable of type T into the top of the KernelStack …\nTASK_MANAGER instance through lazy_static!\nA array of <code>TaskControlBlock</code> that is thread-safe\nAdd process back to ready queue\nAdd process to ready queue\nTake a process out of the ready queue\nTake a process out of the ready queue\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreat an empty TaskManager\nProcessor management structure\nGet current task in cloning semanteme\nThe task currently executing on the current processor\nGet a copy of the current task\nGet the mutable reference to trap context of current task\nGet the current user token(addr of page table)\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet mutable reference to <code>idle_task_cx</code>\nThe basic control flow of each core, helping to select and …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate an empty Processor\nThe main part of process execution and scheduling Loop …\nReturn to idle control flow for new scheduling\nGet current task in moving semanteme\nGet current task through take, leaving a None in its place\nSwitch to the context of <code>next_task_cx_ptr</code>, saving the …\nready to run\nrunning\nTask control block structure\ntask status: UnInit, Ready, Running, Exited\nuninitialized\nexited\nApplication data can only appear in areas where the …\nchange the location of the program break. return None if …\nA vector containing TCBs of all child processes of the …\nLoad a new elf to replace the original application address …\nIt is set when active exit or execution error occurs\nparent process fork the child process\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nget the trap context\nGet the address of app’s page table\nget the user token\nget pid of process\nHeap bottom\nMutable\nGet the mutable reference of the inner TCB\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nKernel stack corresponding to PID\nApplication address space\nCreate a new process\nParent process of the current process. Weak will not …\nProcess identifier\nProgram break\nSave task context\nMaintain the execution status of the current process\nThe physical page number of the frame where the trap …\nThe number of microseconds per second\nThe number of milliseconds per second\nThe number of ticks per second\nGet the current time in ticks\nget current time in milliseconds\nget current time in microseconds\nSet the next timer interrupt\ntrap context structure containing sstatus, sepc and …\nImplementation of <code>TrapContext</code>\nenable timer interrupt in supervisor mode\nInitialize trap handling\nToken of kernel address space\nKernel stack pointer of the current application\nSupervisor Exception Program Counter\nSupervisor Status Register\nhandle trap from kernel Unimplement: …\ntrap handler\nVirtual address of trap handler entry point in kernel\nreturn to user space set the new addr of __restore asm …\nGeneral-Purpose Register x0-31\ntrap context structure containing sstatus, sepc and …\ninit the trap context of an application\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nToken of kernel address space\nKernel stack pointer of the current application\nSupervisor Exception Program Counter\nput the sp(stack pointer) into x[2] field of TrapContext\nSupervisor Status Register\nVirtual address of trap handler entry point in kernel\nGeneral-Purpose Register x0-31")