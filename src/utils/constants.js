export const apiBaseUrl = 'http://localhost:3031/api'
export const apiTransactionsUrl = '/transactions'
export const apiAccountsUrl = '/accounts'
export const apiUsersUrl = '/users'
export const apiRecordsUrl = '/records'
export const apiCreateUrl = '/create'
export const apiLoginUrl = '/login'
export const apiSignUpUrl = '/signup'

export const createAccountUrl = apiBaseUrl + apiAccountsUrl + apiCreateUrl
export const loginUrl = apiBaseUrl + apiUsersUrl + apiLoginUrl
export const signUpUrl = apiBaseUrl + apiUsersUrl + apiSignUpUrl
export const createRecordUrl = apiBaseUrl + apiRecordsUrl + apiCreateUrl
export const createTransactionUrl = apiBaseUrl + apiTransactionsUrl + apiCreateUrl
export const getTransactionsUrl = `${apiBaseUrl + apiTransactionsUrl}/`
export const getRecordsUrl = `${apiBaseUrl + apiRecordsUrl}/`
