import { useQuery } from '@tanstack/react-query'
import usePublicAxios from './usePublicAxios'
import { useContext } from 'react';
import { CentralContext } from '../Contexts/CentralContextComp';


const useGetOwnersReqRentData = () => {
    const publickAxios = usePublicAxios();
    const {user} = useContext(CentralContext);
  
    const {data : allReqs = [], refetch} = useQuery({
        queryKey : ['rentreqs'],
        queryFn : async()=>{
            const res = await publickAxios.get(`/request?email=${user?.email}`);
            return res.data;
        }
    })
    return [allReqs,refetch]
}

export default useGetOwnersReqRentData

