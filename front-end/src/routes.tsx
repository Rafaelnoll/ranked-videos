import { BrowserRouter, Routes as RoutesComponent, Route } from 'react-router';
import Login from "./pages/Login";
import Register from './pages/Register';

export default function Routes(){
  return (
    <BrowserRouter>
      <RoutesComponent>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </RoutesComponent>
    </BrowserRouter>
  )
}
