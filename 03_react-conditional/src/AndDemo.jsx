function AndDemo(){
    const flag = false
    return (
        <div className="container">
            { flag && <div className="and">生存吧</div> }
            { flag ? <div>生存吧</div> : null }
        </div>
    )
}

export default AndDemo