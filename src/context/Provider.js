import React, { Children, useState } from 'react'
import MyContext from './MyContext'


const Provider = ({children}) => {

    const [name, setName] = useState('Ajeet S')

    const [totalCreditedAmount, setTotalCreditedAmount] = useState(0);
    const [totalDebitedAmount, setTotalDebitedAmount] = useState(0);
    const [creditedTransaction, setCreditedTransaction] = useState([{}]);
    const [debitedTransaction, setDebitedTransaction] = useState([{}]);
    const [allTransactions, setAllTransactions] = useState([{}]);
    const [categories, setCategories] = useState({})

  return (

    <MyContext.Provider value={{name, setName, totalCreditedAmount, setTotalCreditedAmount, totalDebitedAmount, setTotalDebitedAmount, creditedTransaction, setCreditedTransaction, debitedTransaction, setDebitedTransaction, allTransactions, setAllTransactions, categories, setCategories}}>
        {children}
    </MyContext.Provider>

  )
}

export default Provider