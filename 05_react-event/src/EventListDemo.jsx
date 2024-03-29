function EventListDemo(){
    const names = ["iwen","ime","frank"]

    const clickListHandler = (data) =>{
        console.log(data)
    }
    
    return(
        <div>
            <h3>获取列表数据</h3>
            <ul>
                {
                    names.map((item,index) =>{
                        return <li onClick={ () => clickListHandler(item) } key={ index }>{ item }</li>
                    })
                }
            </ul>
        </div>
    )
}

export default EventListDemo