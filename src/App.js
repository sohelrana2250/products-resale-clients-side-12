
import './App.css';
import { RouterProvider } from "react-router-dom";
import { router } from './Pages/Router/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>

        <RouterProvider router={router}></RouterProvider>

      </QueryClientProvider>



    </div>
  );
}

export default App;
