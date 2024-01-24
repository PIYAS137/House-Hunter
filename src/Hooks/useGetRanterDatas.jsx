import { useQuery } from '@tanstack/react-query';
import usePublicAxios from './usePublicAxios';
import { useContext } from 'react';
import { CentralContext } from '../Contexts/CentralContextComp';

const useGetRanterDatas = () => {
    const publicAxios = usePublicAxios();
    const { user, loader } = useContext(CentralContext);
    const { data: raterData, refetch } = useQuery({
        queryKey: ['ownerData'],
        enabled: !loader,
        queryFn: async () => {
            const res = await publicAxios(`ranter?email=${user.email}`);
            return res.data;
        }
    })
    return [raterData, refetch]
}

export default useGetRanterDatas