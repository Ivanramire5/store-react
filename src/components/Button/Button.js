const Button = (props) => {
    return <button className="ButtonItem" onClick={props.handleClick}> {props.label} </button>
}

export default Button
