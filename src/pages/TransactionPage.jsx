import React, { useEffect } from 'react'
import { getAccounts } from '../utils/apiCalls'
import PageLayout from './PageLayout/PageLayout'
import TransactionForm from '../components/TransactionForm/TransactionForm'

function TransactionPage() {
  const [accountsArray, setAccountsArray] = React.useState([])
  useEffect(() => {
    getAccounts().then((resp) => {
      if (resp.isSuccess) {
        const { accounts } = resp.response.data
        setAccountsArray(accounts)
      }
    })
  }, [])
  if (accountsArray.length > 0) {
    return (
      <PageLayout>
        {accountsArray
          && <TransactionForm accountsArray={accountsArray} />}
      </PageLayout>
    )
  }
  return (
    <PageLayout />
  )
}

export default TransactionPage
