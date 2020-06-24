import React  from "react";

function About() {
    return (
      <div>
        <h1>About this App...</h1>
        <p>This React App was built using a FinnHub API: <br />
        It allows us to get real-time trades for US stocks via IEX 
        (though this App focuses on the Dow Jones Index) <br />
        There is a 30 API calls/second limit, so you might need to be patient if the limit is reached.<br />
        In other words, this is not the most efficient source of information for live-trade, but we tried.</p>
      </div>
    );
}

export default About;