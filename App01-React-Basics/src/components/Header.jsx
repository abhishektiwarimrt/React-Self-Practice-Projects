import logo from "../assets/logo.svg";
import './Header.css';

var reactDescriptions = ["Fundaments", "Crucial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    const description = reactDescriptions[getRandomInt(2)];
  
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
  
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }