import React, { useEffect } from 'react'
import { Paper, Grid } from '@mui/material'
import axios from 'axios'
import AccountCard from './AccountCard'

function Dashboard() {
  const [accountsArray, setAccountsArray] = React.useState([])
  const getAccounts = async () => {
    try {
      const resp = await axios.get('http://localhost:3031/api/accounts/1')
      const returnObject = {
        isSuccess: true,
        response: resp,
      }
      return returnObject
    } catch (error) {
      const returnObject = {
        isSuccess: false,
        response: error,
      }
      return returnObject
    }
  }
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
