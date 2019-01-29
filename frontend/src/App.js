import React, { Component } from 'react';
import { Wrapper, Input, RestButton, Label, RowContainer } from './StyledComponents'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: '',
      response: null
    };
  }

  restRequest = (event) => {
    const restMethod = event.target.id;
    axios.get(`http://127.0.0.1:5000/${this.state.endpoint}`, {method: restMethod})
      .then(response => console.warn(response))
  }

  changeEndpoint = (event) => {
    this.setState({endpoint: event.target.value})
  }

  render() {
    console.warn(this.state.endpoint)
    return (
      <Wrapper>
        <RowContainer>
          <Label>Current endpoint: </Label>
          <Input onChange={this.changeEndpoint}/>
        </RowContainer>
        <RowContainer>
          <Label>Trigger rest method call:</Label>
          <RestButton onClick={this.restRequest} id="GET">GET</RestButton>
          <RestButton onClick={this.restRequest} id="POST">POST</RestButton>
        </RowContainer>
      </Wrapper>
    );
  }
}

export default App;
