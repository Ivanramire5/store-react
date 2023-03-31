
const Button = (props) => {
    console.log(props)
    return <button onClick={props.callback} style={{ backgroundColor: '#19A7CE', color: '#F6F1F1'}}>{props.label}</button>
}

export default Button