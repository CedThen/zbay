import React from 'react';

function Radio({ label, onClick, value, name }) {
  return (
    <div >
      <label>
        <input type="radio" value={value} name={name} />
        <span onClick={onClick} className='text-xl my-5'> {label}</span>
      </label>
    </div>
  )
}

export default Radio;
