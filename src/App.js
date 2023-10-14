import logo from './logo.svg';


import GreatOne from './Components/GreatOne/GreatOne'
import GreatOneClass from './Components/GreatOneClass/GreatOneClass'
import FuctionProps from './Components/Task1/FunctionProps'
import ClassProps from './Components/Task2/ClassProps'
import StateComponent from './Components/Task3/StateComponent'
import ProductCompontent from './Components/Task4/ProductComponent'
function App() {
  return (
    <div className ="App">
    
    { /*
        --Task1
     <FuctionProps Fname = "Aya" Lname = "Mousa" age = "25" collage = "El-Azhar"  >
        <h1>this is My Bio </h1>
     </FuctionProps>
     */} 
    {/*
      --Task2
     <ClassProps course1 = "react" course2 = "Node js"></ClassProps>
     <h2>this is my favorite courses </h2>
    */}
    {/*
      --Task3
    <StateComponent></StateComponent>
    */}

     <ProductCompontent></ProductCompontent>
    </div>
  );
}

export default App;
