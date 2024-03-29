function EventObjectDemo(){

    const clickHandler = (e) =>{
        console.log(e)
    }

    const clickAHandler = (e) =>{
        e.preventDefault() // 阻止默认事件
        e.stopPropagation() // 阻止事件冒泡
        console.log("点击了A标签")
    }

    const clickDivHandler = (e) =>{
        console.log("点击了DIV")
    }

    return(
        <div>
            <h3>事件对象</h3>
            <button onClick={ clickHandler }>按钮</button>
            <div onClick={ clickDivHandler }>
                <a onClick={ clickAHandler } href="https://itbaizhan.com">百战程序员</a>
            </div>
            <input type="text" onChange={ (e) => console.log(e.target.value) } />
        </div>
    )
}

export default EventObjectDemo