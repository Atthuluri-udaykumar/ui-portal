import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query/react';
import { QueryClient } from 'react-query/core';
import { AuthContextProvider } from './context/auth.context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './routes/index'

const client = new QueryClient({});
function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </QueryClientProvider>
    </BrowserRouter>

  );
}

export default App;
