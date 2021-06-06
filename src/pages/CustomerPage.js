import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Button from '../components/Button';
import Container from '../components/Container';
import FormBody from '../components/FormBody';
import FormFieldset from '../components/FormFieldset';
import FormInput from '../components/FormInput';
import Panel from '../components/Panel';
import PanelBody from '../components/PanelBody';
import PanelFooter from '../components/PanelFooter';
import MainTemplate from '../templates/MainTemplate';

const PageForm = styled.div`
  margin: 120px auto 0 auto;
  max-width: 640px;
`;

function CustomerPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [documentNumber, setDocumentNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const platformData = useSelector(state => state.main.platformData);
  const planData = useSelector(state => state.main.planData);

  function handleChangeName(value) {
    setName(value);
  }

  function handleChangeEmail(value) {
    setEmail(value);
  }

  function handleChangeBirthDate(value) {
    setBirthDate(value);
  }

  function handleChangeDocumentNumber(value) {
    setDocumentNumber(value);
  }

  function handleChangePhoneNumber(value) {
    setPhoneNumber(value);
  }

  function handleClickSend() {
    printAllInformations();
  }

  function printAllInformations() {
    console.log('=====================================');

    console.log('')
    console.log('PLATAFORMA')
    console.log('')
    console.log(' - Sku: ', platformData['sku']);
    console.log(' - Nome: ', platformData['nome']);
    console.log(' - Descrição: ', platformData['descricao']);

    console.log('')
    console.log('PLANO')
    console.log('')
    console.log(' - Sku: ', planData['sku']);
    console.log(' - Franquia: ', planData['franquia']);
    console.log(' - Valor: ', planData['valor']);

    console.log('')
    console.log('CLIENTE')
    console.log('')
    console.log(' - Name: ', name);
    console.log(' - E-mail: ', email);
    console.log(' - Date de Nascimento: ', birthDate);
    console.log(' - CPF: ', documentNumber);
    console.log(' - Número de Telefone: ', phoneNumber);

    console.log('')
    console.log('=====================================');
  }

  return (
      <MainTemplate>
        <Container>
          <PageForm>
            <Panel
              title="Informações Pessoais"
              subtitle="Entre com suas informações pessoais."
            >
              <PanelBody>
                <FormBody>
                  <FormFieldset>
                    <FormInput
                      value={name}
                      label="Nome"
                      onChange={handleChangeName}
                    />
                  </FormFieldset>

                  <FormFieldset md={6} lg={6} xl={6}>
                    <FormInput
                      value={documentNumber}
                      label="CPF"
                      onChange={handleChangeDocumentNumber}
                    />
                  </FormFieldset>

                  <FormFieldset md={6} lg={6} xl={6}>
                    <FormInput
                      value={birthDate}
                      label="Data de Nascimento"
                      onChange={handleChangeBirthDate}
                    />
                  </FormFieldset>

                  <FormFieldset md={6} lg={7} xl={7}>
                    <FormInput
                      value={email}
                      label="E-mail"
                      onChange={handleChangeEmail}
                    />
                  </FormFieldset>

                  <FormFieldset md={6} lg={5} xl={5}>
                    <FormInput
                      value={phoneNumber}
                      label="Telefone"
                      onChange={handleChangePhoneNumber}
                    />
                  </FormFieldset>
                </FormBody>
              </PanelBody>
              <PanelFooter>
                <Button onClick={handleClickSend}>Enviar</Button>
              </PanelFooter>
            </Panel>
          </PageForm>
        </Container>
      </MainTemplate>
  );
}

export default CustomerPage;
