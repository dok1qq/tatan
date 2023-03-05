import './task-list.css';

import Task from '../task/task';
import { ITask } from '../../task';
import { useTasksContext } from '../../tasks-context';

function TaskList() {
  const { tasks, update, remove } = useTasksContext();

  return (
    <div className="task-list">
      {tasks.map((task: ITask) => {
        return (
          <Task
            key={task.id}
            task={task}
            onTaskChange={update}
            onTaskRemove={remove}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
