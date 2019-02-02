import React, { Component } from "react";
import { Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";

class AddContent extends Component {

  state = {
    content: [],
    topic: "",
    location: "",
    narrative: "",
 
  };

  componentDidMount() {
    this.loadContent();
  }

  loadContent = () => {
    API.getContent()
    .then(res =>
      this.setState({ content: res.data, topic: "", location: "", narrative: ""})
      )
      .catch(err => console.log(err));
  };

  deleteContent = id => {
    API.deleteContent(id)
    .then(res => this.loadContent())
    .catch(err => console.log(err));
  };
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
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

render () {

    return (
      <Container fluid>
        <Row>
          
            <Jumbotron>
              <h1>The form for uploading content will go on this page.</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.topic}
                onChange={this.handleInputChange}
                name="topic"
                placeholder="Topic (required)"
              />
              <Input
                value={this.state.location}
                onChange={this.handleInputChange}
                name="location"
                placeholder="Location (required)"
              />
              <TextArea
                value={this.state.narrative}
                onChange={this.handleInputChange}
                name="narrative"
                placeholder="Narrative (required)"
              />
              <FormBtn
                disabled={!(this.state.topic && this.state.location && this.state.narrative)}
                onClick={this.handleFormSubmit}
              >
                Submit Content
              </FormBtn>
            </form>
          

        </Row>
        <Row>
          
          {this.state.content.length ? (
              <List>
                {this.state.content.map(content => (
                  <ListItem key={content._id}>
                    <Link to={"/content/" + content._id}>
                      <strong>
                        {content.topic}
                        {content.location}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteContent(content._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          
        </Row>
      </Container>
    );
  };

};

export default AddContent;
