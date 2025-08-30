import React from 'react'
import FaqItem from './FaqItem'

const FaqList = () => {
  return (
    
    <div id="box">
         <h2>Frequently Asked Questions</h2>
     <FaqItem
        question="What is React?"
        answer="React is a JavaScript library for building user interfaces."
      />
      <FaqItem
        question="What is useState?"
        answer="useState is a React hook that lets you add state to a functional component."
      />
      <FaqItem
        question="Can I learn React easily?"
        answer="Yes! With consistent practice, React becomes easier to understand."
      />
    </div>
  )
}

export default FaqList

