import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { formatMoney  } from '../utilities/format';


export const IncomeExpenses = () => {

  const {transactions} = useContext(GlobalContext);
  const income = transactions.filter(item => item.amount > 0).reduce((acc, item) => (acc += item.amount),0).toFixed(2)
  const expense = Math.abs(transactions.filter(item => item.amount < 0).reduce((acc, item) => (acc += item.amount), 0).toFixed(2))
  return (
    <div className="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p className="money plus">+${formatMoney(income)}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p className="money minus">-${formatMoney(expense)}</p>
        </div>
    </div>
  )
}
