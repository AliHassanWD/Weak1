import React from 'react'

const Servicecard = ({title, description}) => {
  return (
    <div id='card'>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default Servicecard
