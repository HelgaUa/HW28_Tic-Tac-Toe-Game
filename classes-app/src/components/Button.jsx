import {Component} from "react";

class Button extends Component {
    render() {
        const { className, name, onClick } = this.props;
        return(
            <button className={`btn ${className}`} onClick={onClick}>
                {name}
            </button>
        )
    }
}
export default Button;