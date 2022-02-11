import React, {useContext, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  Login
} from '../../screens';


const StackNav = createStackNavigator();

/**
 * @returns Main Stack navigator for the app
 */

const StackNavigator = () => {
  

  return (
      <NavigationContainer >
        <StackNav.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#012f75',
              height: 70,
            },
            headerBackTitleStyle: {color: '#fff'},
            headerTitleContainerStyle: {
              paddingVertical: 10,
              justifyContent: 'center',
            },
            headerTintColor: '#fff',
            // eslint-disable-next-line react/display-name
            headerBackTitle: 'Atras',
            cardStyle: {backgroundColor: '#fff'},
          }}
        >
            <>
              <StackNav.Screen
                name={'Login'}
                options={{headerShown: false}}
                component={Login}
              />
            </>
        </StackNav.Navigator>
      </NavigationContainer>
  );
};

export default StackNavigator;
