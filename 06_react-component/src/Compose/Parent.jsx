import React from "react"
import Child from "./Child"

export default class Parent extends React.Component{
    render(){
        return(
            <div>
                <h3>Parent组件</h3>
                {/* <Child /> */}
            </div>
        )
    }
}

/**
 * 组件化开发：
 *  1. 可复用性强
 *  2. 后期的维护性强
 */