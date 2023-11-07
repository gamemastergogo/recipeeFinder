import { useState } from "react";
import CustomButton from "../components/button";

function Login({onPress,cancelHandle,signupButtonHandle}){
    const [usernameS,setUsername] = useState("");
    const [passwordS,setPassword] = useState("");

    function handleUserName(value){
        const userStr = usernameS + value.nativeEvent.data.toString()
        setUsername(userStr)
    }
    function handlePassword(value){
        const passStr = passwordS + value.nativeEvent.data.toString()
        setPassword(passStr)
    }
    return(
        <div align='center'>
            <div  style={{display: 'flex',flexDirection:'column',justifyContent: 'center', width : '50%',alignItems: 'center'}}>
            <div align='left'>
            <h4>Email</h4>
            <input style={{fontSize: 24, margin: '15px 0 30px'}} type="text" name="" id="user" placeholder="Username" value={usernameS} onChange={handleUserName} />
            
            <h4>Password</h4>
            <input style={{fontSize: 24, margin: '15px 0 30px'}} type="password" name="" id="pass" placeholder="Password" value={passwordS} onChange={handlePassword}  />
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <CustomButton onPress={onPress.bind(this,usernameS,passwordS)}>Login</CustomButton>
            <CustomButton onPress={cancelHandle}>Cancel</CustomButton>
            </div>
            <p style={{display: 'flex',justifyContent: 'center',cursor: 'pointer'}} onClick={signupButtonHandle} >New to our website? </p>
            <p style={{display: 'flex',justifyContent: 'center',cursor: 'pointer'}} onClick={signupButtonHandle} >SignUp Chef...</p>
            </div>
        </div>
        </div>
    )
}

export default Login;