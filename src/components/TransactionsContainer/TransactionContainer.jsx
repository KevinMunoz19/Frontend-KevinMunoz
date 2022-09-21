/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import {
  List,
} from '@mui/material'
import TransactionCard from '../TransactionCards/TransactionCard'
import TransactionsFilters from '../TransactionsFilters/TransactionsFilters'

function TransactionContainer({ tabs }) {
  const [tabsFiltered, setTabsFiltered] = React.useState(tabs)
  const setFilterCallback = (value) => {
    if (value === 1) {
      setTabsFiltered((t) => [...t.sort((a, b) => new Date(b.date) - new Date(a.date))])
    }
    if (value === 2) {
      setTabsFiltered((t) => [...t.sort((a, b) => {
        const nameA = a.name.toUpperCase()
        const nameB = b.name.toUpperCase()
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }
        return 0
      })])
    }
  }
  return (
    <>
      <TransactionsFilters setFilterCallback={setFilterCallback} />
      <List sx={{
        height: '50vh',
        padding: '0.5rem',
      }}
      >
        {tabsFiltered.map((item) => (
          <TransactionCard key={item.transactionNumber} data={item} />
        ))}
      </List>
    </>

  )
}

TransactionContainer.propTypes = {
  tabs: PropTypes.array.isRequired,
}

export default TransactionContainer
