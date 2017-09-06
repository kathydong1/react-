import React, { Component } from 'react';
let $=require('jquery');




class Login extends Component{
 
  render(){
    return(
         <div id="conss">
          
           <img src={require('./img/bg.jpg')} id="imgs"/>
           <div id="con">
             <h5 id="bt">Login Form</h5>
             <ul id="non">
                <li> <input type='text' placeholder="用户名" id="txt1"/></li>
                <li> <input type="password" placeholder="密码" id="txt2"/></li>
                <li>
                     <button id="btn1">登陆</button>
                     <button id="btn2">注册</button>
                </li>
               
             </ul>
         
        </div>
        </div>
    )
  }
}
export default Login
