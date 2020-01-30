import React, { Component } from 'react';
import Button from './Button';
import Items from './Items';
import './App.css';
import AddItemForm from './AddItemForm';



class App extends Component{

  state = {
    item: [
      {
        name: "Orange Juice",
        measurements: "1",
        units:"carton",
        id:1,
        underLine:false
      }
      
    ]
  };

prevItemId = 1;
handleAddItem = (name) => { 
  this.setState( prevState => {
    return {
      item: [
        ...prevState.item,
        {
          name,
          id: this.prevItemId += 1,
          className:"line-through"
          
        } 
      ] 
    };
  });
} 

handleRemoveItem = (id) =>{
  this.setState (prevState=>{
    return {
      item: prevState.item.filter(p =>p.id !==id)
    };
  })
}

handleGotItem = (index) => {

  this.setState( prevState => {
  const updatedItems = [...prevState.item];
  const updatedItem = {...updatedItems[index]};
  if(!updatedItem.underLine){
    updatedItem.underLine = true;
   
  }
  else{
    updatedItem.underLine=false;
  }
  updatedItems[index] = updatedItem;
  console.log(updatedItems[index]);  
  return{
    item: updatedItems
  };
  

});
}
updateCSS = (e) =>{
  e.preventDefault();
  this.handleAddItem(e);
}
  render(){
    return (
    <div className="App">
      <div className="list">
      <h1>Shopping List</h1>
      <AddItemForm addItem={this.handleAddItem}/>  {/*This form will inherit handleAddItem  */}
      {this.state.item.map((item, index) =>
        <Items
          name={item.name}
          measurement={item.measurements}
          unit= {item.units}
          id={item.id}
          index={index}
          className={item.className}
          removeItem={this.handleRemoveItem}
          handleGotItem={this.handleGotItem}
          underLine={item.underLine}
        />
      )}
      </div>
    </div>
    
  );}
}

export default App;




