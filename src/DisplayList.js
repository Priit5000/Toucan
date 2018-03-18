import React from 'react';

class DisplayList extends React.Component{
	constructor(props, context){
		super(props, context);
	
	}
	
	removeItem(item, i){ 
		this.props.removeTask(item, i);
	}
	//displayBird(){
	// return(this.props.showBird);
	//}

	render(){
		var listItems = this.props.names.map(function(task, i){ 
			return <div id="listWrap">
			          <li onClick={() => {this.removeItem(task, i)}} key={i}> 

			            {task} 


			          </li>
			        </div>;
			
		}.bind(this));

		//siia vb for cycle, nii paljuu kui listitemeid on, checkbox + listitem1 jne
		return (
			<div> 
	 		<h3> Tasks </h3>
	 		<ul> 
	 		
	 		{listItems}

	 		</ul>
	 		</div>
			)

	}

}

export default DisplayList;