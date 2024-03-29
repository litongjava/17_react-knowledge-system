import React,{ Component } from "react"

export default class SetStateChild extends Component{
    render(){
        console.log("执行了")
        return(
            <div>
                <h3>子组件</h3>
                <p>{ this.props.title }</p>
            </div>
        )
    }
}