import React from 'react'
import { useParams} from "react-router-dom";

const Product = () => {
    const params = useParams();
  return (
    <div>#Product {params.id}</div>
  )
}

export default Product