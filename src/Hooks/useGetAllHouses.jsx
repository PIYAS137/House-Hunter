import { useQuery } from '@tanstack/react-query'
import usePublicAxios from './usePublicAxios'

const useGetAllHouses = () => {
    const publickAxios = usePublicAxios();
  
    const {data : allHouse = [], refetch} = useQuery({
        queryKey : ['temporary'],
        queryFn : async()=>{
            const res = await publickAxios.get("/item");
            return res.data;
        }
    })
    return [allHouse,refetch]
}

export default useGetAllHouses;