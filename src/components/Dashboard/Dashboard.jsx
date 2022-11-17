import React, { useEffect } from 'react'
import { Paper, Grid } from '@mui/material'
import { getAccounts } from '../../utils/apiCalls'
import AccountCard from './AccountCard'

function Dashboard() {
  const [accountsArray, setAccountsArray] = React.useState([])
  useEffect(() => {
    getAccounts().then((resp) => {
      if (resp.isSuccess) {
        const { accounts } = resp.response.data
        setAccountsArray(accounts)
      }
    })
  }, [])
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
          xs={12}
          sx={{
            bgcolor: 'green',
            padding: '1rem',
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              bgcolor: 'red',
              padding: '1rem',
            }}
          >
            aaaa
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              bgcolor: 'red',
              padding: '1rem',
            }}
          >
            <>
              {accountsArray.map((item) => (
                <AccountCard account={item} />
              ))}
            </>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}
export default Dashboard
