import React, { useState, useEffect, Fragment } from 'react'

const MailTable = (props) => {
    const init = props.mails
    const [descent, setDirection] = useState(false)
    const [newitems, setSorted] = useState('')
    
    useEffect(() => {
        setSorted(props.mails.slice().sort((a, b) => a.date - b.date));
    }, [props])

    function change(){
        if(descent == true){
            setSorted(props.mails.slice().sort((a, b) => a.date - b.date))
            setDirection(false)
        }else{
            setSorted(props.mails.slice().sort((a, b) => b.date - a.date))
            setDirection(true)
        }
        
    }

  return(
      <Fragment>
          <div>Result: {newitems.length}</div>
  <table>
    <thead>
      <tr>
          <th>No.</th>
        <th>From</th>
        <th>To</th>
        <th>Subject</th>
        <th>Date<button onClick={change}>V</button></th>
      </tr>
    </thead>
    <tbody>
      {newitems.length > 0 ? (
        newitems.map((mail, i) => (
          <tr key={mail.id}>
              <td>{i+1}</td>
            <td>{mail.from}
            </td>
            <td>{mail.to}
            </td>
            <td>{mail.subject}
            </td>
            <td>{mail.date.toDateString()}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Result</td>
        </tr>
      )}
    </tbody>
  </table>
  </Fragment>
)}

export default MailTable