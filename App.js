import { View, Text } from 'react-native'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faList, faCog, faInr, faBarChart, faUserCircle, faPlusCircle, faRefresh, faArrowLeft, faCalendar, faChevronRight, faSignOut, faDownload, faInfo, faChevronDown, faEllipsisV, faStickyNote, faPencil, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import Provider from './src/context/Provider';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

library.add(faHome, faList, faCog, faInr, faBarChart, faUserCircle, faPlusCircle, faRefresh, faArrowLeft, faCalendar, faChevronRight, faSignOut, faDownload, faInfo, faChevronDown, faEllipsisV, faStickyNote, faPencil, faInfoCircle);
import AuthNavigaion from './AuthNavigation';
import { MenuProvider } from 'react-native-popup-menu';



const App = () => {
  return (
    <MenuProvider>
      <Provider>
        <AuthNavigaion />
      </Provider>
    </MenuProvider>
  )
}

export default App