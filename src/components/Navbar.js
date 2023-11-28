import React from 'react'
import { Route, Routes, Switch, Link } from 'react-router-dom';
import Quotes from './Quotes';
import RestCard from './RestCard';

export default function Navbar() {
    return (
        <div>
            <div className="container flex justify-around items-center">
                <div className="flex justify-center items-center">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT44nWiETCowcsEoKK-zgR6e9qjYt-5a1NPxw&usqp=CAU"
                        alt="logo"
                        className=" h-14"
                    />
                    <h3 className="text-xl font-bold ml-3">Geek Food</h3>
                </div>
                <div className='flex flex-row justify-between'>
                    <Link to="/">Home </Link>
                    <Link to="/Quotes">Quotes </Link>
                    <Link to="/RestList">Restaurant </Link>
                    <Link to="/">Contact </Link>
                </div>

                <div>
                    <button className="border-2 bg-green-600 py-2 rounded-xl px-3">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}
