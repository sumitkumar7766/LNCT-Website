import React from "react";
import { Link } from "react-router-dom";

function Auditorium() {
    const hostels = [
        { name: 'Kalakunj Girls Hostel', link: '#' },
        { name: 'Mahismati Hostel', link: '#' },
        { name: 'New Boys’ Hostel', link: '#' },
        { name: 'Ratanpur Boys’ Hostel', link: '#' },
        { name: 'Tripuri Hostel', link: '#' },
        { name: 'Shrikunj Hostel', link: '#' },
    ];
    return (
        <div className="container pt-5">
            <div className="row">
                <h1 className="'text-center text-light">Auditorium</h1>
                <div className="col text-light">
                    <h4 className="pt-2">State-of-the-Art Auditoriums</h4>
                    <p className="pt-2">Welcome to our premier auditorium, a dynamic space designed for collaboration among students, faculty, and corporate leaders. With a seating capacity of 1,800, this centrally air-conditioned venue stands as the crown jewel of our campus.</p>
                    <h2 className="pt-2">Features:</h2>
                    <ul>
                        <li className="pt-2"><b>Modern Facilities:</b> Equipped with cutting-edge multimedia projectors and state-of-the-art sound systems, our auditorium is perfect for a wide range of events, from lectures to large-scale presentations.</li>
                        <li className="pt-2"><b>Spacious Design:</b> Enjoy large lobbies and verandahs, ideal for networking and hosting international conferences and exhibitions.
                        </li>
                    </ul>
                    <h4 className="pt-2">Seminar Halls</h4>
                    <p className="pt-2">For more intimate gatherings, our seminar halls offer the perfect setting. These spaces are outfitted with advanced presentation tools, making them ideal for smaller scale events, workshops, and discussions.</p>
                    <h4 className="pt-2">Versatile Event Spaces</h4>
                    <p className="pt-2">Whether you’re organizing a major conference or a focused seminar, our facilities provide the ideal backdrop for engaging dialogue and meaningful interactions. The blend of comfort and technology ensures an exceptional experience for all attendees.

                    </p>
                    <p className="pt-2">Explore our venues and discover the perfect space for your next event! Let us help you create unforgettable moments and foster collaboration in a vibrant environment.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img src="media/images/AUDITORIUM1.jpeg" className="w-100" />
                        </div>
                        <div className="col-12 col-md-6">
                            <img src="media/images/AUDITORIUM2.jpeg" className="w-100" />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img src="media/images/AUDITORIUM3.jpg" className="w-100" />
                        </div>
                        <div className="col-12 col-md-6">
                            <img src="media/images/AUDITORIUM4.jpeg" className="w-100" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5 bg-transparent text-light">
                <h1 className="text-center pt-5 fw-bolder text-light">Hostel Allotment | LNCT Group of Colleges</h1>
                <div className="row">
                    <div className="col-12 col-md-4"></div>
                    <div className="col-12 col-md-4">
                        <table className="table table-bordered text-center bg-transparent text-light w-100">
                            <thead>
                                <tr>
                                    <th className="font-weight-bold bg-transparent text-light">Hostel Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {hostels.map((hostel, index) => (
                                    <tr key={index}>
                                        <td className="font-weight-bold text-left bg-transparent text-light">{hostel.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-12 col-md-4"></div>
                </div>
            </div>
        </div>
    )
}

export default Auditorium;