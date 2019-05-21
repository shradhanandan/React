import React, { Component } from 'react';
import Proptypes from 'prop-types';



class TodoItem extends Component { 

  /*  getStyle =() =>{
        if(this.props.todo.completed){
            return{
                textDecoration:'line-through'
            }
        }
            else{
                return{
                textDecoration:'none'
                
            }
        }
    }*/
    //to set the background color using function
    getStyle =() =>{
        return {
            background :"lightgrey",
            padding:'10px',
            borderBottom :'1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 
            'line-through':'none'
        }
    }
//shows error(cant read property of this ) because this have doesnt any access and it is a custom function
//So we can use 2 ways: 1 use bind   .bind(this)2. can use arrow function(overcome this)
//in other function this is accessible in component  
   
  render() { 
      const {id ,title } = this.props.todo;
    return (
        <div style={this.getStyle()}>
        <input type="checkbox" onChange={this.props.markComplete.bind(this,id)} />{ ' '}
         {title}
         <button onClick={this.props.delTodo.bind(this,id)}style={btnStyle}>x</button>
         </div>
    )
  }
}

TodoItem.propTypes={
    todo:Proptypes.object.isRequired,
    markComplete:Proptypes.func.isRequired,
    delTodo:Proptypes.func.isRequired
}

//set a variable for applyiong the style
/*const itemStyle={
    backgroundColor:'lightgrey'
}
*/
const btnStyle={
    backgroundColor:'#ff0000',
    color:'#fff',
    border:'none',
    padding:'5px 8px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
}

export default TodoItem;
