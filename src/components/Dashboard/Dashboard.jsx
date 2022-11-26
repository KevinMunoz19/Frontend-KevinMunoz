import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, Grid, List } from '@mui/material'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import AccountCard from '../AccountCard/AccountCard'
import InfoCard from '../InfoCard/InfoCard'
import './Dashboard.css'

function Dashboard(acc) {
  const navigate = useNavigate()
  const [accountsArrayProp, setAccountsArrayProp] = React.useState([])
  const [userDataProp, setUserDataProp] = React.useState([])
  const [analitycsInfoProp, setAnalitycsInfoProp] = React.useState([])
  const buttons = [
    <Button onClick={() => navigate('/record')} key="expinc">Record expense/income</Button>,
    <Button onClick={() => navigate('/transaction')} key="transaction">Transaction</Button>,
  ]
  useEffect(() => {
    const { accountsArray, userData } = acc
    const balanceSum = accountsArray.reduce(
      (accumulator, currentValue) => accumulator + (+currentValue.accountBalance),
      0,
    )
    const totalBalance = {
      title: 'Total Balance',
      value: balanceSum,
    }
    const totalAccounts = {
      title: 'Number of accounts',
      value: accountsArray.length,
    }
    setAnalitycsInfoProp([totalBalance, totalAccounts])
    setUserDataProp(userData)
    setAccountsArrayProp(accountsArray)
  }, [])
  return (
    <Grid
      container
      direction="column"
      sx={{
        marginTop: '1rem',
        marginBottom: '1rem',
      }}
      key="gridContainerDashboardTile"
    >
      <Paper elevation={5}>
        <Grid
          container
          direction="row"
          xs={12}
          key="paperContainerDashboardTile"
        >
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              bgcolor: 'red',
              padding: '1rem',
            }}
            key="leftSideTile"
          >
            <Typography key="userTitle" variant="h3" textAlign="left">User Information</Typography>
            {userDataProp.map((item) => (
              <Typography key={item} variant="h5" textAlign="left">{item}</Typography>
            ))}
            {analitycsInfoProp.map((item) => (
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
            key="rightSideTile"
          >
            <Typography key="AccountsTitle" variant="h3" textAlign="left">Accounts</Typography>
            <List
              sx={{
                height: '63vh',
                padding: '0.5rem',
                contain: 'content',
                overflow: 'scroll',
              }}
              className="scrollableList"
            >
              {accountsArrayProp.map((item) => (
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
