import Board from "./components/Board";

function App() {
  return (
    <>
      <h1>Tic Tac Toe</h1>
      {/* class is a reserved word in JavaScript which is why we use className */}
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    </>
  );
}

export default App;
