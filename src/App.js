import React,{ Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component{
  state = {
    userInput : '',
  }
  inputChangedHandler = (event) =>{
     this.setState({userInput:event.target.value})
  }
  deleteCharHandler=(chIndex)=>{
    const text = this.state.userInput.split('');
    text.splice(chIndex,1);
    const updatedText=text.join('');
    this.setState({userInput:updatedText})

  }
  render(){
    const charList = this.state.userInput.split('').map((ch,index)=>{
      return <Char list={ch} key={index} delete={()=>this.deleteCharHandler(index)}></Char>
    })
    return (
      <div className="App">
        <input type="text" 
        onChange={this.inputChangedHandler} value={this.state.userInput}></input>
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length}></Validation>
        {charList}
      </div>
    );
  }
}

export default App;