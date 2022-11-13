import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'
import './AccountCard.css'

function AccountCard(accountObject) {
  const { account } = accountObject
  const {
    accountNumber, accountName, accountCurrency, accountBalance,
  } = account
  return (
    <Card className="accountCard">
      <CardContent>
        {!account ? (
          <Skeleton animation="wave" height={40} width="50%" />
        ) : (
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {`Account Number: ${accountNumber}`}
          </Typography>
        )}
        {!account ? (
          <Skeleton animation="wave" height={30} width="30%" />
        ) : (
          <Typography variant="h5" component="div">
            {accountName}
          </Typography>
        )}
        {!account ? (
          <Skeleton animation="wave" height={30} width="50%" />
        ) : (
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {accountCurrency}
          </Typography>
        )}
        {!account ? (
          <Skeleton animation="wave" height={40} width="40%" />
        ) : (
          <Typography variant="body2">
            {`Balance ${(+accountBalance).toFixed(2)}`}
          </Typography>
        )}
      </CardContent>
    </Card>

  )
}
export default AccountCard
