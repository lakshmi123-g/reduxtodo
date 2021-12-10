import React, { useState } from "react";
import "./Todo.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Todo = ({ toggleTodo, task, completed, id, removeTodo, updateTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editTask, setEditTask] = useState(task);

    const handleUpdate = (e) => {
        e.preventDefault();
        updateTodo(id, editTask);
        setIsEditing(false)

    }
    return (
        <TransitionGroup className={completed ? "todo completed" : "Todo"}>
            {isEditing ? (
                <CSSTransition key="editing" timeout={500} classNames="task-text">
                    <form className="Todo-edit-form" onSubmit={handleUpdate}>
                        <input type="text"
                            name="task"
                            value={editTask}
                            onChange={(e) => setEditTask(e.target.value)}
                        />
                        <button>Save</button>
                    </form>




                </CSSTransition>
            ) : (
                <CSSTransition key="normal" timeout={500} classNames="task-text">
                    <li className="Todo-task" onClick={toggleTodo}>
                        {task}
                    </li>
                </CSSTransition>
            )}

            <div className="Todo-buttons">
                <button onClick={() => setIsEditing(true)}>
                    <i className="fas fa-pen" />
                </button>

                <button onClick={removeTodo}>
                    <i className="fas fa-trash" />
                </button>
            </div>
        </TransitionGroup>
    );
};

export default Todo;
