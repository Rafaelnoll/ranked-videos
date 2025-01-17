import { BrowserRouter, Routes as RoutesComponent, Route } from 'react-router';
import Login from "./pages/Login";

export default function Routes(){
  return (
    <BrowserRouter>
      <RoutesComponent>
        <Route path="/" element={<Login />} />
      </RoutesComponent>
    </BrowserRouter>
  )
}
