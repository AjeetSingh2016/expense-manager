import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft, faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import DateTimePicker from './DateTimePicker';

const Header = ({handleGoBack, data, date, setDate, open, setOpen}) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isBottomPopupVisible, setIsBottomPopupVisible] = useState(false);
  // const [date, setDate] = useState('');
  const [provider, setProvider] = useState('');
  const [amount, setAmount] = useState('');
  const [payeeName, setPayeeName] = useState('');
  const [note, setNote] = useState('');
  const [refNo, setRefNo] = useState('');
  const [sms, setSMS] = useState('');


  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleEdit = () => {
    // Implement edit functionality
    setIsMenuVisible(false);
    setIsBottomPopupVisible(true); // Show bottom popup on edit button click
  };

  const handleDelete = () => {
    // Implement delete functionality
    setIsMenuVisible(false);
  };

  const handleDismiss = () => {
    setIsMenuVisible(false);
    setIsBottomPopupVisible(false);
  };

  useEffect(() => {
    setAmount(data.amount);
  }, [data])
  
  

  return (
    <View
      style={{
        width: '100%',
        height: 56,
        backgroundColor: '#183153',
        justifyContent: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={handleGoBack}>
        <FontAwesomeIcon icon={faArrowLeft} color={'#FAB007'} size={25} />
      </TouchableOpacity>

      <Text style={{color: 'white', fontSize: responsiveFontSize(2)}}>
        Debit Information
      </Text>

      <TouchableOpacity onPress={toggleMenu}>
        <FontAwesomeIcon icon={faEllipsisV} color={'#FAB007'} size={25} />
      </TouchableOpacity>

      <Modal visible={isMenuVisible || isBottomPopupVisible} transparent>
        <TouchableWithoutFeedback onPress={handleDismiss}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
        {isMenuVisible && (
          <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.menuItem} onPress={handleEdit}>
              <Text style={[styles.menuItemText, {color: 'white'}]}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={handleDelete}>
              <Text style={[styles.menuItemText, {color: 'white'}]}>
                Delete
              </Text>
            </TouchableOpacity>
          </View>
        )}
        {isBottomPopupVisible && (
          <View style={styles.bottomPopupContainer}>
            <DateTimePicker
              date={date}
              setDate={setDate}
              open={open}
              setOpen={setOpen}
            />
            <TextInput
              style={styles.input}
              placeholder="Provider"
              value={provider}
              onChangeText={setProvider}
              placeholderTextColor={"black"}
            />
            <TextInput
              style={styles.input}
              placeholder={amount.toString()}
              value={amount}
              onChangeText={setAmount}
              placeholderTextColor={"black"}
            />
            <TextInput
              style={styles.input}
              placeholder="Payee Name"
              value={payeeName}
              onChangeText={setPayeeName}
              placeholderTextColor={"black"}
            />
            <TextInput
              style={styles.input}
              placeholder="Note"
              value={note}
              onChangeText={setNote}
              placeholderTextColor={"black"}
            />
            <TextInput
              style={styles.input}
              placeholder="Ref No"
              value={refNo}
              onChangeText={setRefNo}
              placeholderTextColor={"black"}
            />
            <TextInput
              style={styles.input}
              placeholder="SMS"
              value={sms}
              onChangeText={setSMS}
              placeholderTextColor={"black"}
            />
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black color
  },
  menuContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#183153',
    borderRadius: 5,
    elevation: 5,
    width: 100,
  },
  bottomPopupContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#183153',
    width: '100%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  menuItemText: {
    color: 'white',
    fontSize: responsiveFontSize(2),
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: "black",
  },
});
