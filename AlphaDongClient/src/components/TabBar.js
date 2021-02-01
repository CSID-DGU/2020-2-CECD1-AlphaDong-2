import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const TabBar = ({state, descriptors, navigation}) => {
  const totalWidth = Dimensions.get('window').width;
  const tabWidth = totalWidth / state.routes.length;
  return (
    <View style={[style.tabContainer, {width: totalWidth}]}>
      <View style={{flexDirection: 'row'}}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
          const isFocused = state.index === index;
          let iconName;
          if (label == 'main') {
            iconName = 'home';
          } else if (label == 'camera') {
            iconName = 'camera';
          } else {
            iconName = 'settings';
          }
          if (!isFocused) {
            iconName = iconName.concat('-outline');
          }
          const onPress = () => {
            console.log('jhe');
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{flex: 1}}
              key={index}>
              <View
                style={{
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name={`${iconName}`} size={24} color="#2C3351" />
                <Text>{label.toString()}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  tabContainer: {
    height: 88,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.0,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    elevation: 10,
    position: 'absolute',
    bottom: 0,
  },
});
