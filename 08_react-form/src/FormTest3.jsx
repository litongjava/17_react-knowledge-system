import React, { Component } from 'react'

export default class FormTest3 extends Component {

    constructor(){
        super();
        // 赋予username操作DOM的权限
        this.username = React.createRef();
        this.password = React.createRef();
    }

    onSubmit = (e) =>{
        e.preventDefault();
        console.log(this.username.current.value)
        console.log(this.password.current.value)
    }

    render() {
        return (
            <div>
                <h3>表单-非受控组件</h3>
                <form onSubmit={ this.onSubmit }>
                    <input type="text" defaultValue="itbaizhan" name="username" ref={ this.username } />
                    <input type="password" defaultValue="123456" name="password" ref={ this.password } />
                    <input type="submit" value="登录"/>
                </form>
            </div>
        )
    }
}
