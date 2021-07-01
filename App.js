/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
// import type {Node} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

const App = () => {
  var [isSelect, setIsSelect] = useState('Tất cả');
  const [data, setData] = useState([]);

  const dataA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed',
      check: 1,
      name: 'Nguye',
      img: '',
      messLast: 'ok',
      time: '18:00',
      type: [
        {
          icon: 'call',
        },
        {
          icon: 'mess',
        },
      ],
      icon: [
        {
          iconName: 'chốt đơn',
          color: '#cdeee7',
          colorText: '#7cb9ac',
        },
        {
          iconName: 'tạo đơn',
          color: '#c7e7ff',
          colorText: '#70a8d0',
        },
      ],
    },
    {
      id: 'bd7acbea-c1b1--aed5-3ad53abb28ba',
      check: 1,
      name: 'Nguye',
      img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9',
      messLast: 'ok',
      time: '18:00',
      type: [
        {
          icon: 'call',
        },
        {
          icon: 'mess',
        },
      ],
      icon: [
        {
          iconName: 'hoàn đơn',
          color: '#ffe9d7',
          colorText: '#c99b8a',
        },
        {
          iconName: 'tạo đơn',
          color: '#c7e7ff',
          colorText: '#70a8d0',
        },
      ],
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      check: null,
      name: 'Second Item',
      img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9',
      messLast: 'he',
      time: '18:30',
      type: [
        {
          icon: 'call',
        },
      ],
      icon: [
        {
          iconName: 'chốt đơn',
          color: '#cdeee7',
          colorText: '#7cb9ac',
        },
        {
          iconName: 'hủy đơn',
          color: '#f7d4da',
          colorText: '#a14258',
        },
      ],
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      check: null,
      name: 'Third Item',
      img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9',
      messLast: 'um',
      time: '18:30',
      type: [
        {
          icon: 'letter',
        },
        {
          icon: 'mess',
        },
      ],
      icon: [
        {
          iconName: 'chốt đơn',
          color: '#cdeee7',
          colorText: '#7cb9ac',
        },
        {
          iconName: 'hủy đơn',
          color: '#f7d4da',
          colorText: '#a14258',
        },
        {
          iconName: 'hoàn đơn',
          color: '#ffe9d7',
          colorText: '#c99b8a',
        },
        {
          iconName: 'tạo đơn',
          color: '#c7e7ff',
          colorText: '#70a8d0',
        },
      ],
    },
  ];
  const dataC = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-',
      check: 1,
      name: 'Nguye',
      img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9',
      messLast: 'ok',
      time: '18:00',
      type: [
        {
          icon: 'call',
        },
        {
          icon: 'mess',
        },
      ],
      icon: [
        {
          iconName: 'chốt đơn',
          color: '#cdeee7',
          colorText: '#7cb9ac',
        },
        {
          iconName: 'hủy đơn',
          color: '#f7d4da',
          colorText: '#a14258',
        },
        {
          iconName: 'hoàn đơn',
          color: '#ffe9d7',
          colorText: '#c99b8a',
        },
        {
          iconName: 'tạo đơn',
          color: '#c7e7ff',
          colorText: '#70a8d0',
        },
      ],
    },
    {
      id: '3ac68afc-c605--a4f8-fbd91aa97f63',
      check: null,
      name: 'Second Item',
      img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9',
      messLast: 'he',
      time: '18:30',
      type: [
        {
          icon: 'call',
        },
        {
          icon: 'mess',
        },
      ],
      icon: [
        {
          iconName: 'chốt đơn',
          color: '#cdeee7',
          colorText: '#7cb9ac',
        },
        {
          iconName: 'hủy đơn',
          color: '#f7d4da',
          colorText: '#a14258',
        },
        {
          iconName: 'hoàn đơn',
          color: '#ffe9d7',
          colorText: '#c99b8a',
        },
        {
          iconName: 'tạo đơn',
          color: '#c7e7ff',
          colorText: '#70a8d0',
        },
      ],
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      check: null,
      name: 'Third Item',
      img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9',
      messLast: 'um',
      time: '18:30',
      type: [
        {
          icon: 'call',
        },
        {
          icon: 'mess',
        },
      ],
      icon: [
        {
          iconName: 'chốt đơn',
          color: '#cdeee7',
          colorText: '#7cb9ac',
        },
        {
          iconName: 'hủy đơn',
          color: '#f7d4da',
          colorText: '#a14258',
        },
        {
          iconName: 'hoàn đơn',
          color: '#ffe9d7',
          colorText: '#c99b8a',
        },
        {
          iconName: 'tạo đơn',
          color: '#c7e7ff',
          colorText: '#70a8d0',
        },
      ],
    },
  ];
  const dataT = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      check: 1,
      name: 'Nguye',
      img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9',
      messLast: 'ok',
      time: '18:00',
      type: [
        {
          icon: 'mess',
        },
      ],
      icon: [
        {
          iconName: 'chốt đơn',
          color: '#cdeee7',
          colorText: '#7cb9ac',
        },
        {
          iconName: 'hủy đơn',
          color: '#f7d4da',
          colorText: '#a14258',
        },
        {
          iconName: 'hoàn đơn',
          color: '#ffe9d7',
          colorText: '#c99b8a',
        },
        {
          iconName: 'tạo đơn',
          color: '#c7e7ff',
          colorText: '#70a8d0',
        },
      ],
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      check: null,
      name: 'Second Item',
      img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9',
      messLast: 'he',
      time: '18:30',
      type: [
        {
          icon: 'call',
        },
      ],
      icon: [
        {
          iconName: 'chốt đơn',
          color: '#cdeee7',
          colorText: '#7cb9ac',
        },
        {
          iconName: 'hủy đơn',
          color: '#f7d4da',
          colorText: '#a14258',
        },
        {
          iconName: 'hoàn đơn',
          color: '#ffe9d7',
          colorText: '#c99b8a',
        },
        {
          iconName: 'tạo đơn',
          color: '#c7e7ff',
          colorText: '#70a8d0',
        },
      ],
    },
  ];
  const dataD = [
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      check: null,
      name: 'Second Item',
      img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9',
      messLast: 'he',
      time: '18:30',
      type: [
        {
          icon: 'call',
        },
      ],
      icon: [
        {
          iconName: 'chốt đơn',
          color: '#cdeee7',
          colorText: '#7cb9ac',
        },
        {
          iconName: 'hủy đơn',
          color: '#f7d4da',
          colorText: '#a14258',
        },
        {
          iconName: 'hoàn đơn',
          color: '#ffe9d7',
          colorText: '#c99b8a',
        },
        {
          iconName: 'tạo đơn',
          color: '#c7e7ff',
          colorText: '#70a8d0',
        },
      ],
    },
  ];
  const dataH = [
    {
      name: 'Tất cả',
      mes: 10,
    },
    {
      name: 'Bình luận',
      mes: 7,
    },
    {
      name: 'Tin nhắn',
      mes: 9,
    },
    {
      name: 'Đã xóa',
      mes: 2,
    },
  ];

  useEffect(() => {
    setData(dataA);
  }, []);

  const renderItemIcon = ({item, index}) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text
          style={[
            styles.icon,
            {
              backgroundColor: item.color,
              opacity: 0.5,
              fontSize: 11,
              color: item.colorText,
            },
          ]}>
          {item.iconName}
        </Text>
      </View>
    );
  };

  const rederIcon = ({item, index}) => {
    return (
      <View>
        {item.icon === 'call' ? (
          <Image
            source={require('../Demo/src/call.png')}
            style={{width: 12, height: 12, marginTop: 5, marginLeft: 2}}
          />
        ) : null}
        {item.icon === 'mess' ? (
          <Image
            source={require('../Demo/src/mes.jpg')}
            style={{width: 12, height: 12, marginTop: 5, marginLeft: 7}}
          />
        ) : null}
        {item.icon === 'letter' ? (
          <Image
            source={require('../Demo/src/thu.jpg')}
            style={{width: 12, height: 12, marginTop: 5, marginLeft: 7}}
          />
        ) : null}
      </View>
    );
  };

  const SquareView = ({item, index}) => {
    return (
      <TouchableOpacity
        style={[
          styles.button,
          {
            height: 25,
            width: 100,
            backgroundColor: item.name === isSelect ? '#3281f0' : '#fff',
          },
        ]}
        onPress={() => {
          if (item.name === 'Tin nhắn') {
            setData(dataT);
            setIsSelect(item.name);
          } else if (item.name === 'Đã xóa') {
            setData(dataD);
            setIsSelect(item.name);
          } else if (item.name === 'Bình luận') {
            setData(dataC);
            setIsSelect(item.name);
          } else {
            setData(dataA);
            setIsSelect('Tất cả');
          }
        }}>
        <Text style={{color: item.name === isSelect ? '#fff' : '#000'}}>
          {item.name}({item.mes})
        </Text>
      </TouchableOpacity>
    );
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={[
          styles.itemContainer,
          {backgroundColor: item.check ? null : '#ebf1fd'},
        ]}>
        <View style={{}}>
          {item.img ? (
            <Image source={{uri: item.img}} style={styles.avt} />
          ) : (
            <Image source={require('../Demo/src/hi.jpg')} style={styles.avt} />
          )}
          {item.check ? null : (
            <View style={[StyleSheet.absoluteFill, {alignItems: 'flex-end'}]}>
              <Image
                source={require('../Demo/src/Tich-xanh.png')}
                style={{width: 18, height: 18, borderRadius: 9, marginTop: 7}}
              />
            </View>
          )}
        </View>
        <View style={styles.itemMess}>
          <View style={{flex: 1}}>
            <Text style={{color: 'black'}}>{item.name}</Text>
            <Text style={{color: 'black', fontSize: 12, marginTop: 3}}>
              {item.messLast}
            </Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={item.icon}
              renderItem={renderItemIcon}
              keyExtractor={item => item.color}
            />
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <Text
              style={{
                color: 'black',
                fontSize: 12,
                textAlign: 'right',
                marginTop: 5,
              }}>
              {item.time}
            </Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={item.type}
              renderItem={rederIcon}
              keyExtractor={item => item.icon}
            />
            <View />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Đầm nữ cao cấp</Text>
      </View>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={dataH}
          renderItem={SquareView}
          keyExtractor={item => item.name}
        />
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',
  },
  header: {
    backgroundColor: '#fe4b44',
    width: '100%',
    height: '7%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avt: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop: 10,
  },
  button: {
    shadowColor: 'rgba(0,0,0, .5)',
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginLeft: 10,
    borderRadius: 5,
  },
  icon: {
    borderWidth: 1,
    paddingHorizontal: 7,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 3,
    marginBottom: 10,
    borderRadius: 15,
    marginRight: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  itemMess: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 15,
  },
});

export default App;
