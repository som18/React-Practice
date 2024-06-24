import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isregistered, setIsregistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);

  const handleauthentication = () =>{
    if(isregistered){
        const user = users.find((u)=> u.email === email && u.password === password);
        if(user){
            setIsLoggedIn(true);
        }
        else{
            alert('Login Failed, Please check your credentials')
        }

    }
    else{
        const newUser = {email,password};
        setUsers([...users,newUser]);
        localStorage.setItem('users',JSON.stringify([...users,newUser]));
        setIsLoggedIn(true);
    }
    
  }

  const handleLogout =()=>{
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
  }

  
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2> Welcome {email}</h2>
          <button onClick={handleLogout}> Logout</button>
        </div>
      ) : (
        <div>
            <h2> {isregistered ? 'Login' : 'Register'} </h2>
          <form>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleauthentication}>{isregistered ? "Login" : "Register"}</button>
          </form>
          <p>
            {isregistered
              ? "Don't have an account ? Register now"
              : "You are registered, please login"}
          </p>
          <button onClick={() => setIsregistered(!isregistered)}>
            {isregistered ? "Register" : "Login"}
          </button>
        </div>
      )}
    </div>
  );
}
