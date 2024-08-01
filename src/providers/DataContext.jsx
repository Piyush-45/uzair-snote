
// ! 1. import create context 
import { createContext, useCallback, useContext, useState } from "react";
// ! 2. creating context using the above, and initilize this to a variable 

export const DataContext = createContext() //isko humne export kra hai to use those value which we provided 

// !3. making our provider components using provider from createContext
const DataContextProvider =({children})=>{
  const [count,setCount] = useState("hello")
  
  const someFunction =()=>{
    console.log("hello i am from context")
  }

  const arrayEx= [1,2,3,4]
return (
  // !4 passing the values we need to access globally
  <DataContext.Provider value={{count, someFunction, arrayEx}}>
    {children}
  </DataContext.Provider>
)
} 


export default DataContextProvider // isko humne export kra hai to wrap the root component 

// ! step:5 wrap the root component 
{/* <DataContextProvider>
<App />
</DataContextProvider> */}

// !step:6 using the values we need in any component
//?=========== to use values, first import useContext() from react and pass the context variable you decalred in context file (voh variable jisma humne createContext ko initialize kra tha ) and the destruture the values 
// const{value....., ... ,... }  = useContext()