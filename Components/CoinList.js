import Coins from "./Coins"
import styles from "../styles/coins.module.css"


const CoinList = ({ coinsData }) => {
    return (
       <div>
            {coinsData.map(coin => <Coins coin={coin}/>)}
       </div>
    )
}

export default CoinList;