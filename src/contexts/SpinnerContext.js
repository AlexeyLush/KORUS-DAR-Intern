import React, {createContext, useState} from "react";

export const SpinnerContext = createContext(null);

export function SpinnerProvider({children}) {

    const [isSpin, setIsSpin] = useState(false);

    return (
        <SpinnerContext.Provider value={{ isSpin, setIsSpin}}>
            {children}
        </SpinnerContext.Provider>
    );
}