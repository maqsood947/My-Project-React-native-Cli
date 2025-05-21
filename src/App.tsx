import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from "./Navigation/TabNavigation";
import { AppwriteProvider } from './appwrite/AppwriteContext';
import { Router } from './Navigation/Router';

export type RootStackParamList = {
  HomeScreen: undefined;
  AnalysisScreen: undefined;
  ProfileScreen: undefined;
  AddItemsModal: undefined
};

export default function App() {
  return (
    <AppwriteProvider>
      <Router />
     </AppwriteProvider>
  );
}
