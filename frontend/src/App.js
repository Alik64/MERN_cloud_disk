import { useState } from 'react'
import axios from 'axios'

function App() {

  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")



  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && pwd) {
      const newValues = JSON.stringify({ email: email, password: pwd })
      axios.post("http://localhost:5000/api/auth/registration", newValues, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

    }



  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePwdChange = (e) => {
    setPwd(e.target.value)
  }
  return (
    <div className="App">

      // http://localhost:5000/api/auth/registration

      <form onSubmit={handleSubmit} >
        <input
          value={email}
          onChange={handleEmailChange}
          placeholder='Email'
          type="email"
          required />
        <br />
        <input
          value={pwd}
          onChange={handlePwdChange}
          placeholder='Password'
          type="password"
          required />

        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
