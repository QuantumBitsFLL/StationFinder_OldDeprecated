import Onboarding from "../Containers/Onboarding";
import TabBar from '../Components/TabBar';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import SimpleScreen from "../Components/BasicScreen";

export const homeRouteName = 'Home';
export const addRouteName = 'Blog';
export const onboardingRouteName = 'Onboarding';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AuthStackNavigator() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={onboardingRouteName} component={Onboarding} />
      </Stack.Navigator>
    );
  }


  const One = () => <div> ONE </div>
  const Two = () => <div> TWO </div>


  function OneStackNavigator(props) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={blogRouteName}
          component={One}
          options={() => props.navigation.setOptions({ tabBarVisible: true })}
        />
      </Stack.Navigator>
    );
  }
  

  function TwoStackNavigator(props) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={blogRouteName}
          component={Two}
          options={() => props.navigation.setOptions({ tabBarVisible: true })}
        />
      </Stack.Navigator>
    );
  }
  


  function TabNavigator(props) {
    return (
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={props => <TabBar {...props} />}
        backBehavior="initialRoute"
      // keyboardHidesTabBar={false}
      >
        <Tab.Screen name={homeRouteName} component={OneStackNavigator} />
        <Tab.Screen name={addRouteName} component={TwoStackNavigator} />
      </Tab.Navigator>
    );
  }




export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Auth"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Auth" component={AuthStackNavigator} />
          <Stack.Screen name="Tab" component={TabNavigator} />
          <Stack.Screen name = "Test" component = { SimpleScreen }/> 
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  