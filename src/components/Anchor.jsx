import React from 'react'

function Anchor({target, number, text}) {

  const anchor = (target) => {
    window.location.href = target;
  };

  return (
    <button onClick={()=>anchor(target)} className='px-4 py-2 text-xs font-mono '>
         <span className='text-orange-300'>{number}</span>
         <span>{text}</span>
    </button>
  )
}

export default Anchor