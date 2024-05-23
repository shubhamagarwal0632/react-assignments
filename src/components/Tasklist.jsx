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
    
      
      <ul>
        {
          eidt ? (<>
          <input
          type="text"
          placeholder="update"
          value={taskDetails}
          onChange={e => setTaskDetails(e.target.value)}
          className="mb-2 p-2 border border-zinc-500 w-[50vw] sm:w-[45vw] rounded-lg"
        />
          </>)
           :(<>
          <input
          type="text"
          placeholder="task"
          value={taskDetails}
          onChange={e => setTaskDetails(e.target.value)}
          className="mb-2 p-2 border border-zinc-500 w-[50vw] sm:w-[45vw] rounded-lg"
        /><button onClick={handleAddTask} className="bg-blue-500 text-white px-4 py-2 rounded mb-4 ml-2">Add Task</button>
        
        </>
        )
        }
        
        {tasks.map(task => (
          <li key={task.id} className="flex  items-center mb-2">
            <span className='border border-zinc-900 w-[50vw] sm:w-[10vw] px-4 py-2 rounded ml-2'>{task.details}</span>
            <button onClick={() => handleUpdateTask(task.id)} className="bg-yellow-500 text-white px-4 py-2 rounded ml-2">Update</button>
            <button onClick={() => handleDeleteTask(task.id)} className="bg-red-500 text-white px-4 py-2 rounded ml-2">Delete</button>
            
          </li>
        ))}
      </ul>
    </div>
  );
}
