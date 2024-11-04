import React, { useState } from 'react';
import './Tasklist.css';

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [filter, setFilter] = useState('all');
    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState('');

    const addTask = () => {
        setTasks([...tasks, { text: newTask, completed: false }]);
        setNewTask('');
    };

    const toggleComplete = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const startEditing = (index) => {
        setEditIndex(index);
        setEditText(tasks[index].text);
    };

    const saveEdit = () => {
        const updatedTasks = tasks.map((task, i) =>
            i === editIndex ? { ...task, text: editText } : task
        );
        setTasks(updatedTasks);
        setEditIndex(null);
        setEditText('');
    };

    const filteredTasks = tasks.filter(task =>
        filter === 'completed' ? task.completed : filter === 'incomplete' ? !task.completed : true
    );

    return (
        <div>
            <h2>Task List</h2>
            <input type="text" placeholder='Write here' value={newTask} onChange={(e) => setNewTask(e.target.value)} />
            <button onClick={addTask}>Add Task</button>
            <select onChange={(e) => setFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="incomplete">Incomplete</option>
            </select>
            <ul>
                {filteredTasks.map((task, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleComplete(index)}
                        />
                        {editIndex === index ? (
                            <input
                                type="text"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                            />
                        ) : (
                            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                                {task.text}
                            </span>
                        )}
                        {editIndex === index ? (
                            <button onClick={saveEdit}>Save</button>
                        ) : (
                            <button onClick={() => startEditing(index)}>Edit</button>
                        )}
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
