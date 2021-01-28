import React from 'react';
import './App.css';

function Helloworld2(props){
  return(
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.mytext}
      </div>
  )
}

class Helloworld extends React.Component{

  state = {
    show: true
  }

  toogleShow = () => {
    this.setState({show: !this.state.show});
  };

  render(){
    if(this.state.show){
    return(
      <div id="hello">
      <h3>{this.props.subtitle}</h3>
      {this.props.mytext}
      <button onClick={this.toogleShow}>Change State</button>
      </div>
    )
  }else{
    return <h1>No hay elementos
      <button onClick={this.toogleShow}>Change State</button>
    </h1>
  }
  }
}

const App = () => <div>This is my component: <Helloworld/></div>


class App2 extends React.Component{
  render  (){
    return (
      <div>This is my component: <Helloworld/></div>
    );
  }
}

function App3() {
  return (
    <div>This is my component:
      <Helloworld2 mytext="Hello Alejo" subtitle="Lorem Ipsum"/>
      <Helloworld2 mytext="Hola Mundo" subtitle="Component 2"/>
      <Helloworld2 mytext="Hello!" subtitle="Component 3"/></div>
  );
}

export default App;
