import React, { Component } from 'react';
import './App.css';
import Todos from './component/Todos';
import Header from './component/layout/Header';
import AddTodo from './component/AddTodo';
import About from './component/pages/About';
//import uuid from 'uuid';
import {BrowserRouter as Router, Route } from 'react-router-dom';// curly braces becauses it has bunch of info which needs to displayed
import Axios from 'axios';


class App extends Component {

  /*state={
    todos:[
      {
        id:uuid.v4(),
        title:"Take out the trash",
        completed:false
      },
      {
        id:uuid.v4(),
        title:"Dinner with wife",
        completed:true
      },
      {
        id:uuid.v4(),
        title:"Meeting with boss",
        completed:false
      }


    ]
  }*/
  state={
    todos:[]
  }
componentDidMount(){
  Axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
  .then(res => this.setState({ todos:res.data}))
}
  //Toggle Complete
  markComplete = (id) => {
    //console.log(id)
    // we need to update the state by matching the id and if 
    //matched then change  the state of completed when it is checked
    // todo=>{};
        this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed =! todo.completed}
        return todo;
      
    }) });
    }

    //Delete todo
    /*delTodo=(id)=>{
      console.log(id);
      this.setState({ todos: [...this.state.todos.filter(todo  => todo.id !== id)] } );
    
    }*/
//Add todo
addTodo =(title) => {
  console.log(title);

  // this is a new todo which will will be added to the set state as below.Thus a new row will be added .
  Axios.post('https://jsonplaceholder.typicode.com/todos',{
    title,
    completed:false
  })
  .then(res =>this.setState({ todos: [...this.state.todos, res.data] }));
}

delTodo=(id)=>{
Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
.then(res=> this.setState({ todos: [...this.state.todos.filter(todo  => todo.id !== id)] }));
 

}
//add a reuest to json placeholder
/*addTodo =(title) => {
   const newTodo  = {
    id:uuid.v4(),
    title,
    completed:false
  }
  this.setState({ todos: [...this.state.todos, newTodo] });
}

*/

//json holder gives a placeholder to place the id.Currently a id is added only at place 4 and which will wilol give warning whwn we add 2 items.
//We will use uuid 
 /*single load of this load will load the whole add todo */
  render() {
    return (
      <Router>
      <div className="App">
        <div className="container">
          <Header/>
         
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Todos todos={this.state.todos} markComplete={this.markComplete}  delTodo={this.delTodo}/>
            </React.Fragment>
          ) }/>
          
         <Route path="/about" component={About} />
       </div>     
      </div>
      </Router>
    );
  }
}

export default App;
