
import './App.css';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import reducer from '../src/components/store/reducer';
import Header from './components/Header/Header';
import Board from './components/Board/Board';

//store
const store=createStore(reducer);
console.log(store.getState());
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <Board/>
      </div>
    </Provider>
  );
}

export default App;
