
const ButtonTodo =(props) => {
    return (
        <button type={props.type} onClick={() => props.add()}>{props.children}</button>
    )
}

export default ButtonTodo;