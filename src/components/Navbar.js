import React from 'react'

export default function Navbar() {
    return (
        <div>
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

                    <ul className="flex nav">
                        <li className="mr-10  hover:bg-green-900">Home</li>
                        <li className="mr-10  hover:bg-green-900">Quotes</li>
                        <li className="mr-10  hover:bg-green-900">Restaurants</li>
                        <li className="mr-10  hover:bg-green-900">Food</li>
                        <li className="mr-10  hover:bg-green-900">Contact</li>
                    </ul>

                    <div>
                        <button className="border-2 bg-green-600 py-2 rounded-xl px-3">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
