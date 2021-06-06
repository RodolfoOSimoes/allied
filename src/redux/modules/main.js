import { createSlice } from '@reduxjs/toolkit';

export const main = createSlice({
  name: 'main',
  initialState: {
    platformSku: '',
    platformData: null,
    planSku: '',
    planData: null,
    userName: '',
    userEmail: '',
    userBirthDate: '',
    userDocumentNumber: '',
    userPhoneNumber: '',
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
    appyUser(state, action) {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
      state.userBirthDate = action.payload.userBirthDate;
      state.userDocumentNumber = action.payload.userDocumentNumber;
      state.userPhoneNumber = action.payload.userPhoneNumber;
    }
  },
});

export const { applyPlatform, applyPlan } = main.actions;

export default main.reducer;
