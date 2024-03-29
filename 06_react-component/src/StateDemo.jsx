import React,{ Component } from "react"

/**
 * state：
 *  1. 管理组件内部状态(数据)
 *  2. state是组件私有的
 */

export default class StateDemo extends Component{

    constructor(){
        super(); // 类的继承，必须增加super()
        this.state = {
            name:"sakura",
            time:new Date()
        }
    }

    clickHander(){
        this.setState({
            name:"iwen"
        })
    }

    changeTimeHandler(){
        this.setState({
            time:new Date()
        })
    }

    render(){
        return(
            <div>
                <h3>组件状态State</h3>
                <p>名字:{ this.state.name }</p>
                <button onClick={ this.clickHander.bind(this) }>修改数据</button>
                <p>当前时间:{ this.state.time.toLocaleTimeString() }</p>
                <button onClick={ this.changeTimeHandler.bind(this) }>更新时间</button>
            </div>
        )
    }
}