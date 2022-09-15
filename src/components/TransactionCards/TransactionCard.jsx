import React from 'react'
import { Paper, Grid, Avatar } from '@mui/material'

function TransactionCard() {
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
            container
            direction="column"
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
            direction="column"
            xs={6}
            sx={{
              bgcolor: 'green',
              padding: '1rem',
            }}
          >
            <Grid
              item
              direction="row"
              xs={12}
            >
              name
            </Grid>
            <Grid
              item
              direction="row"
              xs={12}
            >
              transaction
            </Grid>
          </Grid>
          <Grid
            item
            direction="column"
            xs={4}
            sx={{
              bgcolor: 'blue',
            }}
          >
            $1000
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default TransactionCard
