import React, { createContext, useState } from "react";

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleClose = () => setSidebarOpen(false);

  return (
    <SidebarContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
        handleClose,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
