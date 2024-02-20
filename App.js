import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome_Screens from './Screen/Welcome_Screens';
import Login_Screens from './Screen/Login_Screens';
import Signup_Screens from './Screen/Signup_Screens';
import Category_Screens from './Screen/Category_Screens';
import Detail_Screens from './Screen/Detail_Screens';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Detail_Screens" component={Detail_Screens} />
        <Stack.Screen options={{ headerShown: false }} name="Welcome" component={Welcome_Screens} />
        <Stack.Screen options={{ headerShown: false }} name="Login_Screens" component={Login_Screens} />
        <Stack.Screen options={{ headerShown: false }} name="Signup_Screens" component={Signup_Screens} />
        <Stack.Screen options={{ headerShown: false }} name="Category_Screens" component={Category_Screens} />


        {/* Thêm các Screen khác nếu cần */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
