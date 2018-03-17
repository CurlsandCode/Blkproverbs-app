import React, { Component } from 'react';

	class Listed extends Component {
	
		render (){
			const { id, meaning, content, source, like } = this.props.proverb;
		//console.log('this is the proverb', proverb)
	return (
		 <div>
    	<div className="mb-3 text-center">
       <div>
       	<p><q>{content}</q></p>
        <p>{meaning}</p>
         <footer>- <cite title="Source Title">{source}</cite></footer>
				 <button  
				  className= "btn"
				  onClick={() => this.props.likeProverb(this.props.proverb)}> {like} Like(s)
			   </button> 
         </div>
     </div>
   </div>
	)
 }
};



export default Listed;