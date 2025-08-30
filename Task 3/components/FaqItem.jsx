import React, { useState } from 'react'

const FaqItem = ({question,answer}) => {
    const [isOpen, setisOpen] = useState(false)
  return (
    <div id='faqouter'>
      <div id='faqinner'>
        <h3>{question}</h3>
        <button onClick={()=>setisOpen(!isOpen)} >
            {isOpen ? "-" : "+"}
        </button>
      </div>           
      {isOpen && <p style={{marginTop:"8px"}}>{answer}</p>}
    </div>
  )
}

export default FaqItem

