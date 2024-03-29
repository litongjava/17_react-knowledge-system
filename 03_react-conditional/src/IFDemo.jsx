function IFDemo(){
    const flag = true
    if(flag){
        // 如果单行代码，则不需要添加小括号，如果是多行需要添加小括号
        return (
            <div>
                <p>生存吧</p>
            </div>
        )
            
    }else {
        return <div>毁灭吧</div>
    }
}

export default IFDemo