
import './App.css';
import RouterPage from './componets/RouterPage';
import any from './images/any.jpg'

function App() {
    return (
        <div className="App">
            <img src={any} width="100%"/>
          <RouterPage/>
        </div>
    );
}

export default App;
