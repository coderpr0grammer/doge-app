import React, { createContext, useContext, useState, useEffect } from "react";
import firestore from "@react-native-firebase/firestore";


export const DatabaseContext = createContext();

export const DatabaseContextProvider = ({ children }) => {

    return (
        <DatabaseContext.Provider>
            {children}
        </DatabaseContext.Provider>
    )

}