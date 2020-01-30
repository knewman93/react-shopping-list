import React, {componet} from 'react';


const Items = (props) => {

    var completedItem = "none";
    if(props.underLine){
      completedItem= "gotItem";
    }


    return (
      <div className="items">
        <button className="remove-player" onClick={() => props.removeItem(props.id)}>✖</button>
        <p onClick={()=> props.handleGotItem(props.index)} className={completedItem} > {props.name} </p>
        {console.log(props.underLine)}
      </div>
    );
}

export default Items;