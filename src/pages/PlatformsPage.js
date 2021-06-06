import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Container from '../components/Container';
import Panel from '../components/Panel';
import ProductList from '../components/ProductList';
import MainTemplate from '../templates/MainTemplate';
import PlatformService from '../services/PlatformService';
import { applyPlatform } from '../redux/modules/main';

const PageForm = styled.div`
  margin: 120px auto 0 auto;
  max-width: 640px;
`;

function PlatformsPage() {
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [platforms, setPlatforms] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();

  async function loadPlatformList() {
    setLoading(true);

    let response;
    try {
      response = await PlatformService.list();
    } catch(e) {
      // Error cases were not dealt with due to lack of time.
    }

    if (response) {
      setPlatforms(response.data.plataformas);
    }

    setLoaded(true);
    setLoading(false);
  }

  function formatProducts(platforms) {
    return platforms.map(item => ({
      sku: item['sku'],
      title: item['nome'],
      subtitle: item['descricao'],
    }));
  }

  function findPlatform(sku) {
    let result = null;
    platforms.some(item => {
      if (item['sku'] === sku) {
        result = item;
        return true;
      }
      return false;
    });
    return result;
  }

  function handleSelectPlatform(sku) {
    dispatch(applyPlatform({
      sku,
      data: findPlatform(sku),
    }));
    history.push('/planos');
  }

  if (!loaded && !loading) {
    loadPlatformList();
  }

  return (
      <MainTemplate>
        <Container>
          <PageForm>
            <Panel
              title="Plataformas"
              subtitle="Selecione a plataforma."
            >
              <ProductList
                products={formatProducts(platforms)}
                onSelect={handleSelectPlatform}
              />
            </Panel>
          </PageForm>
        </Container>
      </MainTemplate>
  );
}

export default PlatformsPage;
