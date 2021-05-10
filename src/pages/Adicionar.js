import React, { useState } from "react";
import { Navbar, Form, Button, Container, Row, Col } from "react-bootstrap";
import { BiArrowBack } from "react-icons/bi";
import axios from "axios";

function Header() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="#">
        <BiArrowBack />
      </Navbar.Brand>
    </Navbar>
  );
}

export default function Adicionar() {
  const [produto, setProduto] = useState([]);

  function handleChangeProdutoNome(event) {
    setProduto((prevState) => ({
      ...prevState,
      nome: event.target.value,
    }));
  }

  function handleChangeProdutoValor(event) {
    setProduto((prevState) => ({
      ...prevState,
      valor: event.target.value,
    }));
  }

  function handleChangeProdutoQuantidade(event) {
    setProduto((prevState) => ({
      ...prevState,
      quantidade: event.target.value,
    }));
  }

  function salvar() {
    axios
      .post("https://produtos-apirest.herokuapp.com/api/produto/", {
        nome: produto.nome,
        quantidade: produto.quantidade,
        valor: produto.valor,
      })
      .then((res) => {
        setProduto(res.data);
        alert("Produto salvo");
      })
      .catch((err) => {
        console.log(err);
        alert("Erro");
      });
  }

  return (
    <>
      <Header />
      <Container>
        <h3>Produto: {produto.id}</h3>
        <Form>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  placeholder="Nome do produto"
                  onChange={(event) => handleChangeProdutoNome(event)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Quantidade</Form.Label>
                <Form.Control
                  placeholder="Quantidade do produto"
                  onChange={(event) => handleChangeProdutoQuantidade(event)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Valor</Form.Label>
                <Form.Control
                  placeholder="Valor do produto"
                  onChange={(event) => handleChangeProdutoValor(event)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button variant="primary" onClick={() => salvar()}>
                Salvar
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}
