const redux = require('redux');
const createStore = require('redux').createStore;
//So we are going to use an example of laptop store

//So initially we have 10 Laptops. So when we buy new laptops it 
//will be increased by 2
//if we sell the laptop then it will be descreabed by 1


//let declare the global constacts
const BUY_LAPTOP='BUY_LAPTOP';
const SELL_LAPTOP='SELL_LAPTOP';

//1. Action
//Actions are js object which must have a type property

/**
 *  {
 *      type:''
 *  }
 * 
 */
//2. Action Creator
//Actions Creator are some function which return actions


//action creator 1
function buyLaptop(){
    return {
        type:BUY_LAPTOP
    }
}

//action creator 2
function sellLaptop(){
    return {
        type:SELL_LAPTOP
    }
}

//3. Reducer
//Reducer are some function which accept old/initial state and return new state

//convention is to use fat arrow

let initialState ={
    noOfLaptop:10
    /* P:V */
}

let rootReducer = (state = initialState,action)=>{
   switch( action.type  ){
        case BUY_LAPTOP:
            return {
                ...state,
                noOfLaptop:state.noOfLaptop + 1
            }
           break;
        case SELL_LAPTOP:
            return {
                ...state,
                noOfLaptop:state.noOfLaptop - 1
            }
            break;
        default:
            return state; // if you are returning state mean you are return old value
   }
}



//4. Store
//Lets create the store


//Create Store is a function
const myStore = createStore(rootReducer);


console.log(myStore);

//now get the latest value of store
console.log(myStore.getState());

myStore.dispatch(buyLaptop());
myStore.dispatch(buyLaptop());
myStore.dispatch(sellLaptop());
myStore.dispatch(sellLaptop());
myStore.dispatch(sellLaptop());

console.log(myStore.getState());
