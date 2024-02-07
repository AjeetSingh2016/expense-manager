import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {HeaderSecondary} from '../../components';
import { useState } from 'react';
import { FocusedStatusBar } from '../../components';

import Amount from './Components/Amount';
import Form from './Components/Form';

const Add = () => {

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false);

  return (
    <View style={{flex: 1, backgroundColor: '#072246'}}>
            <FocusedStatusBar 
        barStyle="light-content"
        translucent={false}
        backgroundColor="#072246"
      />
      <HeaderSecondary />
      <Amount date={date} setDate={setDate} open={open} setOpen={setOpen}/>
      <Form />
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({});
