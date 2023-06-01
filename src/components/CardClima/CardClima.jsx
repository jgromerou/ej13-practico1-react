import { Card } from 'react-bootstrap';
import './card-clima.css';

const CardClima = () => {
  return (
    <>
      {/* <Card className="mt-3">
        <Card.Title className="mt-4 display-6 fw-bold text-center text-lg-start p-3">
          Categoria seleccionada: {categ} y País Seleccionado: {pai}
        </Card.Title>
        <Row className="mb-4 mt-2 px-3">
          {noticias.map((noticia, index) => (
            <CardNoticia key={index} noticia={noticia} />
          ))}
        </Row>
      </Card> */}

      <Card className="mt-2 text-center border-0">
        <Card.Body>
          <Card.Title className="text-muted display-6 mb-3">
            Clima en Buenos Aires
          </Card.Title>
          <Card.Subtitle className="mb-2 fw-bold display-4">
            20 °C
          </Card.Subtitle>
          <Card.Text>Max: 21 °C - Mín: 20 °C</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardClima;
