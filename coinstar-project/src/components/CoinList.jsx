import React, { useContext, useEffect, useState } from 'react'
import coingecko from '../apis/coinGecko'
import { WatchListContext } from '../context/watchListContext'
import Coin from './Coin'

export const CoinList = () => {
    const [coins, setCoins] = useState([])
    const {watchList} = useContext(WatchListContext)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=> {
        const fetchData = async () => {
            setIsLoading(true)
            const response = await coingecko.get("/coins/markets", {
                params: {
                    vs_currency: "usd",
                    ids: watchList.join(",")
                }
            })
            setCoins(response.data)
            setIsLoading(false);
            // console.log(response.data);
        }

        fetchData()
    }, [])

    const renderCoins = () => {
        if(isLoading){
            return <div>Loading...</div>
        }
        return (
            <ul className="coinlist list-group mt-2">
                {coins.map(coin => {
                    return <Coin key={coin.id} coin={coin}/>
                })}
            </ul>
        )
    }

    return (
        <div>
            {renderCoins()}
        </div>
    )
}
