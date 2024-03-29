
function ListView(){
    let names = ["iwen","ime","frank"]
    return(
        <div>
            <h3>列表渲染</h3>
            <button>添加数据</button>
            <ul>
                {
                    names.map((item,index) =>{
                        return <li key={ index }>{ item }</li>
                    })
                }
            </ul>
        </div>
    )
}

export default ListView