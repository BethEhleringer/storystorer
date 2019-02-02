import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";


class Search extends Component {

  state = {
    content: [],
    topic: "",
    location: "",
    narrative: "",
    date: ""
  };

  
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic && this.state.location && this.state.narrative) {
      API.saveContent({
        topic: this.state.topic,
        location: this.state.location,
        narrative: this.state.narrative
      })
        .then(res => this.loadContent())
        .catch(err => console.log(err));
    }
  };

  render() {

    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>The search form and search results will go on this page.</h1>
            </Jumbotron>
            this.newMethod()
          </Col>

        </Row>
      </Container>
    );
  };


  newMethod() {
    return <form>
      <Input value={this.state.topic} onChange={this.handleInputChange} name="topic" placeholder="Topic (required)" />
      <Input value={this.state.location} onChange={this.handleInputChange} name="location" placeholder="Location (required)" />
      <TextArea value={this.state.narrative} onChange={this.handleInputChange} name="narrative" placeholder="Narrative (required)" />
      <FormBtn disabled={!(this.state.topic && this.state.location && this.state.narrative)} onClick={this.handleFormSubmit}>
        Submit Content
      </FormBtn>
    </form>;
  }
};

export default Search;
