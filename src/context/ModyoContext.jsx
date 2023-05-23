import { createContext, useContext, useState } from 'react';

export const ModyoContext = createContext();

export const useModyoContext = () => {
    const context = useContext(ModyoContext);
    if(!context) {
        throw new Error("You are not in the Modyo's context");
    }
    return context;
}

export const ModyoContextProvider = ({children}) => {

    const [user, setUser] = useState([]);

    return (
        <ModyoContext.Provider value={{
            user,
            setUser
        }}>
            {children}
        </ModyoContext.Provider>
    )
}
