

const FillterTodo =(props) => {
    return (
        <select onChange={props.change}>
            <option value="">--Tat ca cong viec--</option>
            <option value="1">--Da hoan thanh--</option>
            <option value="0">--chua hoan thanh--</option>
        </select>
    )
}

export default FillterTodo;