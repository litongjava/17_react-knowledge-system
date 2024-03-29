import React,{ Component } from "react"

export default class OneLifeCycle extends Component{

    constructor(props){
        super(props)
        console.log("constructor","初始化")
        this.state = {
            text:"默认值"
        }
    }

    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps","静态改变状态")
        return null
    }

    render(){
        console.log("render","渲染函数")
        return(
            <div>
                <h3>组件挂载时</h3>
            </div>
        )
    }

    /**
     * 1. 函数名字如何编写
     * 2. 知道他什么时候执行：挂载时，组件被调用时候就会执行
     * 3. 知道函数意义：只要此生命周期函数执行了，代表DOM渲染完成了
     */
    componentDidMount(){
        console.log("componentDidMount","确保DOM渲染完成")
    }
}