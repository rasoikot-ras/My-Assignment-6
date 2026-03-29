import Banner from "./component/banner";
import NavBar from "./component/NavBar";
import './index.css';

function App() {
  return (
    <>
      <NavBar cartCount={0} />
      <Banner />
    </>
  );
}

export default App;
