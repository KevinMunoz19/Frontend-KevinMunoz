/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import {
  List,
} from '@mui/material'
import TransactionCard from '../TransactionCards/TransactionCard'

function TransactionContainer({ tabs }) {
  return (
    <List sx={{
      height: '50vh',
      padding: '0.5rem',
    }}
    >
      {tabs.map(() => (
        <TransactionCard />
      ))}
    </List>

  )
}

TransactionContainer.propTypes = {
  tabs: PropTypes.array.isRequired,
}

export default TransactionContainer
