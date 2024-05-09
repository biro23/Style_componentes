import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  input,
  textarea {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    width: 100%;
    margin-bottom: 15px;
  }

  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
  }
`;

const Header = styled.header`
  background-color: #007bff;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const Hero = styled.div`
  background-image: url('hero.jpg');
  background-size: cover;
  background-position: center;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  text-shadow: 2px 2px #000;
`;

const Job = styled.div`
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;

  h2 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 10px;
  }
`;

const JobList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const App = () => {
  return (
    <>
      <Header>
        <h1>Estilização com Styled Components</h1>
      </Header>
      <Hero>
        <h2>Bem-vindo ao nosso site!</h2>
        <p>Conheça nossas vagas de emprego.</p>
      </Hero>
      <Form>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" />
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" />
        <label htmlFor="message">Mensagem:</label>
        <textarea id="message" rows="4"></textarea>
        <button>Enviar</button>
      </Form>
      <JobList>
        <Job>
          <h2></h2>
