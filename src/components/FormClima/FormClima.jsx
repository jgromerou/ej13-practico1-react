import { Card, Form, Button, Alert } from 'react-bootstrap';
import './form-clima.css';
import CardClima from '../CardClima/CardClima';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

const FormClima = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [climaElegido, setClimaElegido] = useState();
  const [isValidClima, setIsValidClima] = useState(true);
  const [alerta, setAlerta] = useState('');
  const [mostrarSpinner, setMostrarSpinner] = useState(false);

  const onSubmit = async (datos) => {
    const { ubicacion, pais } = datos;
    try {
      setMostrarSpinner(true);
      setIsValidClima(true);
      const resp = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${ubicacion},${pais}&appid=3d73e1aee8b83e8ad4912b2fa95cb838`
      );
      const data = await resp.json();
      if (data.cod === '404') {
        mostrarAlerta('Nombre de ciudad no existe');
        setIsValidClima(true);
        setMostrarSpinner(false);
        return;
      }
      setClimaElegido(data);
      setIsValidClima(false);
      setMostrarSpinner(false);
    } catch (error) {
      console.log(error);
    }
  };

  const mostrarAlerta = (alerta) => {
    setAlerta(alerta);

    setTimeout(() => {
      setAlerta('');
    }, 3000);
  };

  const mostrarComponente = !isValidClima ? (
    <CardClima climaElegido={climaElegido} />
  ) : !mostrarSpinner ? null : (
    <div className="sk-circle">
      <div className="sk-circle1 sk-child"></div>
      <div className="sk-circle2 sk-child"></div>
      <div className="sk-circle3 sk-child"></div>
      <div className="sk-circle4 sk-child"></div>
      <div className="sk-circle5 sk-child"></div>
      <div className="sk-circle6 sk-child"></div>
      <div className="sk-circle7 sk-child"></div>
      <div className="sk-circle8 sk-child"></div>
      <div className="sk-circle9 sk-child"></div>
      <div className="sk-circle10 sk-child"></div>
      <div className="sk-circle11 sk-child"></div>
      <div className="sk-circle12 sk-child"></div>
    </div>
  );

  return (
    <>
      <Card className="container-wrapper">
        <Card.Body>
          <Card.Title className="mt-2 mb-4 text-uppercase  fw-bold text-center">
            Consultar Clima
          </Card.Title>
          {alerta && <Alert variant="danger">{alerta}</Alert>}
          {mostrarComponente}
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-4" controlId="ubicacionCiudad">
              <Form.Label className="fw-bold">Ubicación Ciudad:</Form.Label>
              <Form.Control
                aria-label="Seleccione una ubicación (ciudad):"
                {...register('ubicacion', {
                  required: 'Debe seleccionar una ciudad',
                })}
                type="text"
                placeholder="Ingrese nombre de Ciudad"
              />
              {errors.ubicacion && (
                <Alert variant="danger" className="py-2 my-2">
                  Por favor ingrese una Ciudad...
                </Alert>
              )}
            </Form.Group>
            <Form.Group
              className="justify-content-center align-items-center mb-3"
              controlId="nombrePais"
            >
              <Form.Label className="fw-bold">País:</Form.Label>
              <Form.Select
                aria-label="Seleccione un país:"
                {...register('pais', {
                  required: 'Debe seleccionar un país',
                })}
              >
                <option value="">Seleccione una opción:</option>
                <option value="AR">Argentina</option>
                <option value="CL">Chile</option>
                <option value="CO">Colombia</option>
                <option value="CR">Costa Rica</option>
                <option value="ES">España</option>
                <option value="US">Estados Unidos</option>
                <option value="MX">México</option>
                <option value="PE">Perú</option>
              </Form.Select>
              {errors.pais && (
                <Alert variant="danger" className="py-2 my-2">
                  Por favor seleccione un país...
                </Alert>
              )}
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Enviar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default FormClima;
