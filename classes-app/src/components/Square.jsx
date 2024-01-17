import PropTypes from "prop-types";
import {Component} from "react";

class Square extends Component {
    render() {
        const { item, onClick } = this.props;

        return (
            <button onClick={onClick} className='square'>
                {item}
            </button>
        )
    }
}

Square.propTypes = {
    value: PropTypes.oneOf(['x', '0']),
    onClick: PropTypes.func
}
export default Square;

