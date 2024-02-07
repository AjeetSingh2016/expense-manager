import { View, Text } from 'react-native'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faList, faCog, faInr, faBarChart, faUserCircle, faPlusCircle, faRefresh, faArrowLeft, faCalendar, faChevronRight, faSignOut, faDownload, faInfo, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

library.add(faHome, faList, faCog, faInr, faBarChart, faUserCircle, faPlusCircle, faRefresh, faArrowLeft, faCalendar, faChevronRight, faSignOut, faDownload, faInfo, faChevronDown);

import { SignedInStack } from './navigations'



const App = () => {
  return (
    <SignedInStack />
    
  )
}

export default App