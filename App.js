import * as React from 'react';
import { Text, View, TextInput, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{
        padding: 20,
        backgroundColor: '#FFF',
        width: '80%',
      }}>
        <Text style={{
          fontSize: 16,
          paddingTop: 5,
          paddingBottom: 5,
          width: '80%'
        }}>Name: zhangqing </Text>
        <Text style={{
          fontSize: 16,
          paddingTop: 5,
          paddingBottom: 5
        }}>Number: 28</Text>
        <Text style={{
          fontSize: 16,
          paddingTop: 5,
          paddingBottom: 5
        }}>Grope Name: kpi04</Text>
      </View>

    </View>
  );
}

function InputList() {
  const [value, onChangeText] = React.useState('');
  const [list, setList] = React.useState([1]);
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={{
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20
      }}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
        <Button title='add' onPress={() => {
          if(value == ''){
            console.log('please input value!')
            return
          }
          let data = [...list];
          data.push(value);
          setList(data);
        }}></Button>
      </View>

      <FlatList
        data={list}
        renderItem={({item}) => {
          return (
            <View style={{
              backgroundColor: '#FFF',
              paddingLeft: 50,
              paddingRight: 50 
            }}>
              <Text>
                {item}
              </Text>
            </View>
          );
        }}
        keyExtractor={item => item}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="MyInfo" component={HomeScreen} />
        <Tab.Screen name="InputList" component={InputList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}