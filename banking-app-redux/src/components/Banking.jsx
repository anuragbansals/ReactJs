import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Banking = () => {
    const [amount, setAmount] = useState("")
    const dispatch = useDispatch()

    const handleDeposit = () => {
        dispatch({type: "DEPOSIT", amount: parseInt(amount)})
    }
    const handleWithdraw = () => {
        dispatch({type: "WITHDRAW", amount: parseInt(amount)})
    }
    const handleCollectInterest = () => {
        dispatch({
            type: "COLLECT_INTEREST",
        })
    }
    const handleDelete = () => {
        dispatch({
            type: "DELETE_ACCOUNT",
        })
    }
    const handleAccountChange = () => {}

    return (
        <div className="form=group">
            <input value={amount} onChange={(e)=> setAmount(e.target.value)}  type="text" className="form-control"/>
            <button onClick={handleDeposit} className="btn btn-success">Deposit</button>
            <button onClick={handleWithdraw} className="btn btn-primary">Withdraw</button>
            <button onClick={handleCollectInterest} className="btn btn-warning">Collect Interest</button>
            <button onClick={handleDelete} className="btn btn-danger">Delete Account</button>
            <button onClick={handleAccountChange} className="btn btn-secondary">Change Account Type</button>
        </div>
    )
}

export default Banking;


const withdraw = {
    type: "WITHDRAW",
    amount: 30   
}

// collect interest

const collectInterest = {
    type: "COLLECT_INTEREST",
}

// delete account

const deleteAccount = {
    type: "DELETE_ACCOUNT",
    
}
