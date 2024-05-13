import { createContext, useEffect, useState } from "react";

export const adminContext = createContext({
    admin : [],
    updateAdmin: () => {}
});

export default function AdminContextProvider({children})
{
    const [adminData, setAdminData] = useState([]);
    async function getAdmin()
    {
        try{
            const res = await fetch("http://localhost:5000/api/admin");
            const result = await res.json();
            setAdminData(result.data);
        }
        catch(error)
        {
            console.log(error)
        }
    }
    useEffect(() => {
        getAdmin();
        return () => {};
      }, []);

    const adminContextValue = {
        admin: adminData,
        updateAdmin: setAdminData
    }

    return(
        <adminContext.Provider value={adminContextValue}>
            {children}
        </adminContext.Provider>
    )
}