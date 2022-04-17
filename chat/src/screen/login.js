import GoogleLogin from 'react-google-login';
import { useState } from 'react';

function Login() {
  const [loginData, setloginData] = useState(
    localStorage.getItem('loginData')
    ? JSON.parse(localStorage.getItem('loginData'))
    : null
  )
  const handlefailure = (result)=>{
    alert(result)
  }
  const handlelogin = async (googledata) =>{
    const res = await fetch('/api/google-login', {
      method: 'POST',
      body: JSON.stringify({
        token: googledata.tokenId,
      }),
      headers: {
        'Content-type': 'application/json'
      }
    })
    if (res.ok){
      console.log("yes")
    } else{
      console.log('pass')
    }
    const data = await res.json()
    setloginData(data);
    localStorage.setItem('loginData', JSON.stringify(data))
  }
  //all thing before is async 
  const handleLogout = () =>{
    localStorage.removeItem('loginData')
    setloginData(null)
  }

  return (
    <div className="App">
      <h1>
        React google login
      </h1>
      <div>
        {
          loginData ? (
            <div>
              <h3>You logged in as {loginData.email}</h3>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ):
          (
      <GoogleLogin 
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="log in with google"
      onSuccess={handlelogin}
      onFailure={handlefailure}
      ></GoogleLogin>
          )
        }
      </div>
    </div>
  );
}

export default Login;
