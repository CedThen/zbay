import React from 'react';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function ProductDisplay() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>

    </div>);
}

export default ProductDisplay;
