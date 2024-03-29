import React,{ Component } from "react"
// 相对路径
import "./Demo.css"

/**
 * 在React中，创建组件有两种方式
 *  1. 函数形式
 *  2. 类的形式
 */

export default class Demo extends Component{
    render(){
        return(
            <div className="box"></div>
        )
    }
}