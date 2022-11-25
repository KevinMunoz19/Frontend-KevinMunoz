import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, Grid, List } from '@mui/material'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import { getAccounts } from '../../utils/apiCalls'
import AccountCard from './AccountCard'
import InfoCard from '../InfoCard/InfoCard'
import './Dashboard.css'

function Dashboard() {
  const navigate = useNavigate()
  const [accountsArray, setAccountsArray] = React.useState([])
  const [userData, setUserData] = React.useState([])
  const [analitycsInfo, setAnalitycsInfo] = React.useState([])
  const buttons = [
    <Button onClick={() => navigate('/record')} key="expinc">Record expense/income</Button>,
    <Button onClick={() => navigate('/transaction')} key="transaction">Transaction</Button>,
  ]
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
            <ButtonGroup variant="contained" color="secondary" aria-label="medium secondary button group">
              {buttons}
            </ButtonGroup>
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
