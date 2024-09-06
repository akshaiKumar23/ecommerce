import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("jsonwebtoken");

        if (!token) {
            navigate("/login");
            setIsAuthenticated(false);
        } else {

            setIsAuthenticated(true);
        }
    }, [navigate]);

    if (isAuthenticated === null) {

        return <div>Loading...</div>;
    }

    return isAuthenticated ? children : null;
};

export default ProtectedRoute;
