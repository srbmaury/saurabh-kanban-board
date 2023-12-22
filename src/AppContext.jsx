import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [grouping, setGrouping] = useState("status");
    const [ordering, setOrdering] = useState("title");
    const [darkMode, setDarkMode] = useState(false);

    const value = {
        grouping, 
        setGrouping,
        ordering, 
        setOrdering,
        darkMode, 
        setDarkMode
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
    return useContext(AppContext);
};