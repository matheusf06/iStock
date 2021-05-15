import React, { useEffect, useState } from 'react';
import { ListGroup, Row, Col, Spinner } from 'react-bootstrap';
import axios from 'axios';

function MySpinner() {
  return (
    <div className="center">
      <Spinner animation="grow" />
    </div>
  );
}

export default function Lista() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchApi() {
      await axios
        .get('https://produtos-apirest.herokuapp.com/api/produtos')
        .then(res => {
          setProdutos(res.data);
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
        });
    }
    fetchApi();
  }, []);

  return (
    <>
      {loading ? (
        <MySpinner />
      ) : (
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
      )}
    </>
  );
}
