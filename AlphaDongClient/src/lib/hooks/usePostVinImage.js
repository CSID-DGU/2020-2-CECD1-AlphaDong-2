import React, {useEffect, useState, useCallback} from 'react';
import {postVinImage} from '../api/api';

const usePostVinImage = () => {
  const [isError, setIsError] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);

  const callbackAPI = useCallback(async (formData) => {
    setIsError(false);
    setIsLoading(true);
    try {
      const resolvedData = await postVinImage(formData);
      setIsLoading(false);
      return resolvedData;
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      return new Promise.reject(new Error(error));
    }
  }, []);
  return [IsLoading, callbackAPI];
};

export default usePostVinImage;
