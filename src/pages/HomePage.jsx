import React from 'react'
import { Link } from 'react-router-dom'
import PageLayout from './PageLayout/PageLayout'

function HomePage() {
  return (
    <PageLayout>
      <p>HomePage aaaa</p>
      <Link to="/login">
        Go to login
      </Link>
      <Link to="/signup">
        Go to signup
      </Link>
    </PageLayout>
  )
}

export default HomePage
