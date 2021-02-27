import React, {useEffect, useState} from 'react';
import {RefreshControl, StyleSheet, FlatList, Text, View} from 'react-native';
import styled from 'styled-components';
import axios from 'axios';
import {ResultItem} from './ResultItem';

const Container = styled.FlatList`
  width: 100%;
  margin-bottom: 80px;
`;

export const ResultItemList = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://52.78.241.187:5001/data').then((res) => {
      console.log(res.data);
      setData(res.data);
    });
    setRefreshing(false);
  }, [refreshing]);

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
