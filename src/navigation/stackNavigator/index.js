import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Login, Register} from '../../screens';

const StackNav = createStackNavigator();

/**
 * @returns Main Stack navigator for the app
 */

const StackNavigator = () => {
  const saludo = '';

  return (
    <NavigationContainer>
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
          headerBackTitle: saludo,
          cardStyle: {backgroundColor: '#fff'},
        }}>
        <>
          <StackNav.Screen
            name={'login'}
            options={{headerShown: true}}
            component={Login}
          />

          <StackNav.Screen
            name={'register'}
            options={{headerShown: true}}
            component={Register}
          />
        </>
      </StackNav.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
