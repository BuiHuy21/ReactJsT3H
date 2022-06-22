
import React from 'react'; /// kieemr tra xem co can render hay ko
const FooterTodo=()=>{

    console.log('Footer component render')
    return (
        <div className="footer">
            <p>Copyright &copy; 2022</p>
        </div>
    )
}

export default React.memo(FooterTodo);// kiem tra co can render hay ko