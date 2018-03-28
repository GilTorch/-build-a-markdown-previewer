import React  from 'react';
import './App.css';
import MarkDownPreview from './MarkDownPreview';
import MarkDownTextInput from './MarkDownTextInput';
import marked from 'marked';

const renderer = new marked.Renderer();
renderer.codespan=function(code){
  return `<pre>
  <code>${code}</code>
</pre>`
}

renderer.link = function (href,title,text) {

  return `
            <a  class="anchor" href="${href}" target="_blank">
              ${text}
            </a>
          `;
};

class App extends React.Component {
 

  constructor(props){
    super(props);
    this.state={
      markedDownInputDefaultValue:'# H1\n## H2\n### H3\n[Gilbert Torchon](https://www.codepen.io/BlessedCamper)\n`inline code`\n```\nmutiline\ncode\n```\n* apple\n* orange\n* pineapple\n\n> Albert Einstein said\n\n![Freecodecamp Logo](https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png)\n\n**bold**\n\n*italic*\n\n~~striketrough~~\n\n`monospace`',
      markedDownText:''
    }

    this.handleChange=this.handleChange.bind(this);
  }

 
  handleChange(event){
    this.setState({
      markedDownInputDefaultValue:event.target.value,
      markedDownText:marked(event.target.value,{renderer:renderer})
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
          <MarkDownPreview defaultValue={marked(this.state.markedDownInputDefaultValue,{renderer:renderer})} markedDownText={this.state.markedDownText}/>
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
