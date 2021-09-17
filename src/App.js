import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { buyLaptop,sellLaptop } from './redux/ActionCreators/Actions';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { props.x }
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={ props.buyLaptopForMe }>Buy Laptop</button>
        <br />
        <button onClick={ props.sellLaptopForMe }>Sell Laptop</button>
      </header>
    </div>
  );
}

//1. mapStateToProps methods

//This function will connevert state to Props
let mapStateToProps = (state)=>{
    return {
        x:state.noOfLaptop
    }
}

/*
{

  p:v,
  functionName:function
}
*/
let mapDispatchToProps =(dispatch)=>{
  return {
    buyLaptopForMe:()=>{ dispatch(buyLaptop())},
    sellLaptopForMe:()=>{ dispatch(sellLaptop()) }
  }
}

//2. mapDispatchToProps

export default connect(mapStateToProps,mapDispatchToProps)(App);

//noOfLaptop -> x -> Props -> App

//Global Store state -> Current Component Props
