import React,{ Component } from "react"

// 我们目前不考虑从Hook形式
// 类形式的组件可以完成更多的功能
export default class ClassComponent extends Component{
    render(){
        return (
            <div>
                <h3>类组件</h3>
                <p>这是一个类形式的组件</p>
            </div>
        )
    }
}