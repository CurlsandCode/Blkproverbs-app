import React, { Component } from 'react';
import axios from 'axios';
import  {ProverbText}  from '../components/ProverbText';
import  {ProverbButton}  from '../components/ProverbButton';
import  TweetButton  from '../components/TweetButton';



 class Proverb extends Component {
  constructor(props) {
    super(props);

    this.state = {
      proverb: '',
      meaning: '',
			source: '',
     
    };
  }

  componentDidMount() {
    this.getProverb();
  }


  getProverb = () => {
    axios
      .get('api/proverbs/random')
      .then(response => {
        this.setState({
          proverb: response.data.content,
          meaning: response.data.meaning,
					source: response.data.source
        });

      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { proverb, meaning, source} = this.state;

    return (
      <div className="container">
        <div className="wrapper">
          <ProverbText
            proverb={proverb}
            meaning={meaning}
			      source={source}
          />
          <ProverbButton onClick={this.getProverb} />
          <TweetButton 
			      proverb={proverb}
			      source={source}
			    />
        </div>
      </div>
    );
  }
}
export default Proverb;