import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';
import axios from 'axios';
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

//   useEffect(() => {
//     axios.get('http://localhost:5001/data').then((res) => {
//         console.log("hello");    
//     setData(res);
    
//     });
//   }, []);

return (
    <View>
          {data.map((item) => (
            <Text key={item.key}>{item.vin_num} a</Text>
          ))}
      <Text>{data.img_url}</Text>
    </View>
  );
};
