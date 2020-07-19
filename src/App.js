import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import DateRangePicker from '@wojtekmaj/react-daterange-picker'
import MailTable from './MailTable'

function App() {
  const today = new Date();

  const [date, setDate] = useState([today, today]);
  const mailData = [
    { id: 1, from: 'mail1@mailcom', to: 'mail2@mail.com', subject: 'this is subject', date :  new Date('December 17, 2019 03:24:00')},
    { id: 2, from: 'mail1@mailcom', to: 'mail2@mail.com', subject: 'this is subject', date :  new Date('December 17, 2019 03:24:00')},
    { id: 3, from: 'mail1@mailcom', to: 'mail2@mail.com', subject: 'this is subject', date :  new Date('December 20, 2019 03:24:00')},
    { id: 4, from: 'mail1@mailcom', to: 'mail2@mail.com', subject: 'this is subject', date :  new Date('December 17, 2019 03:24:00')},
    { id: 5, from: 'mail1@mailcom', to: 'mail2@mail.com', subject: 'this is subject', date :  new Date('January 17, 2020 03:24:00')},
    { id: 6, from: 'mail1@mailcom', to: 'mail2@mail.com', subject: 'this is subject', date :  new Date('December 17, 2019 03:24:00')},
    { id: 7, from: 'mail1@mailcom', to: 'mail2@mail.com', subject: 'this is subject', date :  new Date('December 18, 2019 03:24:00')},
    { id: 8, from: 'mail1@mailcom', to: 'mail2@mail.com', subject: 'this is subject', date :  new Date('December 17, 2019 03:24:00')},
    { id: 9, from: 'mail1@mailcom', to: 'mail2@mail.com', subject: 'this is subject', date :  new Date('December 17, 2019 03:24:00')},
    { id: 10, from: 'mail1@mailcom', to: 'mail2@mail.com', subject: 'this is subject', date :  new Date('December 18, 2019 03:24:00')},
    { id: 11, from: 'mail1@mailcom', to: 'mail2@mail.com', subject: 'this is subject', date :  new Date('December 17, 2019 03:24:00')},
    { id: 12, from: 'mail1@mailcom', to: 'mail2@mail.com', subject: 'this is subject', date :  new Date('December 17, 2019 03:24:00')},
    { id: 13, from: 'mail1@mailcom', to: 'mail2@mail.com', subject: 'this is subject', date :  new Date('December 18, 2019 03:24:00')},
    { id: 14, from: 'mail1@mailcom', to: 'mail2@mail.com', subject: 'this is subject', date :  new Date('December 17, 2019 03:24:00')},
    { id: 15, from: 'mail1@mailcom', to: 'mail2@mail.com', subject: 'this is subject', date :  new Date('December 18, 2019 00:24:00')}
  ]
  const [mails, setMail] = useState(mailData)
  const [startDate, setStart] = useState(today)
  const [endDate, setEnd] = useState(today)
  console.log(startDate)
  function filter(e){

    setDate(e)
    setStart(e[0])
    setEnd(e[1])

  }

  const items = mails.filter((mail)=>{
    if(mail.date >= startDate && mail.date <= endDate){
      return mail
    }else{
      return null
    }
  })


  return (
    <div>
      <p>Today is {today.toDateString()}</p>
      <DateRangePicker
        clearIcon={null}
        onChange={filter}
        value={date}
      />
      
      <MailTable mails={items} date={date}></MailTable>
    </div>
  );
}

export default App;
