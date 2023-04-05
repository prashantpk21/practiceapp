// import logo from './logo.svg';
import './App.css';
import User from './User.js';
import Button from './Button.js';

function App() {
  const names = ["Prashant", "Amaan", "Krish", "Abhinav", "Dev"];
  const planets = [
  {name : "Mars", isGasPlanet : false},
  {name : "Earth", isGasPlanet : false},
  {name : "Jupiter", isGasPlanet : true},
  {name : "Venus", isGasPlanet : false},
  {name : "Neptune", isGasPlanet : true},
  {name : "Uranus", isGasPlanet : true},
];

  return (
    <div className="App">
      <User name = 'Prashant' age = {18} email = 'pk@gmail.com'/>
      <User name = 'Aman' age = {56} email = 'mali@gmail.com'/>
      <User name = 'Krish' age = {8} email = 'lami@gmail.com'/>
      <div>Iterating through the array</div>
      {
        names.map((value,key)=> {
          return <h2 key = {key}> {value}</h2>
        })
      }
      <div>Printing all the planets which are gas planets</div>
      {
        planets.map((val,key)=> {
            if(val.isGasPlanet){
              return <h3 key = {key}> {val.name}</h3>
            }
        })
      }
      <Button/>
    </div>
  );
}

export default App;
