function EventParamsDemo2(){

    const clickHandler = (data,e) =>{
        console.log(data,e)
    }

    return(
        <div>
            <h3>事件处理程序传递参数2</h3>
            <button onClick={ (e) => clickHandler("事件数据",e) }>按钮</button>
        </div>
    )
}

export default EventParamsDemo2