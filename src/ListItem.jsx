import React from 'react'

const ListItem = ({todos, handleOnDelete, handleOnEdit}) => {

  
    return (
        <div>
            <ul className="list-group">
                {
                   todos.map((item, index) => (
                        <li key={index} className="list-group-item">{item}
                        <button type="button" className="btn btn-warning float-end" onClick={() => handleOnDelete(index)}>Delete</button> 
                        <button type="button" className="btn btn-info float-end anil" onClick={() => handleOnEdit(index)}>Edit</button>
                         </li>
                    ))
                    
                }
            </ul>
        </div>
    )
}

export default ListItem
