import React, {Component} from 'react';

class Listed extends Component {
	constructor (props) {
		super (props);
		this.state = {
			likes : 0
		};
	}
		likeProverb = () => {
			this.setState({
				likes : this.state.likes + 1 });
			}
		render (){
			return (
		
  <div>
    <div className="mb-3 text-center">
      <div>
       <p><q>{this.props.proverb.content}</q></p>
        <p>{this.props.proverb.meaning}</p>
         <footer>- <cite title="Source Title">{this.props.proverb.source}</cite></footer>
				 <button  
				  className= "btn"
				  onClick={this.likeProverb}> {this.state.likes} Like(s)
			   </button> 
         </div>
     </div>
   </div>
	)
 }
}
export default Listed;