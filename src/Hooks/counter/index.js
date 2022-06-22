import React, { useState } from 'react';
import LayoutCouter from "./components/layout";
import ResultCouter from "./components/result";
import ButtonComponent from "./components/common/button";


const AppCounter = () => {

    // khai bao state va cap nhap state
    const [count, setCount] = useState(0);

    const changeCounter = (type) => {
        if (type === 'increment') {
            setCount(count + 1);
        } else if (type === 'decrement') {
            setCount(count - 1);
        }
    }


    return (
        <LayoutCouter>
            <ResultCouter result={count} />
            <ButtonComponent
                type="button"
                name="increment"
                click={changeCounter}
            >+</ButtonComponent>
            &nbsp;&nbsp;
            <ButtonComponent
                type="button"
                name="decrement"
                click={changeCounter}
            >-</ButtonComponent>
        </LayoutCouter>
    )
}

export default AppCounter;

// git init-git git add .  commit -m --passter cau lenh tren git ---git push origin master  day code len github
// chechking prop type  // check kieu du lieu can truyen vao props
// gan gia tri mac dinh cho prop default values
// dung arow funtion de handle event
// event.preventDefault() để chặn submit
// render nhiều dữ liệu trong object ta dung hàm map() với arowfuntion
// dùng toán tử 3 ngôi để sử lí điều kiện
// 30 33 18
// withRouter this.prop.history.push("/todo") su dung componentdidmout  export defaul withRowter(Home)  (dung de chuyen trang )
//higher order components  : HOC random màu
// back lại trang 37