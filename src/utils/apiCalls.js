import axios from 'axios'
import { getTransactionsUrl } from './constants'

const getAllTransactions = async () => axios.get(getTransactionsUrl)
const getAllRecords = async () => axios.get('http://localhost:3031/api/records/1')
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

export {
  getAllTransactions,
  getAccounts,
  getAllRecords,
}
