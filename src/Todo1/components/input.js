

const InputTodo =(props) => {
    return (
        <input
        // jsx cac thuoc tinh giong the html thuoc tinh value type onChange
         value= {props.val}
         type={props.type}
         onChange={props.change}
        
         />
    )
}

export default InputTodo;