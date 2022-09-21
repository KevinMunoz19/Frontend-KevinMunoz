/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Grid, Avatar } from '@mui/material'

function TransactionCard({ data }) {
  const {
    name,
    date,
    transactionNumber,
    amount,
    transactionType,
  } = data
  const transactionAmount = (transactionType === 'income' ? '+' : '-') + amount
  return (
    <Grid
      container
      direction="column"
      sx={{
        marginTop: '1rem',
        marginBottom: '1rem',
      }}
    >
      <Paper elevation={5}>
        <Grid
          container
          direction="row"
          sx={{
            padding: '1rem',
          }}
        >
          <Grid
            item
            xs={2}
            alignContent="center"
            justifyContent="center"
            sx={{
              bgcolor: 'red',
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              variant="square"
              sx={{
                width: '8vw',
                height: '8vw',
              }}
            />
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              bgcolor: 'green',
              padding: '1rem',
            }}
          >
            <Grid
              item
              xs={12}
            >
              {name}
            </Grid>
            <Grid
              item
              xs={12}
            >
              {transactionNumber}
            </Grid>
            <Grid
              item
              xs={12}
            >
              {date.toString()}
            </Grid>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              bgcolor: 'blue',
            }}
          >
            {transactionAmount}
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

TransactionCard.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TransactionCard
