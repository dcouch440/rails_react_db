import React, {useState} from "react";
const Context = React.createContext();

const ContextProvider = (props) => {
    const [testVal, setTestVal] = useState('hello World')

    return (
        <Context.Provider value={{
            testVal,
            setTestVal
        }}
        >
           {props.children}
        </Context.Provider>
    );
}

export {ContextProvider, Context};
