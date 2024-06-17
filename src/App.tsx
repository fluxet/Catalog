import './App.css';
import dataMock from './__mocks__/Data.json'
import List from './components/List/List';
import { TChildren } from './types';

const data = dataMock as TChildren;

function App() {
  return (
    <div className="app">
      {data.map(child => <List key={child.name} {...child} />)}
    </div>
  );
}

export default App;
