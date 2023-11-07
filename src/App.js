import Pages from "./pages/Pages";
import Category from "./components/category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import {GiKnifeFork} from "react-icons/gi";
import {Link} from "react-router-dom";
import CustomButton from "./components/button";
import { useState } from "react";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";

const credentials = [{
  username: 'sachin',
  password: '1234',
}]

function App() {

  const [toRender, setRender] = useState(
    <Login onPress={loginHandler} cancelHandle={signoutHandler} signupButtonHandle={signupButtonHandle} />
  );
  function signoutHandler(){
    setRender(
      <>
      <Search/>
      <Category/>
      <Pages/>
    </>
    )
  }

  function loginHandler(username,password){
    console.log(username);
    console.log(password);
    let found = false;
    for(let ele in credentials){
      if(credentials[ele].username === username){
        if(password === credentials[ele].password){
          found = true;
          signoutHandler();
        }
        else{
          alert("Invalid Credentials");
        }
      }
    }
    if(found === false){
      alert("Invalid Credentials");
    }
    
  }

  function signupHandler(username,password){
    console.log(username);
    console.log(password);
    const user = {
      username: username,
      password: password
    }
    credentials.push(user);
    signoutHandler();
  }

  function loginButtonHandle(){
    setRender(<Login onPress={loginHandler} cancelHandle={signoutHandler} signupButtonHandle={signupButtonHandle} />)
  }
  function signupButtonHandle(){
    setRender(<Signup onPress={signupHandler} cancelHandle={signoutHandler} />)
  }
  

  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiKnifeFork/>
        <Logo onClick={signoutHandler} to={"/"}>Swadishth</Logo>
        <div style={{position: 'absolute', top: 15, right: 20,display: 'flex'}}>
          <CustomButton onPress={loginButtonHandle}>Login</CustomButton>
          <CustomButton onPress={signupButtonHandle}>Signup</CustomButton>
        </div>
        
      </Nav>
     
        {/* <Search/>
        <Category/>
        <Pages/> */}
        {toRender}
       
        </BrowserRouter>
        
    </div>
  );
}
const Logo = styled(Link)`
text-decoration:none;
font-size:2rem;
font-weight:400;
font-family:'Lobster Two',cursive;

`
const Nav = styled.div`
padding:4rem 0rem;
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
svg{
  font-size:4rem;
}
`;
export default App;