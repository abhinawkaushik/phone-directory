import Header from './Header';
import './App.css';
import React, { Component } from 'react';
class App extends Component{
  constructor(){
    super()
this.state = {
  subscribersListToShow:[]
}
  }
  clickHandler= (e)=>{
    alert(e);
  }
  render(){
    return (
      <div>
      <Header heading="Phone Directory" />
      <div className="component-body-container">
        <button className="custom-btn add-btn">Add</button>

        <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>
        </div>
        {this.state.subscribersListToShow.map(sub => {
          return <div key={sub.id} className="grid-container">
            <span className="grid-item">{sub.name}</span>
            <span className="grid-item">{sub.phone}</span>
            <span className="grid-item action-btn-container">
              <button className="custom-btn delete-btn" onClick={this.clickHandler.bind(this,"Delete Clicked")}>Delete</button>
            </span>
          </div>
        })}
      </div>
    </div>
    )
  }
}

export default App;
