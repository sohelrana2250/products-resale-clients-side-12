
import './App.css';
import { RouterProvider } from "react-router-dom";
import { router } from './Pages/Router/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from './context/AuthProvider';

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>

        <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
        </AuthProvider>

      </QueryClientProvider>



    </div>
  );
}

export default App;
