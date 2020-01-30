import React from 'react';

//this componet is just used to contain the players 
const Ingredients = (props) => {
    return (
      // comeback to add item remove 
        
        <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          value={this.state.value}
          onChange={this.handleValueChange}
          placeholder="Enter a player's name"
        />
        
        <input 
          type="submit"
          value="Add Player"
        />
      </form>
    );
}

export default Ingredients;

