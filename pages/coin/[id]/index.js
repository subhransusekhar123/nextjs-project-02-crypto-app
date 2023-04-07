import React from 'react'

const index = ({coinsData}) => {
  return (
    <div>Hello , shankar</div>
  )
}

export default index;

export const getServerSideProps = async (context) =>{
  console.log(context.params.id);
  const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
  const coinsData = await res.json();
  return{
    props:{
      coinsData
    }
  }
}
