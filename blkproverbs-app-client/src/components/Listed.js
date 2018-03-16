import React, { Component } from 'react';

	class Listed extends Component {
	
		render (){
			const proverb = this.props.proverb;
	    const {id, content, meaning, source, like} = proverb;
		
	return (
		 <div>
    	<div className="mb-3 text-center">
       <div key={id} >
       	<p><q>{content}</q></p>
        <p>{meaning}</p>
         <footer>- <cite title="Source Title">{source}</cite></footer>
				 <button  
				  className= "btn"
				  onClick={(proverb) => this.props.likeProverb(proverb)}> {like} Like(s)
			   </button> 
         </div>
     </div>
   </div>
	)
 }
};



export default Listed;