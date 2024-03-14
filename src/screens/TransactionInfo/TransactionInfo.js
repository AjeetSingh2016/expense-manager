import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Header from './components/Header';
import {FocusedStatusBar} from '../../components';
import MainCard from './components/MainCard';
import AddNoteCard from './components/AddNoteCard';
import MessageCard from './components/MessageCard';

const TransactionInfo = ({route, navigation}) => {
  const {data} = route.params;

  const handleGoBack = () => {
    navigation.goBack();
  };

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);


  return (
    <View style={{flex: 1}}>
      <FocusedStatusBar
        barStyle="light-content"
        translucent={false}
        backgroundColor="#183153"
      />
      <Header handleGoBack={handleGoBack} data={data} date={date} setDate={setDate} open={open} setOpen={setOpen}/>
      <MainCard data={data} />
      <AddNoteCard />
      <MessageCard data={data} />
    </View>
  );
};

export default TransactionInfo;
