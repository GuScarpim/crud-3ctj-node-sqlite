import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Client from '../pages/Client';
import Home from '../pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/client',
    element: <Client />
  }
]);

export const Routes = () => {
  return (
    <RouterProvider router={router} />
  )
}