import React from "react";
import "./Login.css";
import LoginImg from "../../images/login-img.jpg";

export default function Login()
{
    return(
        <div>
           <div className="login-card">
            <div className="firstdiv">
            
                         <div className="info">

                       <h1 className="welcome-to-admin-text"style={{color:'#15186D',width:"500px"}}>Welcome To Admin</h1>
                        <label className="username"style={{margin:"15px"}}>Username</label><br/>
                       <input className="user-input"
                        type='email'/><br/>

                       <label className="password"style={{margin:"15px"}}>Password</label> <br/>
                       <input className="pass-input"
                       type='password' /><br/>
                      
                       <button className="sign-up-btn"type='button'>Sign Up</button> 
    </div>  
                     </div> 

                     
                     <div className="seconddiv">
                     <img src={LoginImg} alt='LoginImg' className="loginimg"/>

                     </div> 
             
            
             
             </div>
        
        </div>
        
    
)
}
