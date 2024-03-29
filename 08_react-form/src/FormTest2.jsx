import React, { Component } from 'react'

export default class FormTest2 extends Component {

    constructor() {
        super();
        this.state = {
            username:"",
            password:""
        }
    }

    userNameChange = (e) =>{
        console.log(e.target.name)
        this.setState({
            username:e.target.value
        })
    }

    passWordChange = (e) =>{
        console.log(e.target.name)
        this.setState({
            password:e.target.value
        })
    }

    onChange = (e) =>{
        this.setState({
            // e.target.name:获取input的name属性
            // ES6对象的新特性
            // https://es6.ruanyifeng.com/
            [e.target.name]:e.target.value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        const { username,password } = this.state;
        return (
            <div>
                <h3>表单-受控组件处理多个输入</h3>
                <form onSubmit={ this.onSubmit }>
                    {/* <input type="text" name="username" value={ username } onChange={ this.userNameChange }/>
                    <input type="password" name="password" value={ password } onChange={ this.passWordChange }/> */}
                    <input type="text" name="username" value={ username } onChange={ this.onChange }/>
                    <input type="password" name="password" value={ password } onChange={ this.onChange }/>
                    <input type="submit" value="登录" />

                </form>
            </div>
        )
    }
}
