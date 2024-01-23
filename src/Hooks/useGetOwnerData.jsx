import { useQuery } from '@tanstack/react-query';
import usePublicAxios from './usePublicAxios';
import { useContext } from 'react';
import { CentralContext } from '../Contexts/CentralContextComp';

const useGetOwnerData = () => {
  const publicAxios = usePublicAxios();
  const {user,loader} = useContext(CentralContext);
  const {data : ownerData, refetch} = useQuery({
    queryKey : ['ownerData'],
    enabled : !loader,
    queryFn : async ()=>{
        const res = await publicAxios(`owner?email=${user.email}`);
        return res.data;
    }
  })
  return [ownerData,refetch]
}

export default useGetOwnerData