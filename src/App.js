import { BrowserRouter } from 'react-router-dom';
import MainApp from './components/main/MainApp';
import { Provider } from 'react-redux';
import { store } from './components/redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainApp />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
