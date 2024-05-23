import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addTask, deleteTask, updateTask } from '../slice/taskslice';

export default function Tasklist() {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);
  const [taskDetails, setTaskDetails] = useState('');
  const [eidt, setEdit] = useState(false)

  const handleAddTask = () => {
    if(taskDetails == ''){
      alert('required to fill the input')
    }
    else{

      dispatch(addTask({ id: Date.now(), details: taskDetails }));
      setTaskDetails('');
    }
  };

  const handleUpdateTask = (id) => {
    dispatch(updateTask({ id, details: taskDetails }));
    setEdit(!eidt)
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <input
        type="text"
        placeholder="task"
        value={taskDetails}
        onChange={e => setTaskDetails(e.target.value)}
        className="mb-2 p-2 border border-zinc-500 w-[25vw] rounded-lg"
      />
      
      <ul>
        {
          eidt ? 
          <button onClick={handleAddTask} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Add Task</button>:
          <button onClick={handleAddTask} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">welrkjwe</button>
        }
        
        {tasks.map(task => (
          <li key={task.id} className="flex justify-between items-center mb-2">
            <span>{task.details}</span>
            
            <button onClick={() => handleUpdateTask(task.id)} className="bg-yellow-500 text-white px-4 py-2 rounded ml-2">Update</button>
            <button onClick={() => handleDeleteTask(task.id)} className="bg-red-500 text-white px-4 py-2 rounded ml-2">Delete</button>
            
          </li>
        ))}
      </ul>
    </div>
  );
}
