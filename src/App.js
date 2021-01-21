import { DataStore } from '@aws-amplify/datastore';
import { Locations } from './models';
import Amplify, { Auth, Storage, API } from 'aws-amplify';
import { useState } from 'react';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';

import './App.css';

Amplify.configure(awsconfig);

function App() {
  const [file, setFile] = useState(null);
  const [locations, setLocations] = useState([]);

  const addLocation = async () => {
    await DataStore.save(
      new Locations({
        "name": "Chris Yates 3",
        "latitude": '12.1024',
        "longitude": "12.1970",
      })
    );
  }

  const signIn = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    try {
        const user = await Auth.signIn(email, password);
        console.log('signed in: ', user);
        alert('signed in: ', user);
    } catch (error) {
        console.log('error signing in', error);
        alert(error);
    }
  };

  const onChange = (e) => {
    setFile(e.target.files[0]);
  }

  const uploadPhoto = (e) => {
    Storage.put(`${file?.name}`, file, {
        contentType: 'image/png'
    })
    .then (result => console.log(result))
    .catch(err => console.log(err));
  }

  const getTodos = async () => {
    console.log('getTodos');
    API.get('todosAPI', '/todos', {}).then(res => console.log(res)).catch(err => console.log(err))
  }

  return (
    <div className="App">
      <header className="App-header">
        <p className="App-link">Learn React</p>
        <br></br>

        <label>email</label>
        <input id="email"/>
        <label>password</label>
        <input id="password" />
        <button onClick={signIn}>Sign In</button>

        <label>file upload</label>
        <input
          type="file" 
          accept='image/png'
          onChange={(e) => onChange(e)}
        />
        <button onClick={uploadPhoto}>Upload Photo</button>
        

        <br></br>
        <br></br>
        {/* <button onClick={addUser}>Save User</button> */}
        <button onClick={addLocation}>Save Location</button>
        {/* <button onClick={getUser}>Get User</button> */}
        <br></br>
        <br></br>
        <button onClick={getTodos}>Get Todos</button>
        {locations.length > 0 ? locations.map(location => <div>{location.name}</div>) : null}
      </header>
    </div>
  );
}

export default withAuthenticator(App);