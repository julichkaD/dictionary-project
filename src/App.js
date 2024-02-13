import Dictionary from "./Dictionary";
import Icon from "./Icon.png";
import Footer from "./Footer";
import MySwitch from "./MySwitch";

function App() {
  return (
    <div>
      <div className="container">
        <MySwitch />
        <header>
          <img src={Icon} alt="Dictionary" width={80} height={80} />
          <span>DICTIONARY</span>
        </header>
        <main>
          <Dictionary />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
