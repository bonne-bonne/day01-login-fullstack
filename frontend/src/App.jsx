// =========== IMPORTS ========= //
import './App.css';
import { useState } from 'react';

function App() {
  const [emailLogin, setEmailLogin] = useState(); // What the user types into the email box
  const [passwordLogin, setPasswordLogin] = useState(); // What the user types into the password box
  const [messageToRender, setMessageToRender] = useState(); // Message to say if the login was successful or not


  // Function to login the user
  function handleLogin (e) {
    e.preventDefault();
    console.log("Login testing")
    
    // fetch to send the DB to the backend
    // We will finish this on Tuesday next week

  }
 

  return (
    <>
      <h1>Full Stack Login Form</h1>

      {/* ===== FORM ELEMENTS ===== */}
      <form className='form'>
        {/* Email text box */}
        <label>Email:</label>
        <input type='email' className='textbox' name="email" />
        <br />

        {/* Password text box */}
        <label>Password:</label>
        <input type="password" className='textbox' name="password" />
        <br />

        {/* Submit button */}
        <button name="login" type="submit" onClick={handleLogin}>Login</button>

      </form>
    </>
  )
}

export default App
