/**
 * 快速生成代码模板的快捷键
 *  1. 函数式组件:rfc
 *  2. 类形式组件:rcc
 */
import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class ThreeLifeCycle extends Component {
    
    constructor(){
        super();
        this.state = {
            flag:true
        }
    }

    clickHandler = () =>{
        this.setState({
            flag:false
        })
    }

    render() {
        const { flag } = this.state
        return (
            <div>
                <h3>组件卸载时</h3>
                <button onClick={ this.clickHandler }>卸载组件</button>
                { flag && <ChildComponent /> }
            </div>
        )
    }
}
