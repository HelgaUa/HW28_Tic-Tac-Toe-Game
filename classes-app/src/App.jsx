import { Component } from "react";
import Square from "./components/Square.jsx";
import Button from "./components/Button.jsx";
import calculateWinner from "./helpers/calculateWinner.js";

const initialBoard = new Array(9).fill(null);
const LOCAL_STORAGE_KEY = 'res';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: initialBoard,
            xIsNext: true,
        }
    }

    componentDidMount() {
        const localStorageData = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (localStorageData !== null) {
            this.setState({
                squares: JSON.parse(localStorageData),
            })
        }
    };

    componentDidUpdate(prevProps, prevState) {
        const isWinner = calculateWinner(this.state.squares);
        console.log(isWinner);
        if (isWinner) {
            setTimeout(() => {
                alert(`Winner: ${isWinner}`);
            }, 10)
        }
    }

    renderSquare = (item) => {
        return <Square key={item} item={this.state.squares[item]} onClick={() => {
            this.handleClick(item)}}
        />
    }

    onButtonClick = () => {
        this.resetBoard();
    }

    handleClick = (position) => {
        const { squares } = this.state;
        const { xIsNext } = this.state;
        const newSquares = [...squares];

        if (squares[position] || calculateWinner(squares)) {
            return;
        } else {
            newSquares[position] = xIsNext ? 'x' : '0';
            this.setState({
                squares: newSquares,
                xIsNext: !xIsNext,
            })
        }
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newSquares));
    }

    resetBoard = () => {
        this.setState({
            squares: initialBoard,
            xIsNext: true,
        })
        localStorage.removeItem(LOCAL_STORAGE_KEY);
    }

    render() {
        return (
            <>
                <div>
                    <div className='flex'>
                        {[0, 1, 2].map(this.renderSquare)}
                    </div>
                    <div className='flex'>
                        {[3, 4, 5].map(this.renderSquare)}

                    </div>
                    <div className='flex'>
                        {[6, 7, 8].map(this.renderSquare)}
                    </div>
                </div>
                <Button name='New game' onClick={this.onButtonClick}/>
            </>
        )
    }
}

export default App;
