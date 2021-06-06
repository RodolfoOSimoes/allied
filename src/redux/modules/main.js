import { createSlice } from '@reduxjs/toolkit';

export const main = createSlice({
  name: 'main',
  initialState: {
    platformSku: '',
    platformData: null,
    planSku: '',
    planData: null,
  },
  reducers: {
    applyPlatform(state, action) {
      state.platformSku = action.payload.sku;
      state.platformData = action.payload.data;
    },
    applyPlan(state, action) {
      state.planSku = action.payload.sku;
      state.planData = action.payload.data;
    },
  },
});

export const { applyPlatform, applyPlan } = main.actions;

export default main.reducer;
