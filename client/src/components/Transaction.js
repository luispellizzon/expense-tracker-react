import React, { useContext }from 'react'
import { GlobalContext } from '../context/GlobalState';
import { formatMoney } from '../utilities/format';

export const Transaction = ({transaction}) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign =  transaction.amount > 0 ? '+' : '-';
  return (
    <li className={sign === '+' ? 'plus' : 'minus'}>
    {transaction.text} <span>{sign}${formatMoney(Math.abs(transaction.amount))}</span>
    <button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
  </li>
  )
}
