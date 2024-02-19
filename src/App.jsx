import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <Header />
      <Balance />
      <div className="flex">
        <Resume />
        <Resume />
      </div>
    </>
  );
}

export default App;
