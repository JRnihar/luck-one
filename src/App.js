import './App.css';
import Products from './Components/Products/Products';
import Question from './Components/Question/Question';

function App() {
  return (
    <div>
      <h2 className='header'>Well Come to my <span className='special-word'>Painting</span> Shop!!!</h2>
      
     <Products></Products>
     <Question></Question>
    </div>
  );
}

export default App;
