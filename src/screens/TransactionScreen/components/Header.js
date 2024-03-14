import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const Header = ({ searchQuery, setSearchQuery }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const [currentType, setCurrentType] = useState('All')

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleAll = () => {
    // Implement edit functionality
    setCurrentType('All');
    setSearchQuery('')
    setIsMenuVisible(false);
  };

  const handleDebit = () => {
    // Implement delete functionality
    console.log("Handled Debit");
    setCurrentType('Debit')
    setSearchQuery('Debit')
    setIsMenuVisible(false);
  };

  const handleCredit = () => {
    setCurrentType('Credit')
    setSearchQuery('Credit')
    setIsMenuVisible(false);
  };

  
  const handleDismiss = () => {
    setIsMenuVisible(false);
  };


  return (
    <View style={{flexDirection: 'row', alignItems: 'center', height: 56, backgroundColor: "#072246", alignItems: "center"}}>
      <View style={{justifyContent: 'center', alignItems: 'start'}}>
        <TouchableOpacity
          onPress={toggleMenu}
          style={{
            marginLeft: 10,
            borderWidth: 1,
            borderColor: '#FAB007',
            height: 40,
            alignItems: 'center',
            borderRadius: 20,
            justifyContent: 'space-around',
            flexDirection: 'row',
            paddingHorizontal: 10,
            minWidth: 90,
            // backgroundColor: "#183153"
            // width: "auto"
          }}>
          <FontAwesomeIcon icon="chevron-down" color={'#FAB007'} size={20} />
          <Text
            style={{
              color: 'white',
              fontSize: responsiveFontSize(2),
              fontWeight: '400',
              paddingLeft: 10,
            }}>
           {currentType}
          </Text>
        </TouchableOpacity>
      </View>

      <Modal visible={isMenuVisible} transparent>
        <TouchableWithoutFeedback onPress={handleDismiss}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
        {isMenuVisible && (
          <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.menuItem} onPress={handleAll}>
              <Text style={styles.menuItemText}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={handleDebit}>
              <Text style={styles.menuItemText}>Debit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={handleCredit}>
              <Text style={styles.menuItemText}>Credit</Text>
            </TouchableOpacity>
          </View>
        )}
      </Modal>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menuContainer: {
    position: 'absolute',
    // top: 56,
    // left: 10,
    backgroundColor: '#072246',
    borderRadius: 5,
    elevation: 5,
    width: 110,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  menuItemText: {
    color: 'white',
    fontSize: responsiveFontSize(2),
  },
});
