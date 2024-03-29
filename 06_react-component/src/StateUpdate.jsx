import React,{ Component } from "react"

export default class StateUpdate extends Component{

    constructor(){
        super();
        this.state = {
            name:"iwen",
            age:20
        }
    }

    clickHandler(){
        // 修改状态
        // this.state.name = "sakura" // 千万不要这么修改
        // this.setState({
        //     name:"sakura"
        // },() =>{
        //     console.log(this.state.name)
        // })
        // console.log(this.state.name); // sakura？ 不能 setState是异步的
        this.setState({
            name:"sakura"
        })
        this.setState((state) =>{
            console.log(state)
        })
        // ES6 异步变同步的操作方案  await async ？？？
    }

    render(){
        return(
            <div>
                <h3>State的更新</h3>
                <p>姓名:{ this.state.name }</p>
                <p>年龄:{ this.state.age }</p>
                <button onClick={ this.clickHandler.bind(this) }>修改</button>
            </div>
        )
    }
}