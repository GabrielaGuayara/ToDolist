import React from 'react'
// import Delete from './img/delete2.png'
import Delete from '../img/delete2.png'

const Displaylist = (props) => {
   const checktask ={
            textDecoration: props.list.complete ?  'line-through': 'none', //if the task is complete, a line will be drawn over the text
            backgroundColor: props.list.complete ?   'transparent': 'rgb(255, 255, 87)' //if the task is not complete, the background of the item will be yellow. 
        }
    return (
            //Style items using an object.
            <li  style ={checktask}>{props.list.task} 
            <div>
            <button className="btn btn-success"  onClick ={props.checktask.bind(this, props.list.id)} > Complete</button> 
            <img  className='delete' src={Delete} alt='delete' onClick={props.del.bind(this, props.list.id)}/>
            </div>
            </li>

    )
}
 export default Displaylist
