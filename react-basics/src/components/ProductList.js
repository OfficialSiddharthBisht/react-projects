import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = ({value}) => {
    console.log(value)
  return (
    <Link>
        <Link to={`/product/:${value}`}>{value}</Link>
       {/* <h2> {value} </h2> */}
       <h3>This is {value} product</h3>
    </Link>
  )
}

export default ProductList