

import PropTypes from 'prop-types';


const ButtonComponent = (props) => {

    return (
        <button
            type={props.type}
            name={props.name}
            onClick={() => props.click(props.name)}

        >
            {props.children}
        </button>
    )
}
ButtonComponent.propTypes = {  // dung de kiem tra gia tri truyen vao
    className: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired,
}

ButtonComponent.defaultProps = {
    //gan gia tri mac dinh cho props
    name: 'increment'
}

export default ButtonComponent;