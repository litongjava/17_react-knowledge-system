import React, { Component } from 'react'

export default class FormTest1 extends Component {

    constructor(){
        super();
        this.state = {
            username:""
        }
    }

    onChange = (e) =>{
        // 将收集到的用户信息，赋值给username
        this.setState({
            username:e.target.value
        })
    }

    onSubmit = (e) =>{
        // 阻止默认事件
        e.preventDefault()
        console.log(this.state.username)
    }

    render() {
        return (
            <div>
                <h3>表单-受控组件</h3>
                <form onSubmit={ this.onSubmit }>
                    <input type="text" value={ this.state.username } onChange={ this.onChange }/>
                    <input type="submit" value="登录"/>
                </form>
            </div>
        )
    }
}
