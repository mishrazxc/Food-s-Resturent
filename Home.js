import React from 'react';
import '../Styles/Home.css';

function Home(props) {
    function changePage() {
        props.setPage(1);
    }


    return (
        <div className='home'>
            <h4> Welcome to food's Restaurant</h4>
            <p>New user Registration</p>
            <button onClick={changePage}>Registration</button>
            <br></br>
            <br></br>
            <p>Already Registered Login</p>
            <a href="./components/Login.js" target="">
                <button onClick={changePage}>Login</button>
            </a>

        </div>

    )
}

export default Home;
