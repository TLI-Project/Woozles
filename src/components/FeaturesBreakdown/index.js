import React from 'react'
import { Link } from 'react-router-dom';

const FeaturesBreakdown = () => {
  return (
    <div className="FeaturesBreakdown">
      <h1> Feature breakdown listed here: </h1>
      <Link to='/breakdown'>
        <button>Show me the final breakdown!</button>
      </Link>
    </div>
  )
}

export default FeaturesBreakdown
