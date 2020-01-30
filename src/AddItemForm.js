import React, { Component } from 'react';

class AddItemForm extends Component {

  state = {
    value:''
  };

  handValueChange =(e)=>{ // just tells the state to update with the new information 
    this.setState({value: e.target.value});
  }

  handeSubmit = (e) => { 
    e.preventDefault();
    if(this.state.value){
      this.props.addItem(this.state.value); // sends value of the form to the function 
      this.setState({value:''}); // then once the app state is update the addItemForm state is updated 
    }
    else{
      alert("You can eat 'nothing\" are you trying to starve?");
    }
  }
  render() {
    return (
   
      <form onSubmit={this.handeSubmit}>
      <input 
        type="text"
        value={this.state.value}
        onChange={this.handValueChange}
        placeHolder="Enter an Item"
        className="inputField"
      />
      <input 
        type="submit"
        value="+"
      />

      </form>
  
    
      
    );
  }
}

export default AddItemForm;



