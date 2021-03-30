import { combineReducers } from 'redux';

import { Auth } from './auth.reducers';
import { ConnectWallet } from './connectwallet.reducers';
import { HeaderOptions } from './header.reducers';
import { Modal } from './modal.reducers';

const rootReducer = combineReducers({
  Auth,
  ConnectWallet,
  HeaderOptions,
  Modal,
});

export default rootReducer;
