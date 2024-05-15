import { React, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import AdminPanel from './pages/AdminPanel'
import AdminPanelLogin from './pages/AdminPanelLogin'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='login' element={<AdminPanelLogin />} />
          <Route path='admin' element={<AdminPanelWrapper />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function AdminPanelWrapper() {
  const [token, setToken] = useState();

  if(!token) {
    return <AdminPanelLogin setToken={setToken} />
  }
  
  return <AdminPanel />
}

export default App;
