const initialState = 0

export const bankingReducer = (state = initialState, action) => {
    switch(action.type){
        case "DEPOSIT":
            return state + action.amount
        case "WITHDRAW":
            return state - action.amount
        case "COLLECT_INTEREST":
            return state*1.03
        case "DELETE_ACCOUNT":
            return 0
        default:
            return state
    }
    
    // return state; // returning the old state
}


// actions

//deposit

const deposit = { 
    type: "DEPOSIT",
    amount: 20
}

// withdraw

