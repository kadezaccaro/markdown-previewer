import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // Adds support for strikethrough, tables, tasklists and URLs directly

const DEFAULTSTATE = `# This is an H1\   
## This is an H2\n
*This text will be italic*\  
**This text will be bold**\n
* Item 1\  
* Item 2\  
  * Item 2a\  
  * Item 2b\n
1. One\  
2. Two\  
3. Three\n
> Quote someone with blockquotes\n
\`react-markdown\` follows [CommonMark](https://commonmark.org)\n
\`\`\`
code block
print '3 backticks or'
print 'indent 4 spaces'
\`\`\`\n
![Image](https://images.unsplash.com/photo-1630741845497-d7878b44186b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)`;

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: DEFAULTSTATE,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const markdown = this.state.value;
    return (
      <div className="flex-container">
        <div className="flex-item-input">
          <header>Editor</header>
          <p style={{ marginBottom: 30, textTransform: "uppercase" }}>
            <strong>// Write Markdown here:</strong>
          </p>
          <textarea
            id="editor"
            value={this.state.value}
            onChange={this.handleChange}
          ></textarea>
        </div>

        <div className="flex-item-output">
          <header>Previewer</header>
          <p style={{ marginBottom: 30, textTransform: "uppercase" }}>
            <strong>// Preview Markdown here:</strong>
          </p>
          <div id="preview">
            <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
          </div>
        </div>
      </div>
    );
  }
}

export default MarkdownPreviewer;
