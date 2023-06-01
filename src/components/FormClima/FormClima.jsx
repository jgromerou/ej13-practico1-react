import { Card, Form, Button, Alert } from 'react-bootstrap';
import './form-clima.css';
import CardClima from '../CardClima/CardClima';

// import { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';

const FormClima = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = async (datos = '') => {
  //TODO: realizar la consulta a la API del clima al presionar Enviar
  // try {
  //   setMostrarSpinner(true);
  //   if (datos === '') {
  //     const resp = await fetch(
  //       `https://newsdata.io/api/1/news?apikey=pub_23780f986c99c831d5da97ac5387f0936f5f1`
  //     );
  //     const data = await resp.json();
  //     setNoticias(data.results);
  //   } else {
  //     const resp = await fetch(
  //       `https://newsdata.io/api/1/news?apikey=pub_23780f986c99c831d5da97ac5387f0936f5f1&q=${datos.categoria}&country=${datos.pais}`
  //     );
  //     const data = await resp.json();
  //     setNoticias(data.results);
  //     setCateg(datos.categoria);
  //     setPai(datos.pais);
  //   }
  //   setMostrarSpinner(false);
  // } catch (error) {
  //   console.log(error);
  // }
  //};

  return (
    <>
      <Card className="container-wrapper">
        <Card.Body>
          <Card.Title className="mt-2 mb-4 text-uppercase  fw-bold text-center">
            Consultar Clima
          </Card.Title>
          <CardClima />
          <Form>
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
