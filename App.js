import DashBoard from "./App/Scenes/DashBoard";
import MusicDetails from "./App/Scenes/DashBoard/MusicDetails";
import { StackNavigator } from 'react-navigation';

const StackNaviApp = StackNavigator({
    DashBoard: { screen: DashBoard},
    MusicDetails: { screen: MusicDetails},
   });

export default StackNaviApp