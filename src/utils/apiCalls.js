import axios from 'axios'
import { apiBaseUrl, apiTransactionsUrl } from './constants'

const getAllTransactions = async () => axios.get(`${apiBaseUrl}${apiTransactionsUrl}`)
const getAllTransactions2 = async () => axios.get(`${apiBaseUrl}${apiTransactionsUrl}`)

export {
  getAllTransactions,
  getAllTransactions2,
}
