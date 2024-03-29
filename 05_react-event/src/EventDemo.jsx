function EventDemo() {

    // 箭头函数实现事件函数
    const clickHandler = () =>{
      // 实现事件逻辑
      console.log("点击事件")
    }
  
    const focusHandler = () =>{
      console.log("获得焦点")
    }
  
    const blurHandler = () =>{
      console.log("失去焦点")
    }
  
    const onInputChange = () =>{
      console.log("内容发生概念")
    }
  
    return (
      <div className="App">
        <h3>事件处理</h3>
        <button onClick={ clickHandler }>按钮</button>
        <input type="text" onFocus={ focusHandler } />
        <input type="text" onBlur={ blurHandler } />
        <input type="text" onChange={ onInputChange } />
        <input type="text" onFocus={ () => { console.log("简约获得焦点") } } />
        <input type="text" onBlur={ () => { console.log("简约失去焦点") } } />
      </div>
    );
  }
  
  export default EventDemo;
  