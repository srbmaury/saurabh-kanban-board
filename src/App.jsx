import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import { useAppContext } from "./AppContext";
import React, { useEffect } from 'react';

export default function App() {
    const { setDarkMode } = useAppContext();

    useEffect(() => {
        const storedValue = localStorage.getItem('dark');
        if (storedValue !== null) {
            setDarkMode(storedValue === 'true');
        }
    }, []);

    return (
        <div>
            <Navbar />
        </div>
    );
}
