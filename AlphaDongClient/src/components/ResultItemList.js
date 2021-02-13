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
      key: 3,
      img_url: 'content://media/external_primary/images/media/33722',
      vin_num: 'WDDLJ6FB3HA203319',
    },
    {
      key: 2,
      img_url:
        'file:///data/user/0/com.alphadongclient/cache/Camera/bfb77526-0124-4cc6-8301-01b660f4510c.jpg',
      vin_num: 'WDDLJ6FB3HA203319',
    },
    {
      key: 1,
      img_url: 'http://placekitten.com/600/400',
      vin_num: 'WDDLJ6FB3HA203319',
    },
  ]);

  useEffect(() => {
    axios.get('http://52.78.241.187:5001/').then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <Container
      data={data}
      keyExtractor={(item) => String(item.key)}
      renderItem={ResultItem}></Container>
  );
};
