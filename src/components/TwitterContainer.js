// TwitterContainer.js
import React, { useEffect } from "react";

const TwitterContainer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <section>
      <h1 style={{ paddingBottom: 15 }}>
              Latest Tweets by Dhruval Sharma
              </h1>
        <div className="twitter-embed">
        <a
          className="twitter-timeline"
          data-theme="dark"
          data-tweet-limit="3"
          data-aria-polite="assertive"
          data-chrome="noheader nofooter noborders"
          href="https://twitter.com/dhruvalsharma59"
        >
        </a>
      </div>
    
    </section>
  );
};

export default TwitterContainer;
