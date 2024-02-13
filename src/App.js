import Dictionary from "./Dictionary";
import Icon from "./Icon.png";
import Footer from "./Footer";
import MySwitch from "./MySwitch";

function App() {
  return (
    <div>
      <MySwitch />
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
