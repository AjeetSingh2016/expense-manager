import {StyleSheet, Text, View} from 'react-native';
import {FocusedStatusBar} from '../../components';
import Header from './Components/Header';
import Tabs from './Components/Tabs';

const tabData = [
  {
    title: 'Export Data',
    icon: 'download',
  },
  {
    title: 'Setting',
    icon: 'cog',
  },
  {
    title: 'About Us',
    icon: 'info',
  },
  {
    title: 'Logout',
    icon: 'sign-out',
  },
];

const Profile = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#183153'}}>
      <FocusedStatusBar
        barStyle="light-content"
        translucent={false}
        backgroundColor="#183153"
      />
      <Header />

      <View
        style={{
          width: '100%',
          flex: 3,
          backgroundColor: 'transparent',
          alignItems: 'center', justifyContent: "center"
        }}>
        <View
          style={{
            width: '90%',
            height: '90%',
            borderRadius: 25,
          }}>
          {tabData.map((item, index) => (
            <Tabs key={index} idx={index} end={true} data={item} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
