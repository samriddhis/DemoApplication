import { createStackNavigator } from "react-navigation";
import LoginComponent from "./src/LoginComponent/LoginComponent";
import FormComponent from "./src/FormComponent/FormComponent";
import DetailsComponent from "./src/FormComponent/DetailsComponent.js"

export default (RouterComponent = createStackNavigator(
  {
    LoginScreen: {
      screen: LoginComponent
    },
    FormScreen: {
      screen: FormComponent
    },
    DetailsScreen:{
      screen:DetailsComponent
    }
  },
  {
    headerMode: "none"
  }
));
