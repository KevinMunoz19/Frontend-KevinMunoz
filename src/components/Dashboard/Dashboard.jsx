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
        const balanceSum = accounts.reduce(
          (accumulator, currentValue) => accumulator + (+currentValue.accountBalance),
          0,
        )
        const totalBalance = {
          title: 'Total Balance',
          value: balanceSum,
        }
        const totalAccounts = {
          title: 'Number of accounts',
          value: accounts.length,
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
              <Typography key={item} variant="h5" textAlign="left">{item}</Typography>
            ))}
            {analitycsInfo.map((item) => (
              <InfoCard info={item} key={item.title} />
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
                <AccountCard key={item.accountNumber} account={item} />
              ))}
            </List>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}
export default Dashboard
