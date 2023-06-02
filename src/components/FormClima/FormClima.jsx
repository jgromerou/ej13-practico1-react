import { Card, Form, Button } from 'react-bootstrap';
import './form-clima.css';
import CardClima from '../CardClima/CardClima';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const FormClima = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    //3d73e1aee8b83e8ad4912b2fa95cb838
    const ciudad = 'Las Vegas';
    const pais = 'AR';
    try {
      const resp = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=3d73e1aee8b83e8ad4912b2fa95cb838`
      );
      const data = await resp.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Card className="container-wrapper">
        <Card.Body>
          <Card.Title className="mt-2 mb-4 text-uppercase  fw-bold text-center">
            Consultar Clima
          </Card.Title>
          <CardClima />
          <Form onClick={handleSubmit(onSubmit)}>
            {/* <Form.Group
              className="justify-content-center align-items-center mb-3"
              controlId="formCategory"
            >
              <Form.Select
                aria-label="Seleccione una ubicación (ciudad):"
                {...register('ubicacion', {
                  required: 'Debe seleccionar una ubicación',
                })}
              >
                <option value="">Seleccione una opcion:</option>
                <option value="science">Ciencia</option>
                <option value="sports">Deportes</option>
                <option value="health">Salud</option>
                <option value="technology">Tecnología</option>
              </Form.Select>
              {errors.categoria && (
                <Alert variant="danger" className="my-2">
                  Por favor seleccione una Categoria...
                </Alert>
              )}
            </Form.Group> */}

            <Form.Group className="mb-4" controlId="ubicacionCiudad">
              <Form.Label className="fw-bold">Ubicación Ciudad:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese nombre de Ciudad"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="nombrePais">
              <Form.Label className="fw-bold">País:</Form.Label>
              <Form.Control type="text" placeholder="Ingrese País" />
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
