import { Card } from 'react-bootstrap';
import './card-clima.css';

const CardClima = ({ climaElegido }) => {
  const {
    main: { temp },
  } = climaElegido;
  return (
    <>
      <Card className="mt-2 text-center border-0">
        <Card.Body>
          <Card.Title className="text-muted display-6 mb-3">
            Clima en .....
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
