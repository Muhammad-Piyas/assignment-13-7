"use client";

import { createContext, useContext, useState } from "react";

const ProviderContext = createContext();

export const ContextProvider = ({ children }) => {
  const [clicks, setClicks] = useState([]);

  const interaction = (type, friendDetails) => {
    const now = new Date();

    const newData = {
      id: Date.now(),
      type,
      friendDetails,
      friendName: friendDetails.name,
      date: new Date().toDateString(),
      time: now.toLocaleTimeString(),
    };

    setClicks((prev) => [newData, ...prev]);
  };

  const value = {
    clicks,
    interaction,
  };

  return (
    <ProviderContext.Provider value={value}>
      {children}
    </ProviderContext.Provider>
  );
};

export const useHooks = () => {
  return useContext(ProviderContext);
};
