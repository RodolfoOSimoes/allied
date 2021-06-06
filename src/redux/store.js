import { configureStore } from '@reduxjs/toolkit';

import mainModule from './modules/main';

export default configureStore({
  reducer: {
    main: mainModule,
  },
});
