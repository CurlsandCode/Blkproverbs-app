import React, { Component } from 'react';
import {addProverb} from '../actions/proverbActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ProverbForm extends Component {
    constructor(){
     super()
    this.state = {
        content: '',
        meaning: '',
			  source: ''
      }
    }


handleOnContentChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  handleOnMeaningChange(event) {
    this.setState({
      meaning: event.target.value
    });
  }
	handleOnSourceChange(event) {
    this.setState({
      source: event.target.value
    });
  }
	

  handleOnSubmit(event) {
    event.preventDefault();
    if(this.state.content!== '' || this.state.meaning!== '' || this.state.source!== ''){

    this.props.addProverb(this.state);
    this.setState({
      content: '',
      meaning: '',
			source: ''
    })
     this.props.history.push('/proverbs')
   }

  }

  render() {
    return(
  <div className="proverbform">
     <h2> Add a Proverb! </h2>
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <textarea
            type="text"
            onChange={(event) => this.handleOnContentChange(event)}
            placeholder="Proverb" value={this.state.content}/>
        </p>
        <p>
          <textarea
            type="text"
            onChange={(event) => this.handleOnMeaningChange(event)}
            value={this.state.meaning}
            placeholder="Meaning" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnSourceChange(event)}
            value={this.state.source}
            placeholder="Source" />
        </p>
        <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
return bindActionCreators({
  addProverb: addProverb
}, dispatch);
};

export default connect(null, mapDispatchToProps)(ProverbForm)