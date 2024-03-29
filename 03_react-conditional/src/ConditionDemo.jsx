function ConditionDemo (){
    const flag = true
    // const element = flag ? <div>生存吧</div> : <div>毁灭吧</div>
    return (
        <div>
            {
                flag ? 
                <div>
                    <h3>哈姆雷特</h3>
                    <span>莎士比亚</span>
                    <p>生存吧</p>
                </div>
                : 
                <div>毁灭吧</div>
            }
        </div>
    )
}

export default ConditionDemo