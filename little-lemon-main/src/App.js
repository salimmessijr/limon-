import { BrowserRouter as Router } from "react-router-dom";
import "../src/styles/index.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Container from "./components/Container/Container";

function App() {
  return (
    <>
      <Router>
        <Container>
          <Header />
          <Main />
          <Footer />
        </Container>
      </Router>
    </>
  );
}

export default App;
