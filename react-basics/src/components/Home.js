import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import Coin from "./Coin";
function Home() {
  // let [productList, setProductList] = useState([1, 2, 3, 4, 5, 6]);
  const [temp, setTemp] = useState(0);
  useEffect(()=>{
    console.log("mounting");
    
    return ()=>{
      console.log("unmounting");
    };
    /* this return keyword will work always when the component will unmount likw for eg
     changing the page etc
    */
  },[])
  /*
  if I don't pass any 2nd argument in the useEffect or pass an empty 
  array then it will work wheneever the page mount (change in any component) but if I pass anything inside
  the array then useEffect will only run whenever there is a change in that variable
  */
  useEffect(()=>{
    console.log("Working only when there is change in temp",temp);
  },[temp])
  const arr = [1, 2, 3, 4];
  return (
    <div>
      <button onClick={(e)=> setTemp(temp+1)}>Increase Temp</button>
      {arr.map((i) =>
        <Coin name={"Bitcoin"} symbol={"btc"} key={i} />
      )}
    </div>
  );
}
export default Home;

// productList.map((item)=>{
//   return(
//     <div>
//     <ProductList  value={item}/>
//     </div>
//   )
// })
