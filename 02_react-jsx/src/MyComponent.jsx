import React, { createElement } from "react"

function MyComponent() {
    // element元素如何渲染到页面之上
    const element=<h1 className="con">hello，baizhan</h1>
    console.log(<h1 className="con">hello，baizhan</h1>)
    // const element = React.createElement(
    //     'h1',
    //     { className: 'con' },
    //     'hello，baizhan'
    // );
    return (
        <div>
            {element}
        </div>
    )
}

export default MyComponent

/**
 * const element = <h1 className="con">hello，baizhan</h1>
 * 
 * 通过编译之后转换成 React元素
 * 
 * const element = React.createElement(
 *  'h1',
 *  { className:'con' },
 *  'hello，baizhan'
 * )
 * 
 * 最终会得到一个JS（React）可以识别的方案
 * 
 * // 简化版
 * const element = {
 *     type:"h1",
 *     props:{
 *         className: 'con',
 *         children: 'hello，baizhan'
 *     }
 * }
 * 
 */
