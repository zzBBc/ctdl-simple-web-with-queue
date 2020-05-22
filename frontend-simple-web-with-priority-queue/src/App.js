import React, {Component} from 'react';
import './App.css';
import AuthorApp from './component/AuthorApp';

class App extends Component{
  render() {
    return (
      <div className="container">
        <AuthorApp/>
      </div>
    )
  }
}

export default App;
