import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Gallery from './Gallery';

class Global extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      items: []
    };
  }

  search() {
    const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
    fetch(`${BASE_URL}${this.state.query}`, {method: 'GET'})
      .then(response => response.json())
      .then(json => {
        let { items } = json;
        this.setState({items});
      });
  }

  render() {
    return <div className="Global">
      <section className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="h2">Book Explorer</h1>
            <FormGroup>
              <InputGroup>
                <FormControl
                  type="search"
                  placeholder="Search for a book"
                  onChange={event => this.setState({query: event.target.value})}
                  onKeyPress={event => {
                    if (event.which === 13) {
                      this.search();
                    }
                  }}/>
                <InputGroup.Addon onClick={()=>this.search()}>
                  <Glyphicon glyph="search" />
                </InputGroup.Addon>
              </InputGroup>
            </FormGroup>
          </div>
          <div className="col-sm-12">
            <Gallery items={this.state.items} />
          </div>
        </div>
      </section>
    </div>
  }
}

export default Global;
