import "./App.css"
import Demo from "./Demo"
import MyComponent from "./MyComponent"

function App() {
  const name = "baizhan!"
  const element = <h1 className="title">Hello, { name }</h1>
  const avatarUrl = "http://iwenwiki.com/api/newworld/images/n2.png"
  const myImg1 = <img src="http://iwenwiki.com/api/newworld/images/n1.png" />
  const myImg2 = <img src={ avatarUrl } />
  return (
    // 只有放在return中的内容，才会被渲染到页面上
    <div className="container">
      { element }
      { myImg1 }
      <div>
        { myImg2 }
        <h3 style={{ color:"green",fontSize:"30px" }}>我是标题</h3>
      </div>
      <Demo />
      <MyComponent />
    </div>
  )
}
export default App;
// React关注点分离：HTML + JavaScript合并到一起   CSS还是单独书写
// Vue关注点分离：HTML +JavaScript + CSS合并到一起
