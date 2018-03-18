import React from 'react';
import './App.css';
import AddTask from './AddTask'
import DisplayList from './DisplayList'

export default class TodoContainer extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      tasks:[],
      img: <img src={require('./tuukan.jpg')} alt="" />
    }

    this.removeTask = this.removeTask.bind(this);

  }

  addTask(task){
    this.setState({
      tasks: this.state.tasks.concat([task]) 
    });
  }

  showBird(){
        if (this.state.tasks.length === 0) {
            return(
              this.state.img
            )
          } 
        }
    
  


  removeTask(name, i){
        let tasks = this.state.tasks.slice(); 
        tasks.splice(i, 1);                   
                                              
        this.setState({                       
            tasks
        });
  }
  //ignore
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




