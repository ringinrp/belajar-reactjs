import './App.css';
import MyButton from './components/MyButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const navHeading = "Navigation Bar";
  const navText = "Sosmed";

  const clicked = () => {
    return alert("button dipencet !!!");
  };

  const paragraph = () =>{
    return (
      <i>Mantap cuy !!</i>
    );
  };

  return (
    <div className="App">
      <Navbar navText={navText} navHeading={navHeading}/>
      haii
      <MyButton clicked={clicked} />
      <Footer paragraph={paragraph}/>
    </div>
  );
};

export default App;
