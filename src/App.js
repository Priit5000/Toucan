import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask'
import DisplayList from './DisplayList'

export default class TodoContainer extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      tasks:[],
      img: <img src={require('./tuukan.jpg')} />
    }

    this.removeTask = this.removeTask.bind(this);

  }

  addTask(task){
    this.setState({
      tasks: this.state.tasks.concat([task]) 
    });
  }

  showBird(){
        if (this.state.tasks.length == 0) {
            return(
              this.state.img
            )
          } 
        }
    
  


  removeTask(name, i){
        let tasks = this.state.tasks.slice(); //slice method returns new array, OG stays
        tasks.splice(i, 1);                   //let is block scope,, slice teeb copy k6igist ja splice muteerib siis copyt, muidu 
                                              //muteeriks orikat th.st.ta
        this.setState({                       //see toob siis splicitud array ilmselt
            tasks
        });
  }
   /* selectTasks(e){
      this.setState({tasks: this.state.tasks.concat([e.target.value])})
    };

   removeTask(e) {
      var array = this.state.tasks;
      var index = array.indexOf(e.target.value)
      array.splice(index, 1);
      this.setState({tasks: array });

    }; */
  
  render() {
    return ( 
      <div className="App">
        
        <AddTask addNew={this.addTask.bind(this)} />
        <DisplayList names={this.state.tasks} removeTask={this.removeTask} />
        <div>{this.showBird()}</div>
      </div>
    )
  }
  
}

// this is how to remove an item; var removedItem = fruits.splice(pos, 1);


