import PropTypes from "prop-types";

function Square (props) {
    const { item, onClick } = props;
    return (
            <button onClick={onClick} className='square'>
                {item}
            </button>
    )
}

Square.propTypes = {
    value: PropTypes.oneOf(['x', '0']),
    onClick: PropTypes.func
}
export default Square
