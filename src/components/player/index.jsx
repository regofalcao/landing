import React from "react";
import YouTube from "react-youtube";

export default class YoutubeVideo extends React.Component {
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 1,
      },
    };

    return (
      <div>
        <h3>VIDEO</h3>
        <YouTube videoId="5EuvLJPOuKo" opts={opts} onReady={this._onReady} />
        <div className="flex w-full items-center animate-bounce mt-4 justify-center">
          <button className="bg-orange-500 text-black mx-auto rounded-full px-2 py-1 text-xl font-bold">
            Clique Aqui
          </button>
        </div>
      </div>
    );
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}
