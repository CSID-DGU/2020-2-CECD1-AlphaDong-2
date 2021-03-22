import React, {useEffect, useState} from 'react';
import {RefreshControl} from 'react-native';
import styled from 'styled-components';
import {ResultItem} from './ResultItem';
import useResultList from '../lib/hooks/useResultList';
const Container = styled.FlatList`
  width: 100%;
  margin-bottom: 80px;
`;

export const ResultItemList = ({navigation}) => {
  const [data, isError, IsLoading, setRefreshing, refreshing] = useResultList();
  const onRefresh = () => {
    setRefreshing(true);
  };

  return (
    <Container
      data={data}
      keyExtractor={(item) => String(item._id)}
      renderItem={({item}) => (
        <ResultItem item={item} navigation={navigation} />
      )}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }></Container>
  );
};
