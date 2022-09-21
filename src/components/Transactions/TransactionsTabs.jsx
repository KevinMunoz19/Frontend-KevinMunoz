/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { useTheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Zoom from '@mui/material/Zoom'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import UpIcon from '@mui/icons-material/KeyboardArrowUp'
import { green } from '@mui/material/colors'
import Box from '@mui/material/Box'
import TransactionContainer from '../TransactionsContainer/TransactionContainer'

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2, pb: 5 }}>{children}</Box>}
    </Typography>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  }
}

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16,
}

const fabGreenStyle = {
  color: 'common.white',
  bgcolor: green[500],
  '&:hover': {
    bgcolor: green[600],
  },
}

export default function TransactionsTabs() {
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  const dateToday = new Date('2022-09-15')
  const dateYesterday = new Date('2022-09-14')
  const dateYesterdayY = new Date('2022-09-13')

  const tabs = [
    {
      name: 'aaa',
      date: dateYesterdayY,
      transactionNumber: 'bjckjweb234321',
      amount: 150,
      transactionType: 'income',
    },
    {
      name: 'aaa',
      date: dateToday,
      transactionNumber: 'bjckjweb234322',
      amount: 140,
      transactionType: 'income',
    },
    {
      name: 'bbb',
      date: dateToday,
      transactionNumber: 'bjckjweb234323',
      amount: 150,
      transactionType: 'outcome',
    },
    {
      name: 'bbb',
      date: dateYesterday,
      transactionNumber: 'bjckjweb234324',
      amount: 50,
      transactionType: 'outcome',
    },
    {
      name: 'ccc',
      date: dateYesterdayY,
      transactionNumber: 'bjckjweb234325',
      amount: 1500,
      transactionType: 'outcome',
    },
    {
      name: 'bbb',
      date: dateYesterdayY,
      transactionNumber: 'bjckjweb234326',
      amount: 1530,
      transactionType: 'income',
    },
  ]

  const tabHistory = tabs

  const tabIncoming = tabs.filter((item) => item.transactionType === 'income')

  const tabExpenses = tabs.filter((item) => item.transactionType === 'outcome')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index) => {
    setValue(index)
  }

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  }

  const fabs = [
    {
      color: 'primary',
      sx: fabStyle,
      icon: <AddIcon />,
      label: 'Add',
    },
    {
      color: 'secondary',
      sx: fabStyle,
      icon: <EditIcon />,
      label: 'Edit',
    },
    {
      color: 'inherit',
      sx: { ...fabStyle, ...fabGreenStyle },
      icon: <UpIcon />,
      label: 'Expand',
    },
  ]

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        width: '90vw',
        position: 'relative',
        minHeight: 200,
      }}
    >
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="Income" {...a11yProps(0)} />
          <Tab label="Expense" {...a11yProps(1)} />
          <Tab label="History" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <TransactionContainer tabs={tabIncoming} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <TransactionContainer tabs={tabExpenses} />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <TransactionContainer tabs={tabHistory} />
        </TabPanel>
      </SwipeableViews>
      {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={value === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
          }}
          unmountOnExit
        >
          <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
            {fab.icon}
          </Fab>
        </Zoom>
      ))}
    </Box>
  )
}
