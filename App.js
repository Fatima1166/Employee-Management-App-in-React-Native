import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { EmployeeProvider } from './context/EmployeeContext';
import { AttendancePaymentProvider } from './context/AttendancePaymentContext';
import { TaskProvider } from './context/TaskContext';

import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import EmployeeList from './screens/EmployeeList';
import AddEmployee from './screens/AddEmployee';
import EditEmployee from './screens/EditEmployee';
import EmployeeDetail from './screens/EmployeeDetail';
import TaskScreen from './screens/TaskScreen';
import AttendanceScreen from './screens/AttendanceScreen';
import PaymentScreen from './screens/PaymentScreen';

import DashboardDrawer from './screens/DashboardDrawer'; // Drawer inside dashboard

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <EmployeeProvider>
      <AttendancePaymentProvider>
        <TaskProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
              <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Welcome' }} />
              <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
              <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Register' }} />
              <Stack.Screen name="Dashboard" component={DashboardDrawer} options={{ title: '', headerShown: false }} />
              <Stack.Screen name="EmployeeList" component={EmployeeList} options={{ title: 'Employee List' }} />
              <Stack.Screen name="AddEmployee" component={AddEmployee} options={{ title: 'Add Employee' }} />
              <Stack.Screen name="EditEmployee" component={EditEmployee} options={{ title: 'Edit Employee' }} />
              <Stack.Screen name="EmployeeDetail" component={EmployeeDetail} options={{ title: 'Employee Details' }} />
              <Stack.Screen name="TaskScreen" component={TaskScreen} options={{ title: 'Tasks' }} />
              <Stack.Screen name="AttendanceScreen" component={AttendanceScreen} options={{ title: 'Attendance' }} />
              <Stack.Screen name="PaymentScreen" component={PaymentScreen} options={{ title: 'Payment' }} />
            </Stack.Navigator>
          </NavigationContainer>
        </TaskProvider>
      </AttendancePaymentProvider>
    </EmployeeProvider>
  );
}
