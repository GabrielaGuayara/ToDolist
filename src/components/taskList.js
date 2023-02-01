import React from 'react'
import Displaylist from './Displaylist'

const taskList = (props) => {
    return <ul> 
                <h4>Task List</h4>

                {(props.list.map(list =>
                
                <Displaylist list={list}
                            key={list.id} 
                            del={props.delete}  //Passing the deleteTask function from app.js
                            checktask={props.check} //Passing the checkComplete function from app.js
                />)
                )}
            </ul>}

export default taskList