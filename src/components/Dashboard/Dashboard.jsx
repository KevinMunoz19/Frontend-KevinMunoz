import React, { useEffect } from 'react'
import { Paper, Grid, List } from '@mui/material'
import Typography from '@mui/material/Typography'
import { getAccounts } from '../../utils/apiCalls'
import AccountCard from './AccountCard'
import InfoCard from '../InfoCard/InfoCard'
import './Dashboard.css'

function Dashboard() {
  const [accountsArray, setAccountsArray] = React.useState([])
  const [userData, setUserData] = React.useState([])
  const [analitycsInfo, setAnalitycsInfo] = React.useState([])
  useEffect(() => {
    getAccounts().then((resp) => {
      if (resp.isSuccess) {
        const { accounts } = resp.response.data
        const { firstName, lastName, userEmail } = resp.response.data
        const userObject = [firstName, lastName, userEmail]
        const totalBalance = {
          title: 'aaaa',
          value: 100.00,
        }
        const totalAccounts = {
          title: 'aaaa',
          value: 100.00,
        }
        setAnalitycsInfo([totalBalance, totalAccounts])
        setUserData(userObject)
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
            <Typography variant="h3" textAlign="left">User Information</Typography>
            {userData.map((item) => (
              <Typography variant="h5" textAlign="left">{item}</Typography>
            ))}
            {analitycsInfo.map((item) => (
              <InfoCard info={item} />
            ))}
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
            <Typography variant="h3" textAlign="left">Accounts</Typography>
            <List
              sx={{
                height: '63vh',
                padding: '0.5rem',
                contain: 'content',
                overflow: 'scroll',
              }}
              className="scrollableList"
            >
              {accountsArray.map((item) => (
                <AccountCard account={item} />
              ))}
            </List>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}
export default Dashboard
