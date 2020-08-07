import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial88898Navigator from '../features/Tutorial88898/navigator';
import NotificationList88870Navigator from '../features/NotificationList88870/navigator';
import Settings88869Navigator from '../features/Settings88869/navigator';
import Settings88861Navigator from '../features/Settings88861/navigator';
import UserProfile88859Navigator from '../features/UserProfile88859/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial88898: { screen: Tutorial88898Navigator },
NotificationList88870: { screen: NotificationList88870Navigator },
Settings88869: { screen: Settings88869Navigator },
Settings88861: { screen: Settings88861Navigator },
UserProfile88859: { screen: UserProfile88859Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
