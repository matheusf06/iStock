import React, { useEffect, useState } from "react";
import {
  Navbar,
  Form,
  Button,
  Container,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";
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

export default function Editar({ match }) {
  const [produto, setProduto] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchApi() {
      await axios
        .get(
          `https://produtos-apirest.herokuapp.com/api/produto/${match.params.prodId}`
        )
        .then((res) => {
          setProduto(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchApi();
  }, []);

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
      .put("https://produtos-apirest.herokuapp.com/api/produto/", {
        id: produto.id,
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

  function excluir() {
    axios
      .delete("https://produtos-apirest.herokuapp.com/api/produto/", {
        data: {
          id: produto.id,
          nome: produto.nome,
          quantidade: produto.quantidade,
          valor: produto.valor,
        },
      })
      .then((res) => {
        alert("Produto excluido!");
      })
      .catch((err) => {
        console.log(err);
        alert("Erro");
      });
  }

  function MySpinner() {
    return (
      <div className="center">
        <Spinner animation="grow" />
      </div>
    );
  }

  return (
    <>
      <Header />
      <Container>
        {loading ? (
          <MySpinner />
        ) : (
          <>
            <h3>Produto: {produto.id}</h3>

            <Form>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                      value={produto.nome}
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
                      value={produto.quantidade}
                      onChange={(event) => handleChangeProdutoQuantidade(event)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Valor</Form.Label>
                    <Form.Control
                      value={produto.valor}
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

                <Col>
                  <Button variant="outline-danger" onClick={() => excluir()}>
                    Excluir
                  </Button>
                </Col>
              </Row>
            </Form>
          </>
        )}
      </Container>
    </>
  );
}
