import FunComponent from "./FunComponent"
import ClassComponent from "./ClassComponent"
import EventClass from "./EventClass"
import Parent from "./Compose/Parent"
import PropsFun from "./PropsFun"
import PropsClass from "./PropsClass"
import NavComponent from "./components/NavComponent"
import ParentComponent from "./DataComponent/ParentComponent"
import ComposeComponent1 from "./ComposeComponent1"
import ComposeComponent2 from "./ComposeComponent2"
import StateDemo from "./StateDemo"
import StateFun from "./StateFun"
import StateUpdate from "./StateUpdate"
import SetStateDemo from "./SetStateDemo"
import PropsStateDemo from "./PropsStateDemo"

function App() {
  const title="这是一个标题!"
  const user = { 
    name:"iwen!"
  }

  // 声明导航需要的数据
  const navs1 = ["Python","前端","Java","人工智能"]
  const navs2 = ["聊天","图片","视频","地图"]

  return (
    <div className="App">
      {/* <h3>组件</h3> */}
      {/* 标签的使用形式 */}
      {/* <FunComponent />
      <ClassComponent />
      <EventClass />
      <Parent />
      <PropsFun title={ title } age={ 20 } arr={ [10,20,30] } user={ user }/>
      <PropsClass title={ title } age={ 20 } arr={ [10,20,30] } user={ user }/>
      <NavComponent navs={ navs1 }/>
      <NavComponent navs={ navs2 }/>
      <ParentComponent /> */}
      {/* 在当前的父组件中，传递视图给子组件，这就叫组件组合 */}
      {/* <ComposeComponent1>
        <div>
          <h3>{ title }</h3>
          <p>我是内容</p>
        </div>
      </ComposeComponent1>
      <ComposeComponent2>
        <div>
          <h3>{ title }</h3>
          <p>我是内容2</p>
        </div>
      </ComposeComponent2> */}
      {/* <StateDemo />
      <StateFun /> */}
      {/* <StateUpdate /> */}
      {/* <SetStateDemo /> */}
      <PropsStateDemo />
    </div>
  );
}

export default App;
