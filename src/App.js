import "./App.css";
import Dictionary from "./Dictionary";
import Icon from "./Icon.png";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <header>
        <img src={Icon} alt="Dictionary" width={80} height={80} />
        <span>DICTIONARY</span>
      </header>
      <main>
        <Dictionary />
      </main>
      <Footer />
    </div>
  );
}

export default App;
