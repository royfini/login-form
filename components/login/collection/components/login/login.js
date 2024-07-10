import { h } from "@stencil/core";
export class Login {
    constructor() {
        this.emailInputBind = undefined;
        this.passwordInputBind = undefined;
        this.isEmailValid = 'blank';
        this.isPasswordValid = false;
        this.isLoginSuccess = '';
    }
    emailInputChange(event) {
        let value = event.target.value;
        console.log(value);
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let emailValid = emailPattern.test(value);
        if (value == '') {
            this.isEmailValid = 'blank';
        }
        else if (!emailValid) {
            this.isEmailValid = 'notEmail';
        }
        else {
            this.isEmailValid = 'valid';
        }
    }
    passwordInputChange(event) {
        let value = event.target.value;
        console.log(value);
        if ((value == '')) {
            this.isPasswordValid = false;
        }
        else {
            this.isPasswordValid = true;
        }
    }
    onSubmitForm(event) {
        event.preventDefault();
        let email = this.emailInputElement.value;
        let password = this.passwordInputElement.value;
        console.log(email);
        console.log(password);
        if (email == 'stencil@live.com' && password == 'stencil123') {
            this.isLoginSuccess = 'success';
        }
        else {
            this.isLoginSuccess = 'fail';
        }
    }
    render() {
        let emailError = h("div", { key: 'b12319c9fe7d19ba2d3205afe7801bd5f0fcb6eb' });
        if (this.isEmailValid == 'blank') {
            emailError = h("div", { key: '2758f2eb56628f96983fa0ecc68e8c692008b736', class: "error-txt" }, "Email can't be blank");
        }
        if (this.isEmailValid == 'notEmail') {
            emailError = h("div", { key: 'ce7c31486355039faf72d1acfa7d3d72716027a0', class: "error-txt" }, "Email not valid");
        }
        let passwordError = h("div", { key: '77f63e1d7c7dceccc698aa9e7a49ff953007cd25' });
        if (!this.isPasswordValid) {
            passwordError = h("div", { key: 'e21f315652fd3d367c3bb7c5b30c87fd946080b2', class: "error-txt" }, "Password can't be blank");
        }
        let message = h("div", { key: 'fbf4111f47c18f184c31cb6baa6b85eb67bb7ef4' });
        if (this.isLoginSuccess == 'success') {
            message = h("div", { key: '45d20cd2c995891f41bba351fa5a315b905c4961', class: "msg-s" }, "Login successful");
        }
        if (this.isLoginSuccess == 'fail') {
            message = h("div", { key: '17ffbd98e72ff634f2cecb124e13375960462c9d', class: "msg-i" }, "Email or Password incorrect");
        }
        return (h("div", { key: '0f2dc57996c3860577c9a5c29b0e6b528f88fadc', class: "main" }, h("div", { key: '68f3f37dbf8251ccfb86083c9be486580ee457e0', class: "wrapper" }, h("header", { key: 'f29922cc1d87548abe4462be158d7ad9a3dfe286' }, "Login Form"), h("form", { key: '9b6ff6138e1b2f8c09598b4acaa32db1c2e7ae05', action: "#", onSubmit: this.onSubmitForm.bind(this) }, h("div", { key: '506bf4c47540adb1120c1f46f72b2d68d4a8ac46', class: "field email" }, h("div", { key: 'adda06241cfeac4f67c22ad640b6e7b13a3fcc88', class: "input-area" }, h("input", { key: '2b970723a864315c0bb5265a6f97fe7f38c76fb2', type: "text", placeholder: "Email Address", ref: el => (this.emailInputElement = el), value: this.emailInputBind, onInput: this.emailInputChange.bind(this) }), h("svg", { key: '244b3e932ad459796d860c26963471658414dcbc', class: "position design", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, ".", h("path", { key: '25c6b3c8eabd6ffec9abfbd5b7384a8e6b540b46', d: "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" }))), emailError), h("div", { key: 'a4be4aef9cdf46367bb34602cf02c84fa9726092', class: "field password" }, h("div", { key: 'ea0a594d56e8c2e26e95aaf7221437a93674ef26', class: "input-area" }, h("input", { key: 'f6b1ae4807d0dbc7c4435770437f28d4c8159b52', type: "password", placeholder: "Password", ref: el => (this.passwordInputElement = el), value: this.passwordInputBind, onInput: this.passwordInputChange.bind(this) }), h("svg", { key: '5011fc92cf15d5b39a81709804530c3616e06018', class: "position design", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '4407e25303df01b8243c761ff566337c60a5b447', d: "M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" }))), passwordError), h("div", { key: '3a35d43b0b7b1850d0c300656f85de1e7e63651e', class: "pass-txt" }, h("a", { key: 'b9600abaacaebaa9fd1e7243b0b8a8f252174391', href: "#" }, "Forgot password?")), message, h("button", { key: '421b58e132ee2a82de26508a92fe9e9e08bb5af4', type: "submit", disabled: this.isEmailValid == 'blank' || this.isEmailValid == 'notEmail' || !this.isPasswordValid }, "LOG IN")), h("div", { key: '17a9d53f8cb11a6316421c481c43ff96fe971b3b', class: "sign-txt" }, "Not yet member? ", h("a", { key: '799ae59d575cce2f8a8308bc6a03021f2a48195d', href: "#" }, "Signup now")))));
    }
    static get is() { return "rf-login"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./login.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["login.css"]
        };
    }
    static get states() {
        return {
            "emailInputBind": {},
            "passwordInputBind": {},
            "isEmailValid": {},
            "isPasswordValid": {},
            "isLoginSuccess": {}
        };
    }
}
//# sourceMappingURL=login.js.map
