
import './App.css';
import Cart from './Components/Cart/Cart';
import AllCategories from './Components/Filter/AllCategories';
import Plants from './Components/PlantsComponents/Plants';

function App() {
  return ( <div className='head'>
<hr></hr>
    <div>
      <h3 className='internet'>интернет-магазин</h3>
      <h1>ЦВЕТОВОД</h1>
</div>
<hr></hr>
    <div className="App">
      

      <div className='block'>
        <div><AllCategories /></div>
        <div><Cart /></div>
        <div></div>
      
      
      </div>
      
      <div className='block'>
      <Plants />
      </div>

     
     
    </div>
    </div>
  );
}

export default App;
