import Header from './Header';
import './ShowSubscribers.css';
import React, { Component } from 'react';
class ShowScribers extends Component{
  constructor(){
    super()
this.state = {
  subscribersListToShow:[]
}
  }
  clickHandler= (e)=>{
    alert(e);
  }
  componentDidMount(){
    let newSubscriber = {
        id:1,
        name:'Abhinaw',
        phone:'99999'
    }
    let subscribersList = this.state.subscribersListToShow
    subscribersList.push(newSubscriber)
    this.setState({subscribersListToShow:subscribersList})
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
        {this.props.subscribersList.map(sub => {
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

export default ShowScribers;