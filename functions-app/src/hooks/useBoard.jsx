import {useEffect, useState} from "react";
import calculateWinner from "../helpers/calculateWinner.jsx";

const LOCAL_STORAGE_KEY = 'res';

function useBoard(initialState) {

    const [squares, setSquares] = useState(initialState);
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = (position) => { // =item
        const newSquares = [...squares];
        if (squares[position] || calculateWinner(squares)) {
            return;
        } else {
            newSquares[position] = xIsNext ? 'x' : '0';
            setSquares(newSquares);
            setXIsNext(!xIsNext);
        }
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newSquares));
    }

    const resetBoard = () => {
        setSquares(initialState);
        setXIsNext(true);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
    }

    useEffect(() => {
        const isWinner = calculateWinner(squares);
        if (isWinner) {
            setTimeout(() => {
                alert(`Winner: ${isWinner}`);
            }, 10)
        }
    }, [squares]);

    useEffect(() => {
        const localStorageData = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (localStorageData !== null) {
            setSquares(JSON.parse(localStorageData));
        }
    }, []);

    return {
        squares,
        handleClick,
        resetBoard
    }
}

export default useBoard;