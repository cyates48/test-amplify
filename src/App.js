import './App.css';
import { DataStore } from '@aws-amplify/datastore';
import { Locations } from './models';
import { Auth } from 'aws-amplify';

function App() {

  const addLocation = async () => {
    await DataStore.save(
      new Locations({
        "name": "Chris Yates",
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

        <br></br>
        <br></br>
        {/* <button onClick={addUser}>Save User</button> */}
        <button onClick={addLocation}>Save Location</button>
        {/* <button onClick={getUser}>Get User</button> */}
      </header>
    </div>
  );
}

export default App;
