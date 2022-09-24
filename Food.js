import React from 'react';
import '../Styles/Food.css';
import noodles from '../images/noodles.jpg';
import burger from '../images/burger.jpg';
import omlette from '../images/omlette.jpg';
import Roll from '../images/roll.jpg';

function Food(props) {
    function changePage() {
        props.setPage(6);
    }

    let items = [
        {
            Name: "Spaghetti",
            Url: noodles,
            Price: "200"
        },
        {
            Name: "Burger",
            Url: burger,
            Price: "120"
        },
        {
            Name: "Omlette",
            Url: omlette,
            Price: "150"
        },
        {
            Name: "Roll",
            Url: Roll,
            Price: "80"
        }
    ]
    function add(id) {
        let value = parseInt(document.getElementById(`${id}`).value)
        document.getElementById(`${id}`).value = value + 1;
    }
    function subtract(id) {
        let value = parseInt(document.getElementById(`${id}`).value)
        document.getElementById(`${id}`).value = value - 1;
    }

    return (
        <div>
            {items.map((item) => (
                <div className='card'>
                    <img src={item.Url} alt={item.Name} className="image"></img>
                    <br></br>
                    <label>{item.Name}</label>
                    <br></br>
                    <label>{item.Price}</label>
                    <br></br>
                    <button onClick={() => { subtract(item.Name) }}>-</button>
                    <input id={item.Name} defaultValue="0" className="itemrange" type="number" Min="0"></input>
                    <button onClick={() => { add(item.Name) }}>+</button>
                </div>
            ))};
            <div className='cardb' >
                <button onClick={changePage}>Checkout</button>
            </div>
        </div>
    )
}

export default Food;
