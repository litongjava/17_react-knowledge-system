import React,{ Component } from "react"

export default class PropsStateChild extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currentTitle:"我是" + props.title
        }
    }
    
    render(){
        return(
            <div>
                <h3>PropsStateChild</h3>
                <p>{ this.props.title }</p>
                <p>{ this.state.currentTitle }</p>
            </div>
        )
    }
}