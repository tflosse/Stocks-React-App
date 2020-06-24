import React  from "react";
import {Link} from "react-router-dom";

function Home() {
    return (
      <div>
        <h1>This is the homepage!</h1>
        <p>There's nothing here for now, but you can try clicking your way around the <Link to="/dashboard">Dashboard</Link>.</p>
      </div>
    );
}

export default Home;