import React from "react"

export default class Child extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            hello:"Hello"
        }
    }

    shouldComponentUpdate(props,state){
        console.log(props,state)
        return false;
    }

    render(){
        console.log("重新渲染")
        return(
            <div>
                <h3>Child:{ this.state.hello }</h3>
                <p>{ this.props.title }</p>
            </div>
        )
    }
}