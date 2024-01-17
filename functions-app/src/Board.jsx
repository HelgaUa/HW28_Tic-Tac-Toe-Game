import Square from "./components/Square.jsx";
import Button from "./components/Button.jsx";
import useBoard from './hooks/useBoard.jsx';

const initialBoard = new Array(9).fill(null);

function Board() {
    const { squares, handleClick, resetBoard } = useBoard(initialBoard);
    const renderSquare = (item) => {
        return <Square key={item} item={squares[item]} onClick={() => {
            handleClick(item)
        }}/>
    }
    const onButtonClick = () => {
        resetBoard();
    }
    return (
        <>
            <div>
                <div className='flex'>
                    {[0, 1, 2].map(renderSquare)}
                </div>
                <div className='flex'>
                    {[3, 4, 5].map(renderSquare)}
                </div>
                <div className='flex'>
                    {[6, 7, 8].map(renderSquare)}
                </div>
            </div>
            <Button name='New game' onClick={onButtonClick}/>
        </>
    )
}

export default Board
