import React, { useState } from 'react'
import ListItem from './ListItem'

const InputForm = () => {
    const [todos, setTodos] = useState(
        [
            'Apple', 'Mango', 'Guava', 'Pineapple', 'Watermelon'
        ]
    )
    const [value, setValue] = useState()

    const [editingIndex, setEditingIndex] = useState(null);
    const [editingItem, setEditingItem] = useState('');

    const handleOnChange = (e) => {
        let value = e.target.value;
        setValue(value)

    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, value])
        setValue('');
    }

    const handleOnDelete = (index) => {
        // console.log('delete item', index);  
        setTodos(todos.filter((item, i) => i !== index))
    }

    const handleOnEdit = (index) => {
        setEditingIndex(index);
        setEditingItem(todos[index]);
    }

    const handleSaveEdit = () => {
        const newTodos = todos.slice();
        newTodos[editingIndex] = editingItem;
        setTodos(newTodos);
        setEditingIndex(null);
        setEditingItem('');
    };

    return (
        <div>
            <form className="row g-3" onSubmit={handleOnSubmit}>
                <div className="col-auto">

                    <input type="text" onChange={handleOnChange} value={value} />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">Add Todo</button>
                </div>
            </form>
            <div>
                <ListItem todos={todos} handleOnDelete={handleOnDelete} handleOnEdit={handleOnEdit} />
                {editingIndex !== null && (
                    <div>
                        <input
                            type="text"
                            value={editingItem}
                            onChange={(e) => setEditingItem(e.target.value)}
                        />
                        <button onClick={handleSaveEdit}>Save</button>
                    </div>
                )}

            </div>
        </div>
    )
}

export default InputForm
