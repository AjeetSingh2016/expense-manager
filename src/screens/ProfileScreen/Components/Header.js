import {StyleSheet, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
const Header = () => {
  return (
    <View
      style={{
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{height: '70%', justifyContent: 'center', alignItems: 'center'}}>
        <FontAwesomeIcon icon="user-circle" color={'#FAB007'} size={100} />
      </View>
      <View style={{height: '30%'}}>
        <Text style={{fontSize: responsiveFontSize(2.5)}}>Ajeet Singh</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
