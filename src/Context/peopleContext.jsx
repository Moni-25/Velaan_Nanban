import { createContext, useEffect, useState } from "react";

export const peopleContext = createContext({
    people : [],
    updatePeople: () => {}
});

export default function PeopleContextProvider({children})
{
    const [peopleData, setPeopleData] = useState([]);
    async function getPeople()
    {
        try{
            const res = await fetch("http://localhost:5000/api/people");
            const result = await res.json();
            setPeopleData(result.data);
        }
        catch(error)
        {
            console.log(error)
        }
    }
    useEffect(() => {
        getPeople();
        return () => {};
      }, []);

    const peopleContextValue = {
        people: peopleData,
        updatePeople: setPeopleData
    }

    return(
        <peopleContext.Provider value={peopleContextValue}>
            {children}
        </peopleContext.Provider>
    )
}