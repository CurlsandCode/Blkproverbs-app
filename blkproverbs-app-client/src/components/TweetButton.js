import React from 'react';


export default function TweetButton({ proverb, source }) {
  const tweetLink = `https://twitter.com/intent/tweet?hashtags=blkproverbs&text=${encodeURIComponent(`"${proverb}" ${source}`)}`;

  return (
    <a
      className="btn btn-info social"
      href={tweetLink}
      title="Tweet this proverb!"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="icon">
        <i className="fa fa-twitter" />
      </span>
      <span> Tweet</span>
    </a>
  );
}