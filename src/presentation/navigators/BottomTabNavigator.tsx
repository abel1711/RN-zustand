import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, ProfileScreen, SettingsScreen } from '@/presentation/screens';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {

    return (
        <Tab.Navigator
            initialRouteName='Home'
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    )
};