import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';
import styled from 'styled-components';
import axios from 'axios';
import {ResultItem} from './ResultItem';

const Container = styled.FlatList`
  width: 100%;
  margin-bottom: 80px;
`;

export const ResultItemList = () => {
  const [data, setData] = useState([
    {
      key: 4,
      img_url: 'http://placekitten.com/400/400',
      vin_num: 'WDDLJ6FB3HA203319',
    },
    {
      key: 3,
      img_url: 'http://placekitten.com/400/400',
      vin_num: 'WDDLJ6FB3HA203319',
    },
    {
      key: 2,
      img_url: 'http://placekitten.com/400/400',
      vin_num: 'WDDLJ6FB3HA203319',
    },
    {
      key: 1,
      img_url: 'http://placekitten.com/400/400',
      vin_num: 'WDDLJ6FB3HA203319',
    },
  ]);

  useEffect(() => {
    axios.get('http://50.17.185.42:5000/data').then((res) => {
      console.log(res.data);
      setData(res.data.data);
    });
  }, []);

  return (
      <Container
        data={data}
        keyExtractor={(item) => String(item.key)}
        renderItem={ResultItem}></Container>
  );
};
