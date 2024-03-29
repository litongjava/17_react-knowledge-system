import React from "react"
import Child from "./Child"

export default class TowLifeCycle extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            text:"测试文本"
        }
    }

    static getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps")
        return null;
    }

    shouldComponentUpdate(props,state){
        console.log("shouldComponentUpdate")
        return true;
    }

    clickHandler(){
        this.setState({
            text:"修改数据"
        })
    }

    getSnapshotBeforeUpdate (prevProps, prevState){
        console.log("getSnapshotBeforeUpdate","DOM更新之前执行")
        console.log(prevProps, prevState)
        return null
    }

    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate","DOM更新之后执行")
        console.log(prevProps, prevState)
    }

    render() {
        return (
            <div>
                <h3>组件更新时</h3>
                <p>{ this.state.text }</p>
                <Child title="测试标题"/>
                <button onClick={ this.clickHandler.bind(this) }>按钮</button>
            </div>
        )
    }
}