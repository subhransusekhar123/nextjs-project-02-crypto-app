import Link from "next/link"
import styles from "../styles/coins.module.css"
const Coins = ({ coin }) => {
    return (
        <Link href={`/coin/${coin.id}`}>
            <div className={styles.coin_container}>
                <div className={styles.coin_row}>
                    <div className={styles.coin}>
                        <img src={coin.image} className={styles.coin_img} />
                        <h1 className={styles.coin_h1}>{coin.name}</h1>
                        <p className={styles.coin_symbol}>{coin.symbol}</p>
                    </div>

                    <div className={styles.coin_data}>
                        <p className={styles.coin_price}>${coin.current_price}</p>
                        <p className={styles.coin_marketcap}>${coin.market_cap}</p>
                        <p style={{ color: coin.price_change_percentage_24h > 0 ? "green" : "red" }}>{coin.price_change_percentage_24h}</p>
                        <p className={styles.coin_marketcap}>will fill</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Coins