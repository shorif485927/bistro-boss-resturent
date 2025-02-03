import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {

  // react router 
  RouterProvider,
} from "react-router-dom";
import router from './My-React-App/Routes/Router.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './My-React-App/Context/AuthProvider.jsx';

// tanstack query
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <AuthProvider>

        <QueryClientProvider client={queryClient}>
     
        <HelmetProvider>
      <div className='max-w-6xl mx-auto'>
      <RouterProvider router={router} />
      </div>
      </HelmetProvider>
    </QueryClientProvider>

        </AuthProvider>
  </StrictMode>,
)
