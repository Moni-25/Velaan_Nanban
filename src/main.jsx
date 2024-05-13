import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import AdminContextProvider from './Context/adminContext.jsx'
import PeopleContextProvider from './Context/peopleContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <AdminContextProvider>
      <PeopleContextProvider>
        <App />
      </PeopleContextProvider>
    </AdminContextProvider>
  </Router>
)
