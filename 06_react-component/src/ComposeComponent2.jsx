export default function ComposeComponent2(props){
    return(
        <div className="compose2">
            <h3>组件组合2</h3>
            { props.children }
        </div>
    )
}