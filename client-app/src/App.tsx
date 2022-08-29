import React, { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {Header, List} from 'semantic-ui-react';

function App() {
  const [activties, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/Activities').then(response => {
      console.log(response);
      setActivities(response.data);
    })
  }, [])

  return (
    <div className="App">
      <Header as='h2' icon='users' content='Reactivities'/>
        <img src={logo} className="App-logo" alt="logo" />
        <List>
          {activties.map((activity:any) => (
            <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
          ))}
        </List>
    </div>
  );
}

export default App;
