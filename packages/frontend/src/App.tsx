import Pages from './pages'
import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import { AppProvider } from "./pages/appProvider";

function App() {
  return (
    <BrowserRouter>
      <AppProvider props={{}}>
        <Routes>
        <Route path="/" element={<Pages.Home />}/>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
