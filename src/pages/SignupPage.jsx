import { useState } from "react";
import CustomButton from "../components/button";


function Signup ({onPress,cancelHandle}){
    const [nameS,setName] = useState("");
    const [emailS,setEmail] = useState("");
    const [passwordS,setPassword] = useState("");
    const [ConfirmpasswordS,setConfirmPassword] = useState("");
    


function handleName(value){
    const nameStr = nameS + value.nativeEvent.data.toString()
    setName(nameStr)
}
function handleEmail(value){
    const emailStr = emailS + value.nativeEvent.data.toString()
    setEmail(emailStr)
}

function handlePassword(value){
    const passStr = passwordS + value.nativeEvent.data.toString()
    setPassword(passStr)
}
function handleConfirmPassword(value){
    const confirmpasswordStr = ConfirmpasswordS + value.nativeEvent.data.toString()
    setConfirmPassword(confirmpasswordStr)
}
return(
    <div align='center'>
        <div  style={{display: 'flex',flexDirection:'column',justifyContent: 'center', width : '50%',alignItems: 'center'}}>
        <div align='left'>
            <h4>Name</h4>
            <input style={{fontSize: 24, margin: '15px 0 30px' , borderRadius: 6}} type="text" name="" id="user" placeholder="Name" value={nameS} onChange={handleName} />

        <h4>Email</h4>
        <input style={{fontSize: 24, margin: '15px 0 30px' , borderRadius: 6}} type="text" name="" id="user" placeholder="Email" value={emailS} onChange={handleEmail} />
        
        <h4>Password</h4>
        <input style={{fontSize: 24, margin: '15px 0 30px' , borderRadius: 6}} type="password" name="" id="pass" placeholder="Password" value={passwordS} onChange={handlePassword}  />
        <h4>Password</h4>
        <input style={{fontSize: 24, margin: '15px 0 30px' , borderRadius: 6}} type="password" name="" id="pass" placeholder="Confirm Password" value={ConfirmpasswordS} onChange={handleConfirmPassword}  />
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <CustomButton onPress={onPress.bind(this,emailS,passwordS)}>Signup</CustomButton>
        <CustomButton onPress={cancelHandle}>Cancel</CustomButton>
        </div>
        </div>
    </div>
    </div>
)
}

export default Signup