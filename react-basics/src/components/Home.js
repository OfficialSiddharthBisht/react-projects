import React, { useState } from 'react'
import ProductList from './ProductList'
function Home() {
  let [productList,setProductList] = useState([1,2,3,4,5,6])
  return (
    <div>
      {
        productList.map((item)=>{
          return(
            <div>
            <ProductList  value={item}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default Home