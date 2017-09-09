
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

state = {
  message: 'Hello Jakub'
};



  render() {
    return (
      <main>

      <p>the message is {this.state.message} </p>


        <Header message1={this.state.message}/>

        <Footer />
      </main>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <h1>{this.props.message1} </h1>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">This is the footer...</div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


///////////////////
// import React from 'react';
// import ReactDOM from 'react-dom';
//
// class App extends React.Component {
//
// state = {
//   message: 'Hello Jakub',
//   messageFooter: 'message Footer',
//   messageHeader: 'Message Header'
// };
//
//
// //render is where we inject components in a structure we desire.
//   render() {
//     return (
//       <main>
//
//       <p>the message is {this.state.message} </p>
//         <Header messageHeader={this.state.message} />
//         <Footer messageFooter={this.state.messageFooter}/>
//       </main>
//     );
//   }
// }
//
// class Header extends React.Component {
//   render() {
//     return (
//             //  props reffers to the state and is  is data that is sent into the component from a parent component.
//             //we can inject state into any react componient
//       <h1>{this.props.messageHeader} </h1>
//     )
//   }
// }
//
// class Footer extends React.Component {
//   render() {
//     return (
//       <div className="footer">This is the footer... {this.props.messageFooter}</div>
//     );
//   }
// }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
