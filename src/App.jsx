import { Header } from './components/Header.jsx';
import { Counter } from './components/Counter.jsx';
import './App.css';

function App() {
  const component = 'Stateless';
  return (
    <>
      <Header type={component} />
      <Counter/>
    </>
  )
}

export default App
