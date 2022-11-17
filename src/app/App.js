import React from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import ErrorPage from '../pages/ErrorPage'
import SignUpPage from '../pages/SignUpPage'
import History from '../pages/History'
import AccountPage from '../pages/AccountPage'
import RecordPage from '../pages/RecordPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/history" element={<History />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/record" element={<RecordPage />} />
      </Routes>
    </div>
  )
}

export default App
