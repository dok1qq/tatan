import { ITask } from '../../task';
import Task from '../task/task';
import { useTasksContext } from '../../tasks-context';

interface TaskListProps {
  tasks: ITask[];
}

function TaskList() {
  const { tasks, update } = useTasksContext();

  return (
    <ul>
      {tasks.map((task: ITask) => {
        return (
          <Task key={task.id} task={task} onTaskChange={update} />
        );
      })}
    </ul>
  );
}

export default TaskList;
