

import HeaderTodo from "./header";
import FooterTodo from "./footer";

const LayoutTodo =(props)=>{
    return (

        <>
            <HeaderTodo/>
            <div className="content">{props.children}</div>
            <FooterTodo/>

        </>
    )
}

export default LayoutTodo;