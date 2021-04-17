import Header from './Header';
import './App.css';
function App() {
  let subscribers = [
    {
      id: 1,
      name: "Abhinaw",
      phone: "9999999999"
    },
    {
      id: 2,
      name: "Kiran",
      phone: "88888888"
    }
  ]
  return (

    <div>
      <Header heading="Phone Directory" />
      <div className="component-body-container">
        <button className="custom-btn add-btn">Add</button>

        <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>
        </div>
        {subscribers.map(sub => {
          return <div key={sub.id} className="grid-container">
            <span className="grid-item">{sub.name}</span>
            <span className="grid-item">{sub.phone}</span>
            <span className="grid-item action-btn-container">
              <button className="custom-btn delete-btn" onClick={clickHandler.bind(this,"Delete Clicked")}>Delete</button>
            </span>
          </div>
        })}
      </div>
    </div>
  );
}
function clickHandler(message) {
  alert(message)
}
export default App;
