function EventParamsDemo1(){

    // 不仅仅要获取参数，还要获取Event对象
    const clickHandler = (params) =>{
        return (e) =>{
            console.log(params)
            console.log(e)
        }
    }

    return(
        <div>
            <h3>事件处理程序传递参数1</h3>
            <button onClick={ clickHandler('hello') }>按钮</button>
        </div>
    )
}

export default EventParamsDemo1