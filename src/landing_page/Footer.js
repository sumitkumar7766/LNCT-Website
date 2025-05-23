import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="container-fluid">
            <footer className="bg-light text-center text-lg-start">
                <div className="text-center p-3">
                    © 2023 Copyright:
                    <Link className="text-dark" to="/">
                        LNCT
                    </Link>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
