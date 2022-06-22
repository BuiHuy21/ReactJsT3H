import PropTypes from 'prop-types';

const ResultCouter = (props) => {
    return (
        <h3 className="title">
            {props.result}
        </h3>
    )
}


ResultCouter.propTypes = { /// checkPropTypes
    result: PropTypes.number.isRequired
}
export default ResultCouter;