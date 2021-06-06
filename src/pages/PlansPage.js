import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Container from '../components/Container';
import Panel from '../components/Panel';
import ProductList from '../components/ProductList';
import MainTemplate from '../templates/MainTemplate';
import PlanService from '../services/PlanService';
import { applyPlan } from '../redux/modules/main';

const PageForm = styled.div`
  margin: 120px auto 0 auto;
  max-width: 640px;
`;

function PlansPage() {
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [plans, setPlans] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();

  const platformSku = useSelector(state => state.main.platformSku);

  async function loadPlanList() {
    setLoading(true);

    let response;
    try {
      response = await PlanService.getByPlatform(platformSku);
    } catch(e) {
      // Error cases were not dealt with due to lack of time.
    }

    if (response) {
      setPlans(response.data.planos);
    }

    setLoaded(true);
    setLoading(false);
  }

  function formatProducts(plans) {
    return plans
      .filter(item => item['ativo'])
      .map(item => ({
        sku: item['sku'],
        title: item['franquia'],
        subtitle: item['valor'],
      }));
  }

  function findPlan(sku) {
    let result = null;
    plans.some(item => {
      if (item['sku'] === sku) {
        result = item;
        return true;
      }
      return false;
    });
    return result;
  }

  function handleSelectPlan(sku) {
    dispatch(applyPlan({
      sku,
      data: findPlan(sku),
    }));
    history.push('/informacoes-pessoais');
  }

  if (!loaded && !loading) {
    loadPlanList();
  }

  return (
      <MainTemplate>
        <Container>
          <PageForm>
            <Panel
              title="Planos"
              subtitle="Selecione o plano."
            >
              <ProductList
                products={formatProducts(plans)}
                onSelect={handleSelectPlan}
              />
            </Panel>
          </PageForm>
        </Container>
      </MainTemplate>
  );
}

export default PlansPage;
