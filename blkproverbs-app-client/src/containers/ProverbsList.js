import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllProverbs } from "../actions/proverbActions";
import Listed from '../components/Listed';

class ProverbsList extends Component {
  componentDidMount() {
		this.props.getAllProverbs();
  }
	
	

  render() {
    const {proverbs} = this.props;
    return (
      <div>
        <div className="row justify-content-center">
          <h2>Proverbs</h2>
        </div>
       <hr />
        <div className="container">
          <div className="row">
            <div>
							{proverbs.map(proverb => 
			         <Listed key={proverb.id} proverb={proverb}/> 
			           )}
			       </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    proverbs: state.proverbs,
 
  };
};

export default connect(mapStateToProps, {
  getAllProverbs
})(ProverbsList);