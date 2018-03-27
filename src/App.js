import React, { Component } from 'react';
import './App.css';
import MarkDownPreview from './MarkDownPreview';
import MarkDownTextInput from './MarkDownTextInput';
import marked from 'marked';


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      markedDownInputDefaultValue:'# H1 \n## H2\n### H3\n**bold**\n\n*italic*\n\n~~striketrough~~\n\n`monospace`',
      markedDownText:''
    }

    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      markedDownInputDefaultValue:event.target.value,
      markedDownText:marked(event.target.value)
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-Header">
          <h1 className="App-title">Mark Down Previewer.</h1>
        </header>
        <div className="App-description">
          <p>
            Enter your mark down in the left box and preview it in the right box...
          </p>
        </div>
        <div className="container">
          <MarkDownTextInput defaultValue={this.state.markedDownInputDefaultValue} handleChange={this.handleChange}/>
          <MarkDownPreview defaultValue={marked(this.state.markedDownInputDefaultValue)} markedDownText={this.state.markedDownText}/>
        </div>
        <div>
          <p className="copyright">
            Designed and coded by <a className="copyright-link" rel="noopener noreferrer" href="https://www.codepen.io/BlessedCamper" target="_blank">Gilbert</a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
