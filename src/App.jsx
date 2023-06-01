import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import FormClima from './components/FormClima/FormClima';

function App() {
  return (
    <>
      <Container className="paginaPrincipal my-5">
        <FormClima />
      </Container>
      <Footer />
    </>
  );
}

export default App;
