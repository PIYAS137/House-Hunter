import { createContext, useEffect, useState } from "react"
import usePublicAxios from "../Hooks/usePublicAxios";
import { getUserInstanceFromLS, removeInstance } from "../Utils/StorageOperations";



export const CentralContext = createContext(null);


const CentralContextComp = ({ children }) => {

  const publicAxios = usePublicAxios();
  const [user, setUser] = useState({});
  const [loader, setLoader] = useState(true);


  // Create User
  const CreateUser = (data) => {
    setLoader(true);
    return publicAxios.post('/user', data)
  }

  // Logout User
  const LogOutUser = () => {
    setLoader(true);
    return removeInstance();
  }

  // login User
  const LoginUser=(data)=>{
    console.log("COntext",data);
    return publicAxios.put('/user',data)
  }

  // Hold user Instance
  useEffect(()=>{
    setLoader(true);
    // This call back function if used for hold the user instance for every effect !
    const unSubscribe =()=> getUserInstanceFromLS();
    if(unSubscribe){
      setLoader(false)
      setUser(unSubscribe);
    }else{
      setUser({})
    }
    return ()=>{
      return getUserInstanceFromLS()
    }
  },[])


  const contextInfo = {
    user,
    loader,
    CreateUser,
    LogOutUser,
    setUser,
    LoginUser
  }

  return (
    <CentralContext.Provider value={contextInfo}>
      {children}
    </CentralContext.Provider>
  )
}

export default CentralContextComp