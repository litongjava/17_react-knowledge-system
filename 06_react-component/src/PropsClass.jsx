import React from "react"

export default class PropsClass extends React.Component{
    render(){
        // ES6的新特性：解构赋值
        const { title, age, arr, user } = this.props
        return(
            <div>
                <h3>类组件-props</h3>
                <p>数据：{ this.props.title }</p>
                <p>年龄：{ this.props.age }</p>
                <p>数组：{ this.props.arr }</p>
                <p>姓名：{ this.props.user.name }</p>
                <p>数据：{ title }</p>
                <p>年龄：{ age }</p>
                <p>数组：{ arr }</p>
                <p>姓名：{ user.name }</p>
            </div>
        )
    }
}