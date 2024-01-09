import { ITask } from './task';

export class TaskService {
  private readonly taskMap: Map<string, ITask> = new Map<string, ITask>();

  add(t: ITask): void {
    this.taskMap.set(t.id, t);
  }

  remove(id: string): void {
    this.taskMap.delete(id);
  }

  get(): ITask[] {
    return Array.from(this.taskMap.values());
  }


  deserialize(tasks: ITask[]): void {
    throw new Error('not implemented');
    // this.taskMap.clear();
    //
    // for (let i = 0; i < tasks.length; i++) {
    //   const task = tasks[i];
    //   this.taskMap.set(task.id, task);
    // }
  }



}
