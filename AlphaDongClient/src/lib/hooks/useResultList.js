import {useEffect, useState} from 'react';
import {getResultList} from '../api/api';

const useResultList = () => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const resolvedData = await getResultList();
      setData(resolvedData.data);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
    setRefreshing(false);
  }, [refreshing]);
  return [data, isError, IsLoading, setRefreshing, refreshing];
};

export default useResultList;
