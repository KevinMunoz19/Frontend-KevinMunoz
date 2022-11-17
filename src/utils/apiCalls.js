import axios from 'axios'
import { apiBaseUrl, apiTransactionsUrl, apiCreateUrl } from './constants'

const getAllTransactions = async () => axios.get(`${apiBaseUrl}${apiTransactionsUrl}${apiCreateUrl}`)
const getAllTransactions2 = async () => axios.get(`${apiBaseUrl}${apiTransactionsUrl}${apiCreateUrl}`)

export {
  getAllTransactions,
  getAllTransactions2,
}
