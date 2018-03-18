import React from 'react'

class AddTask extends React.Component {
	constructor(props, context){
		super(props, context);

		this.state = {
			newTask: ''

		}
	}

	updateNewTask(e){
	  
		this.setState({
			newTask: e.target.value
		});
	  
	}

	handleAddNew(){
	  if(this.state.newTask !== ''){ //avoids the addition of empty tasks
		this.props.addNew(this.state.newTask);
		this.setState({
			newTask: ''
		});
	  }
	}

	keyPress(e){
      if(e.keyCode === 13){
         this.handleAddNew();
      }
   }

	render(){
		return(
			<div>
				<input 
					type="text"
					value={this.state.newTask}
					onChange={this.updateNewTask.bind(this)}
					onKeyDown={this.keyPress.bind(this)} />

					<button onClick={this.handleAddNew.bind(this)}> Add Task! </button> 
			</div>

			);
	}

}
export default AddTask;