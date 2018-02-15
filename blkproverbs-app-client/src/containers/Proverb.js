import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getProverb} from '../actions/proverbActions';
import {ProverbText} from '../components/ProverbText';
import {ProverbButton} from '../components/ProverbButton';
import TweetButton from '../components/TweetButton';

class Proverb extends Component {

	componentDidMount() {
		this.props.getProverb();
	}

	render() {

		const {proverb, meaning,source} = this.props;
		if (!proverb && !meaning && !source) {
			return <span className="icon"> <h2>LOADING </h2> <i class="fas fa-sync fa-spin" /> </span>
		}
		return ( 
			<div className = "container" >
			<div className = "wrapper" >
			  <ProverbText 
			   proverb = {proverb}
			   meaning = {meaning}
			   source = {source}
			   /> 
		   <ProverbButton onClick = {this.props.getProverb} /> 
			 <TweetButton 
			   proverb = {proverb}
			   source = {source}
			  />
		   </div> 
			</div>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		proverb: state.proverb,
		meaning: state.meaning,
		source: state.source
	};
};


export default connect(mapStateToProps, {
	getProverb
})(Proverb);
