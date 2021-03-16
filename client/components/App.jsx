import React, {Component} from 'react';
import TrackerMainContainer from './TrackerMainContainer.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    //create fetch request to populate state from db file


  }

  componentDidMount() {
    fetch('/api/workouts')
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      return this.setState(data)
    })
    .catch(()=>console.log('componentDidMount error'));
  }

  render() {
    return(
      <div>
        <h1>LIFTR</h1>
        <TrackerMainContainer></TrackerMainContainer>
      </div>
    )
  }
}

export default App;