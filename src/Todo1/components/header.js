
import React from 'react'

// const HeaderTodo=()=>{
//     console.log('Header component render')
//     return (
//         <h1>To do App </h1>
//     )
// }

class HeaderTodo extends React.PureComponent {  // dung class component thi ta dung react.pure.components
    render() {

        console.log('header component render')
        return (
            <h1>To do App </h1>
        )
    }
}

export default HeaderTodo;

// export default React.memo(HeaderTodo) ; // doois voi fution components khi ko muon render lai thi dung memo