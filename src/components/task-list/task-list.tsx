import { ITask } from '../../task';
import Task from '../task/task';
import { useTasksContext } from '../../tasks-context';

function TaskList() {
  const { tasks, update, remove } = useTasksContext();

  return (
    <ul>
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
    </ul>
  );
}

export default TaskList;
