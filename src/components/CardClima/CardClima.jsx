import { Card } from 'react-bootstrap';
import './card-clima.css';

const CardClima = ({ climaElegido }) => {
  const {
    name,
    main: { temp, temp_max, temp_min },
  } = climaElegido;

  const kevinACentigrados = (grados) => parseInt(grados - 273.15);
  return (
    <>
      <Card className="mt-2 text-center border-0">
        <Card.Body>
          <Card.Title className="text-muted display-6 mb-3">
            Clima en {name}
          </Card.Title>
          <Card.Subtitle className="mb-2 fw-bold display-4">
            {kevinACentigrados(temp)} °C
          </Card.Subtitle>
          <Card.Text>
            Max: {kevinACentigrados(temp_max)} °C - Mín:{' '}
            {kevinACentigrados(temp_min)} °C
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardClima;
