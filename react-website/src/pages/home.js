import React from "react";
import FetchData from "../FetchData";

const Home = () => {
    return (
        <body>
            <div className='App'>
                <h1>Latest Average:</h1>
                <p> <FetchData/> </p>
            </div>
        </body>
    );
};

export default Home;