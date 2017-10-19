import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';



// the onChange function in the <input> tag in the render method is a
//call back function which needs to be bound.  We accomplish this by binding
// the onChange event in our constructor using the "bind" method.

//the form element needs the onFormsubmit event handler to prevent the form
//from being submitted everytime a user hits "enter" or clicks the submit
//button.  We use the onformSubmit function to prevent this behavior by
//calling the preventDefault method.

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);


  }

  onInputChange(event) {

    this.setState({ term: event.target.value  });

  }

  onFormSubmit(event){
    event.preventDefault();

    //we need to go and fetch weather data

    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });

  }

  render() {

    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>

      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}
//by passing null as the first parameter we are simply stating we don't
//care about state in this container
export default connect(null, mapDispatchToProps)(SearchBar);
