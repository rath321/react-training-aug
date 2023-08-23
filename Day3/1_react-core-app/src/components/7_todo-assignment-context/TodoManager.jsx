import React, { Component } from 'react';
import TodoContextProvider, { TodoContext } from './TodoContext';

class TodoList extends Component {
    render() {
        const todos = this.context[0];
        
        return (
            <div className="mt-5">
                <h1 className="mb-4">Todo List</h1>
                <ul className="list-group mb-4">
                    {
                        todos.map((todo, index) => (
                            <li key={todo.id} className="list-group-item">{todo.description}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

TodoList.contextType = TodoContext;

class Add2Todo extends Component {
    render() {
        const addToDo = this.context[1];
        return (
            <form className='mt-5' onSubmit={(e) => {
                e.preventDefault();
                if (this.tBox) {
                    addToDo(this.tBox.value);
                }
            }}>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Add a new todo..."
                        ref={elm => this.tBox = elm}
                    />
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
        );
    }
}

Add2Todo.contextType = TodoContext;

class TodoManagerContext extends Component {
    render() {
        return (
            <TodoContextProvider>
                <Add2Todo />
                <TodoList />
            </TodoContextProvider>
        );
    }
}

export default TodoManagerContext;