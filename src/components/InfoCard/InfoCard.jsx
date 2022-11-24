import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'
import './InfoCard.css'

function InfoCard(infoObject) {
  const { info } = infoObject
  const { title, value } = info
  return (
    <Card className="infoCard">
      <CardContent>
        {!infoObject ? (
          <Skeleton animation="wave" height={30} width="30%" />
        ) : (
          <Typography variant="h5" component="div">
            {title}
          </Typography>
        )}
        {!infoObject ? (
          <Skeleton animation="wave" height={40} width="40%" />
        ) : (
          <Typography variant="body2">
            {value}
          </Typography>
        )}
      </CardContent>
    </Card>

  )
}
export default InfoCard
