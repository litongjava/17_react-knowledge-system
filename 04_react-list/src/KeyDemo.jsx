import React,{Component} from "react"

export default class KeyDemo extends Component{

    constructor(){
        super()
        this.state = {
            names:["iwen",'ime']
        }
    }

    clickHandler(){
        this.setState({
            names:["frank"].concat(this.state.names)
        })
    }

    /**
     * 在React中，效率非常高！！！
     *     1. DOM的操作上速度非常快(React设计是存在一个虚拟ＤＯＭ)
     * frank 
     * iwen
     * ime
     */

    render(){
        return(
            <div>
                <h3>key的详细说明</h3>
                <button onClick={ () =>this.clickHandler() }>添加数据</button>
                <ul>
                    {
                        this.state.names.map((item,index) =>{
                            return <li key={index}>{ item }</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}