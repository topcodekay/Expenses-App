import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpensesFilter from './ExpenseFilter'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import ExpensesChart from './ExpensesChart'


function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filterExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  let expensesContent = <p className='empty'>No expenses found</p>

  if (filterExpenses.length > 0) {
    expensesContent = filterExpenses.map((expense) => (
      <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
      />
    ))
  }

  return (
    <div>
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterHandler}/>
      <ExpensesChart expenses={filterExpenses}/>
      {expensesContent}
    </Card>
    </div>
  )
}

export default Expenses