import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {" "}
        <Weather defaultCity="Amsterdam" />
        <footer>
          This project is created by Chantal Crompvoets and is {""}
          <a
            href="https://github.com/chantie84/my-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
