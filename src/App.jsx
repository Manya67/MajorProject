import "./App.css";
import Header from "./Components/Header/Header";
import Container from "./Components/Container";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="h-screen bg-black-light text-white">
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;

/*
APP:
  -LogIN

  Header
  - Container 
  - Profile 
  - Create Profile 
  - Repo Open 
  Footer
*/
