import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome_Screens from './Screen/Welcome_Screens';
import Login_Screens from './Screen/Login_Screens';
import Signup_Screens from './Screen/Signup_Screens';
import Category_Screens from './Screen/Category_Screens';
import Detail_Screens from './Screen/Detail_Screens';
import History_Screens from './Screen/History_Screens';
import Test from './Screen/Test';
import Order_Details_Screens from './Screen/Order_Details_Screens';
import Account_Screens from './Screen/Account_Screens';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen options={{ headerShown: false }} name="Account_Screens" component={Account_Screens} />
        <Stack.Screen options={{ headerShown: false }} name="Welcome" component={Welcome_Screens} />
        <Stack.Screen options={{ headerShown: false }} name="Login_Screens" component={Login_Screens} />
        <Stack.Screen options={{ headerShown: false }} name="Signup_Screens" component={Signup_Screens} />
        <Stack.Screen options={{ headerShown: false }} name="Category_Screens" component={Category_Screens} />
        <Stack.Screen options={{ headerShown: false }} name="Detail_Screens" component={Detail_Screens} />
        <Stack.Screen options={{ headerShown: false }} name="Order_Details_Screens" component={Order_Details_Screens} />
        <Stack.Screen options={{ headerShown: false }} name="History_Screens" component={History_Screens} />


        {/* Thêm các Screen khác nếu cần */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
