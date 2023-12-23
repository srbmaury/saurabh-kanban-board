import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Board from "./Components/Body/Board";
import { useAppContext } from "./AppContext";
import React, { useEffect } from 'react';
import DropDown from "./Components/Navbar/DropDown";

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
            <Board />
        </div>
    );
}
