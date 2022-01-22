import './App.css';

function App() {
    const num = Math.floor(Math.random() * 10);

    return (
        <div className="App">
            <p>{num}</p>
            <button onClick={() => {window.location.reload()}}>Refresh page</button>
        </div>
    );
}

export default App;
