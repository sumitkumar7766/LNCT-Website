import React from "react";
import { Link } from "react-router-dom";

function Crad2() {
    const cards = [
        {
            img: "media/SlidU/SlidU1.jpeg",
            title: "Empowering Justice BA LLB Admissions at LNCT University",
            date: "April 12 2025"
        },
        {
            img: "media/SlidU/SlidU2.jpeg",
            title: "B.Tech Civil Engineering Sets the Stage for Innovation",
            date: "April 12 2025"
        },
        {
            img: "media/SlidU/SlidU7.jpeg",
            title: "Stop Applying to random Colleges until you Check Benefits of Choosing LNCTCET 2025							",
            date: "April 8 2024"
        },
        {
            img: "media/SlidU/SlidU3.jpeg",
            title: "olleges for M Pharmacy- A Complete Guide",
            date: "july 8 2024"
        },
        {
            img: "media/SlidU/SlidU5.jpeg",
            title: "Why Join B.Tech (CS) with Advanced Salesforce Certification at LNCT University							",
            date: "April 8 2025"
        },
        {
            img: "media/SlidU/SlidU6.jpeg",
            title: "LNCT University’s  B.Tech (EX) with Specialization of Electric Vehicles in collaboration with L&T EduTech							",
            date: "April 8 2025"
        }
    ];

    const [current, setCurrent] = React.useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % cards.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + cards.length) % cards.length);
    };

    React.useEffect(() => {
        const interval = setInterval(nextSlide, 2500);
        return () => clearInterval(interval);
    }, []);

    // Determine cards per view based on screen width
    const [cardsPerView, setCardsPerView] = React.useState(window.innerWidth < 500 ? 1 : 3);

    React.useEffect(() => {
        const handleResize = () => {
            setCardsPerView(window.innerWidth < 500 ? 1 : 3);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    // Calculate the visible cards for the current slide
    const getVisibleCards = () => {
        let visible = [];
        for (let i = 0; i < cardsPerView; i++) {
            visible.push(cards[(current + i) % cards.length]);
        }
        return visible;
    };

    // For fade transition
    const [fade, setFade] = React.useState(true);

    React.useEffect(() => {
        setFade(false);
        const timeout = setTimeout(() => setFade(true), 100); // quick fade out/in
        return () => clearTimeout(timeout);
    }, [current, cardsPerView]);

    return (
        <div className="container">
            <h1 className="text-center text-light mt-5 pb-1">Latest Articles & Blog Post</h1>
            <div className="col-12 col-md-6 w-100 h-100" style={{
                position: "relative",
                overflow: "hidden",
            }}>
                <div
                    style={{
                        display: "flex",
                        opacity: fade ? 1 : 0,
                        transition: "opacity 0.5s, transform 1s",
                    }}
                >
                    {getVisibleCards().map((card, idx) => (
                        <div
                            key={idx}
                            style={{
                                minWidth: `${100 / cardsPerView}%`,
                                boxSizing: "border-box",
                                padding: "0 10px"
                            }}
                        >
                            <div className="card h-100">
                                <img src={card.img} className="card-img-top w-100" alt={card.title} />
                                <div className="card-body">
                                    <p className="btn btn-dark">Blog</p>
                                    <h3 className="card-title">{card.title}</h3>
                                    <p className="card-text text-dark">
                                        <i className="fa-solid fa-calendar-days text-dark"></i> &nbsp; {card.date}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    onClick={prevSlide}
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "10px",
                        transform: "translateY(-50%)",
                        zIndex: 2,
                        background: "#222",
                        color: "#fff",
                        border: "none",
                        borderRadius: "50%",
                        width: "40px",
                        height: "40px"
                    }}
                >&lt;</button>
                <button
                    onClick={nextSlide}
                    style={{
                        position: "absolute",
                        top: "50%",
                        right: "10px",
                        transform: "translateY(-50%)",
                        zIndex: 2,
                        background: "#222",
                        color: "#fff",
                        border: "none",
                        borderRadius: "50%",
                        width: "40px",
                        height: "40px"
                    }}
                >&gt;</button>
            </div>
        </div>
    );
}

export default Crad2;