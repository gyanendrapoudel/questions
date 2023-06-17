import { FaPlus, FaMinus } from 'react-icons/fa'

import { useState } from 'react'
const Question = ({ title, info }) => {
  const [showMore, setShowMore] = useState(false)

  return (
    
      <article className='question'>
        <header>
          <h4>{title}</h4>
          <button
            className="question-btn"
            onClick={() => {
              setShowMore(!showMore)
            }}
          >
            {showMore ?<FaMinus/>: <FaPlus /> }
          </button>
        </header>
        {showMore && <p>{info}</p>}
      </article>
   
  )
}
export default Question
