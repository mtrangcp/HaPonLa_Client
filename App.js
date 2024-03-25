import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome_Screens from './Screen/Welcome_Screens';
import Login_Screens from './Screen/Login_Screens';
import Signup_Screens from './Screen/Signup_Screens';
import Category_Screens from './Screen/Category_Screens';
import Detail_Screens from './Screen/Detail_Screens';
import History_Screens from './Screen/History_Screens'
import Order_Details_Screens from './Screen/Order_Details_Screens';
import Account_Screens from './Screen/Account_Screens';
import User_Information_Screens from './Screen/User_Information_Screens';
import Address_Screens from './Screen/Address_Screens';
import Change_Password from './Screen/Change_Password';
import Home_Screens from './Screen/Home_Screens';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Home_Screens" component={Home_Screens} />
        <Stack.Screen options={{ headerShown: false }} name="Welcome_Screens" component={Welcome_Screens} />
        <Stack.Screen options={{ headerShown: false }} name="Order_Details_Screens" component={Order_Details_Screens} />
        
        <Stack.Screen options={{ headerShown: false }} name="History_Screens" component={History_Screens} />
        <Stack.Screen options={{ headerShown: false, gestureEnabled: false }} name="Login_Screens" component={Login_Screens} />
        <Stack.Screen options={{ headerShown: false }} name="Change_Password" component={Change_Password} />
        <Stack.Screen options={{ headerShown: false }} name="Signup_Screens" component={Signup_Screens} />
        <Stack.Screen options={{ headerShown: false }} name="Address_Screens" component={Address_Screens} />
        <Stack.Screen options={{ headerShown: false }} name="User_Information_Screens" component={User_Information_Screens} />
        <Stack.Screen options={{ headerShown: false, gestureEnabled: false }} name="Account_Screens" component={Account_Screens} />
        <Stack.Screen options={{ headerShown: false }} name="Category_Screens" component={Category_Screens} />
        <Stack.Screen options={{ headerShown: false }} name="Detail_Screens" component={Detail_Screens} />
        
        {/* tttttttttttttttttttttttttttttttttt */}
        {/* Thêm các Screen khác nếu cần */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
