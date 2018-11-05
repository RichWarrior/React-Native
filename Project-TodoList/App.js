import {StackNavigator} from 'react-navigation';
import HomeScreen from './src/Screens/Home';
import FeedScreen from './src/Screens/Feed';
import PostScreen from './src/Screens/Posts';

const MyNavigator=StackNavigator({
  Home : {screen :HomeScreen},
  Feed : {screen:FeedScreen},
  Posts : {screen:PostScreen}
})


export default MyNavigator;
