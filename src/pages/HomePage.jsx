import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PageLayout from './PageLayout/PageLayout'
import Dashboard from '../components/Dashboard/Dashboard'
import { getCurrentUser } from '../services/auth.service'

function HomePage() {
  const navigate = useNavigate()
  useEffect(() => {
    const userObject = getCurrentUser()
    if (!userObject) {
      navigate('/login')
    }
  }, [])
  return (
    <PageLayout>
      <Dashboard />
    </PageLayout>
  )
}

export default HomePage
