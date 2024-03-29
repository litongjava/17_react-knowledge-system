import React, { Component } from 'react'


const MyAPI = {
    count:0,
    subScribe(cb){
        this.intervalID = setInterval(() =>{
            this.count += 1
            cb(this.count)
        },1000)
    },
    unSubScribe(){
        clearInterval(this.intervalID)
        this.reset()
    },
    reset(){
        this.count = 0
    }
}

export default class ChildComponent extends Component {

    // 组件的DOM渲染完成
    componentDidMount(){
        MyAPI.subScribe((currentCount) =>{
            console.log(currentCount)
        })
    }

    /**
     * 1. 清除定时器
     * 2. 关闭持续的网络连接
     * 3. 移除监听器
     */
    componentWillUnmount() {
        console.log("组件卸载了")
        // 清除定时器
        MyAPI.unSubScribe()
    }

    render() {
        return (
            <div>
                <h3>ChildComponent</h3>
            </div>
        )
    }
}
