import React from 'react';
import styled from 'styled-components';

import Container from '../components/Container';
import Painel from '../components/Painel';
import MainTemplate from '../templates/MainTemplate';

const PageForm = styled.div`
  margin: 120px auto 0 auto;
  max-width: 640px;
`;

function CustomerPage() {
  return (
      <MainTemplate>
        <Container>
          <PageForm>
            <Painel
              title="Informações Pessoais"
            >
            </Painel>
          </PageForm>
        </Container>
      </MainTemplate>
  );
}

export default CustomerPage;
