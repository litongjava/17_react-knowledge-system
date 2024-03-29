import React from "react"

export default class EventClass extends React.Component{

    constructor(){
        super();
        this.clickHandler2 = this.clickHandler2.bind(this)
    }

    sum(a,b){
        console.log(a+b)    
    }

    clickHandler1(data){
        // console.log(this)
        console.log(data)
        this.sum(10,20)
    }

    /**
     * 改变this指向的方案
     *  1. call(1,2,3)
     *  2. apply([1,2,3])
     *  3. bind()
     */
    clickHandler2(e){
        console.log(e)
        console.log(this)
    }

    clickHandler3 = () => {
        console.log(this)
    }

    render(){
        return(
            <div>
                <h3>Class组件中的事件</h3>
                <button onClick={ this.clickHandler1.bind(this,'hello') }>按钮1</button>
                <button onClick={ this.clickHandler2 }>按钮2</button>
                <button onClick={ this.clickHandler3 }>按钮3</button>
            </div>
        )
    }
}