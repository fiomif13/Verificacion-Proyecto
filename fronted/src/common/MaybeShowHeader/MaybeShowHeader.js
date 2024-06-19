import { useEffect, useState } from "react";
import React from "react";
import { useLocation } from "react-router-dom";

const MaybeShowHeader = ({ children }) => {
    const location = useLocation();
    const [showHeader, setShowHeader] = useState(false);

    useEffect(() => {
        console.log(location.pathname);
        if (
            location.pathname === "/iniciar-sesion" || 
            location.pathname === "/registrarse" || 
            location.pathname === "/" ||
            location.pathname === "/configuraciones"
        ) {
            setShowHeader(false);
        } else {
            setShowHeader(true);
        }
    }, [location]);

    return (
        <div>
            {showHeader && children}
        </div>
    );
};

export default MaybeShowHeader;
