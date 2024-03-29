import React,{ Component } from "react"
import SetStateChild from "./SetStateChild"

export default class SetStateDemo extends Component{

    constructor(){
        super();
        this.state = {
            name:"iwen"
        }
    }

    clickHandler(){
        this.setState({
            name:'sakura'
        })
    }

    render(){
        return(
            <div>
                <h3>Set引起组件更新</h3>
                <p>名字：{ this.state.name }</p>
                <button onClick={ this.clickHandler.bind(this) }>按钮</button>
                <SetStateChild title={ this.state.name }/>
            </div>
        )
    }
}