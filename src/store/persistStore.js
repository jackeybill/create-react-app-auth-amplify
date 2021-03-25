import rootStore from './rootStore';
import { persistStore } from 'redux-persist'

const persistor = persistStore(rootStore);
 
export default persistor;