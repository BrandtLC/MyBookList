import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/home'
import GlobalStyle from './styles/globalStyles';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <GlobalStyle />
      <Home />

    </QueryClientProvider>

  </React.StrictMode>,
)
