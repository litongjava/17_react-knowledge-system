import React,{ Component } from "react"
import PropsStateChild from "./PropsStateChild"

export default class PropsStateDemo extends React.Component{
    render(){
        return(
            <div>
                <h3>基于Props初始化State</h3>
                <PropsStateChild title="标题"/>
            </div>
        )
    }
}