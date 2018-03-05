import React, { Component } from 'react';
import { connect } from 'react-redux';
import { likeProverb } from '../actions/proverbActions';

	class Listed extends Component {
	
		render (){
	    const {id, content, meaning, source, like} = this.props.proverb;
	return (
		 <div>
    	<div className="mb-3 text-center">
       <div key={id} >
       	<p><q>{content}</q></p>
        <p>{meaning}</p>
         <footer>- <cite title="Source Title">{source}</cite></footer>
				 <button  
				  className= "btn"
				  onClick={this.props.likeProverb}> {like} Like(s)
			   </button> 
         </div>
     </div>
   </div>
	)
 }
};

const mapStateToProps = (state) => {
  return { proverbs: state.proverbs}
}

export default connect(mapStateToProps, {likeProverb}, null)(Listed);