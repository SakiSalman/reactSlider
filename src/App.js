
import './App.css';
import Slider from './components/Slider';

function App() {


  const slides = [
    {url : 'http://localhost:3000/image-1.jpg'},
    {url : 'http://localhost:3000/image-2.jpg'},
    {url : 'http://localhost:3000/image-3.jpg'},
    {url : 'http://localhost:3000/image-4.jpg'},
    {url : 'http://localhost:3000/image-5.jpg'}
  ]


  return (
    <>

      <Slider slides = {slides}/>
    
    </>
  );
}

export default App;
