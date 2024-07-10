import{r as e,h as a}from"./p-e4c898ec.js";const t="*{margin:0;padding:0;box-sizing:border-box;font-family:sans-serif}.main{width:100%;height:100vh;display:flex;align-items:center;justify-content:center;background:#6e7373}.wrapper{width:380px;padding:40px 30px 50px 30px;background:#fff;border-radius:5px;text-align:center;box-shadow:10px 10px 15px rgba(0, 0, 0, 0.1)}.wrapper header{font-size:35px;font-weight:600}.wrapper form{margin:40px 0}form .field{width:100%;margin-bottom:20px}form .field .input-area{height:50px;width:100%;position:relative}form input{width:100%;height:100%;outline:none;padding:0 45px;font-size:18px;background:none;border-radius:5px;border-bottom-width:2px}form button{width:100%;height:100%;padding:15px 45px;font-size:20px;font-weight:bold;background-color:6e7373;border-radius:5px;border-bottom-width:2px;margin-top:20px}.field .input-area .position{fill:6e7373;width:25px;height:25px;position:absolute;top:50%;transform:translateY(-50%)}.input-area .design{left:15px;fill:#6e7373}form input::placeholder{color:#6e7373;font-size:17px}form .field .error-txt{color:#dc3545;text-align:left;margin-top:5px}form .pass-txt{text-align:left;margin-top:-10px}.wrapper a{color:#5372F0;text-decoration:none}.msg-s{color:green;font-size:20px;margin-top:15px}.msg-i{color:#dc3545;font-size:20px;margin-top:15px}";const i=t;const s=class{constructor(a){e(this,a);this.emailInputBind=undefined;this.passwordInputBind=undefined;this.isEmailValid="blank";this.isPasswordValid=false;this.isLoginSuccess=""}emailInputChange(e){let a=e.target.value;console.log(a);let t=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;let i=t.test(a);if(a==""){this.isEmailValid="blank"}else if(!i){this.isEmailValid="notEmail"}else{this.isEmailValid="valid"}}passwordInputChange(e){let a=e.target.value;console.log(a);if(a==""){this.isPasswordValid=false}else{this.isPasswordValid=true}}onSubmitForm(e){e.preventDefault();let a=this.emailInputElement.value;let t=this.passwordInputElement.value;console.log(a);console.log(t);if(a=="stencil@live.com"&&t=="stencil123"){this.isLoginSuccess="success"}else{this.isLoginSuccess="fail"}}render(){let e=a("div",{key:"b12319c9fe7d19ba2d3205afe7801bd5f0fcb6eb"});if(this.isEmailValid=="blank"){e=a("div",{key:"2758f2eb56628f96983fa0ecc68e8c692008b736",class:"error-txt"},"Email can't be blank")}if(this.isEmailValid=="notEmail"){e=a("div",{key:"ce7c31486355039faf72d1acfa7d3d72716027a0",class:"error-txt"},"Email not valid")}let t=a("div",{key:"77f63e1d7c7dceccc698aa9e7a49ff953007cd25"});if(!this.isPasswordValid){t=a("div",{key:"e21f315652fd3d367c3bb7c5b30c87fd946080b2",class:"error-txt"},"Password can't be blank")}let i=a("div",{key:"fbf4111f47c18f184c31cb6baa6b85eb67bb7ef4"});if(this.isLoginSuccess=="success"){i=a("div",{key:"45d20cd2c995891f41bba351fa5a315b905c4961",class:"msg-s"},"Login successful")}if(this.isLoginSuccess=="fail"){i=a("div",{key:"17ffbd98e72ff634f2cecb124e13375960462c9d",class:"msg-i"},"Email or Password incorrect")}return a("div",{key:"0f2dc57996c3860577c9a5c29b0e6b528f88fadc",class:"main"},a("div",{key:"68f3f37dbf8251ccfb86083c9be486580ee457e0",class:"wrapper"},a("header",{key:"f29922cc1d87548abe4462be158d7ad9a3dfe286"},"Login Form"),a("form",{key:"9b6ff6138e1b2f8c09598b4acaa32db1c2e7ae05",action:"#",onSubmit:this.onSubmitForm.bind(this)},a("div",{key:"506bf4c47540adb1120c1f46f72b2d68d4a8ac46",class:"field email"},a("div",{key:"adda06241cfeac4f67c22ad640b6e7b13a3fcc88",class:"input-area"},a("input",{key:"2b970723a864315c0bb5265a6f97fe7f38c76fb2",type:"text",placeholder:"Email Address",ref:e=>this.emailInputElement=e,value:this.emailInputBind,onInput:this.emailInputChange.bind(this)}),a("svg",{key:"244b3e932ad459796d860c26963471658414dcbc",class:"position design",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},".",a("path",{key:"25c6b3c8eabd6ffec9abfbd5b7384a8e6b540b46",d:"M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"}))),e),a("div",{key:"a4be4aef9cdf46367bb34602cf02c84fa9726092",class:"field password"},a("div",{key:"ea0a594d56e8c2e26e95aaf7221437a93674ef26",class:"input-area"},a("input",{key:"f6b1ae4807d0dbc7c4435770437f28d4c8159b52",type:"password",placeholder:"Password",ref:e=>this.passwordInputElement=e,value:this.passwordInputBind,onInput:this.passwordInputChange.bind(this)}),a("svg",{key:"5011fc92cf15d5b39a81709804530c3616e06018",class:"position design",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},a("path",{key:"4407e25303df01b8243c761ff566337c60a5b447",d:"M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"}))),t),a("div",{key:"3a35d43b0b7b1850d0c300656f85de1e7e63651e",class:"pass-txt"},a("a",{key:"b9600abaacaebaa9fd1e7243b0b8a8f252174391",href:"#"},"Forgot password?")),i,a("button",{key:"421b58e132ee2a82de26508a92fe9e9e08bb5af4",type:"submit",disabled:this.isEmailValid=="blank"||this.isEmailValid=="notEmail"||!this.isPasswordValid},"LOG IN")),a("div",{key:"17a9d53f8cb11a6316421c481c43ff96fe971b3b",class:"sign-txt"},"Not yet member? ",a("a",{key:"799ae59d575cce2f8a8308bc6a03021f2a48195d",href:"#"},"Signup now"))))}};s.style=i;export{s as rf_login};
//# sourceMappingURL=p-5ffedf2c.entry.js.map