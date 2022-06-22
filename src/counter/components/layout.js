import HeaderCounter from "./header";
import FooterCounter from "./footer";
import './css/common.css'
const LayoutCouter = (props) => {
    return (
        <>
            <div className="container">
                <HeaderCounter />
                <div className="content">
                    <h3>Layout</h3>
                    {props.children}
                </div>
                <FooterCounter />
            </div>
        </>
    )
}
export default LayoutCouter;