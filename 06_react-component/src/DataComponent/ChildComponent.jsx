import React,{ Component } from "react"

export default class ChildComponent extends Component{

    onChange(e){
        this.props.onCustomEvent(e.target.value)
    }

    render(){
        // const { onCustomEvent } = this.props
        // 调用函数执行的时候，通过函数的参数传递了数据过去
        // onCustomEvent("我是Child数据")
        return(
            <div>
                <h3>ChildComponent</h3>
                <input type="text" onChange={ this.onChange.bind(this) } />
            </div>
        )
    }
}