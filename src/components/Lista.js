import React, { useEffect, useState } from 'react';
import { ListGroup, Row, Col } from 'react-bootstrap';
import axios from 'axios';

export default function Lista() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios
      .get('https://produtos-apirest.herokuapp.com/api/produtos')
      .then(res => {
        setProdutos(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <ListGroup>
      {produtos.map(prod => (
        <ListGroup.Item action key={prod.id} href={`#/editar/${prod.id}`}>
          <Row>
            <Col>
              <b>Nome:</b> {prod.nome}
            </Col>
          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
