import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Parking from "../components/parking/Parking";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import Timer from "../components/timer/Timer"
import Countdown from '../components/timer/Countdown';

const Stack = createStackNavigator();

export const ParkingContainer = (props) => {
  const vehiculo = props.route.params

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="estacionar"
        component={Parking}
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            backgroundColor: "#F9B233",
            elevation: 0,
            shadowColor: 'transparent',
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerLeft: () => (
            <Button
              type="clear"
              icon={
                <Icon
                  name="bars"
                  color="white"
                  style={{ marginRight: 10 }}
                  size={30}
                />
              }
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
          ),
        })}
      />
      <Stack.Screen
             name='Countdown' 
             initialParams={vehiculo} 
            component={Countdown}
           options={({ navigation}) => ({
                title: '',
                headerStyle: {
                    backgroundColor: '#F9B233',
                    elevation: 0,
                    shadowColor: 'transparent',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                headerLeft: () => (
                  <Button
                  type='clear'
                  icon={<Icon name='bars' color='white' style={{marginRight:10}} size={30}/>} 
                   onPress={() => {
                    navigation.toggleDrawer()}
                      }/>
                ),
              })}/> 


      <Stack.Screen name="Timer" component={Timer} initialParams={vehiculo} options={({ navigation }) => ({
          title: "",
          headerStyle: {
            backgroundColor: "#F9B233",
            elevation: 0,
            shadowColor: 'transparent',
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerLeft: () => (
            <Button
              type="clear"
              icon={
                <Icon
                  name="bars"
                  color="white"
                  style={{ marginRight: 10 }}
                  size={30}
                />
              }
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
          ),
        })}/> 
    </Stack.Navigator>

    
  );
};
