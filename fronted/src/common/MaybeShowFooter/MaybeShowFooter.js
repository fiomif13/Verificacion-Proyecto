import { useEffect, useState } from "react";
import React from "react";
import { useLocation } from "react-router-dom";

const MaybeShowFooter = ({ children }) => {
    const location = useLocation();
    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        console.log(location.pathname);
        if (
            location.pathname === "/inicio" || 
            location.pathname === "/detalle-producto" || 
            location.pathname === "/detalle-producto-usado" ||
            location.pathname === "/historial" ||
            location.pathname === "/carrito-compras" 
        ) {
            setShowFooter(true);
        } else {
            setShowFooter(false);
        }
    }, [location]);

    return (
        <div>
            {showFooter && children}
        </div>
    );
};

export default MaybeShowFooter;
