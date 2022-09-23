import React, { useContext }from 'react';

import {AuthContext} from '../../contexts/auth';
import Header from '../../components/Header';

import { Background, Container, Nome, Saldo, Title } from './styles';

export default function Home() {  
  const { user } = useContext(AuthContext);

  return (
    <Background>
      <Header/>
      <Container>
        <Nome>Emerson Rodrigues</Nome>
        <Saldo>R$ 125,00</Saldo>
      </Container>

      <Title>Ultimas movimentaçôes</Title>
    </Background>
  );
}