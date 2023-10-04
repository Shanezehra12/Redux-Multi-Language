import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {changeTheme, changeLanguage} from '../redux/action/Actions';
import { languages } from './Language';

const DarkSignUp = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const theme = useSelector(state => state.ThemeReducer);

  const language = useSelector(state => state.LanguageReducer);


  return (
    <View
      style={{flex: 1, backgroundColor: theme === 'DARK' ? '#000' : '#fff'}}>
      <Text
        style={{
          alignSelf: 'center',
          marginTop: 50,
          fontSize: 25,
          fontWeight: '700',
          color: theme === 'DARK' ? '#fff' : '#000',
        }}>{language === 'ENGLISH' ? languages[0].hindi : languages[0].english}

      </Text>

      <Text
        style={{
          alignSelf: 'center',
          marginTop: 50,
          fontSize: 30,
          fontWeight: '700',
          color: theme === 'DARK' ? '#fff' : '#000',
        }}>
        {language === 'ENGLISH' ? languages[8].hindi : languages[8].english}
      </Text>

      <TextInput
        placeholder={language === 'ENGLISH' ? languages[9].hindi : languages[9].english}
        placeholderTextColor={theme === 'DARK' ? '#fff' : '#000'}
        style={{
          width: '85%',
          paddingLeft: 15,
          height: 50,
          borderRadius: 15,
          borderWidth: 0.5,
          fontSize: 20,
          alignSelf: 'center',
          marginTop: 50,
          color: theme === 'DARK' ? '#fff' : '#000',
          borderColor: theme === 'DARK' ? '#fff' : '#000',
        }}
      />

      <TextInput
        placeholder={language === 'ENGLISH' ? languages[2].hindi : languages[2].english}
        placeholderTextColor={theme === 'DARK' ? '#fff' : '#000'}
        style={{
          width: '85%',
          paddingLeft: 15,
          height: 50,
          borderRadius: 15,
          borderWidth: 0.5,
          fontSize: 20,
          alignSelf: 'center',
          marginTop: 20,
          color: theme === 'DARK' ? '#fff' : '#000',
          borderColor: theme === 'DARK' ? '#fff' : '#000',
        }}
      />

      <TextInput
        placeholder={language === 'ENGLISH' ? languages[3].hindi : languages[3].english}
        placeholderTextColor={theme === 'DARK' ? '#fff' : '#000'}
        style={{
          width: '85%',
          paddingLeft: 15,
          height: 50,
          borderRadius: 15,
          borderWidth: 0.5,
          fontSize: 20,
          alignSelf: 'center',
          marginTop: 20,
          color: theme === 'DARK' ? '#fff' : '#000',
          borderColor: theme === 'DARK' ? '#fff' : '#000',
        }}
      />

      <TextInput
        placeholder={language === 'ENGLISH' ? languages[10].hindi : languages[10].english}
        placeholderTextColor={theme === 'DARK' ? '#fff' : '#000'}
        style={{
          width: '85%',
          paddingLeft: 15,
          height: 50,
          borderRadius: 15,
          borderWidth: 0.5,
          fontSize: 20,
          alignSelf: 'center',
          marginTop: 20,
          color: theme === 'DARK' ? '#fff' : '#000',
          borderColor: theme === 'DARK' ? '#fff' : '#000',
        }}
      />

      <TouchableOpacity
        style={{
          width: '85%',
          height: 50,
          backgroundColor: theme === 'DARK' ? '#fff' : '#000',
          borderRadius: 15,
          alignSelf: 'center',
          marginTop: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, color: theme === 'DARK' ? '#000' : '#fff'}}>
        {language === 'ENGLISH' ? languages[8].hindi : languages[8].english}
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          alignSelf: 'center',
          marginTop: 40,
          fontSize: 20,
          fontWeight: '600',
          color: theme === 'DARK' ? '#fff' : '#000',
        }}
        onPress={() => {
          navigation.navigate('DarkLogin');
        }}>{language === 'ENGLISH' ? languages[11].hindi : languages[11].english}
      </Text>
    </View>
  );
};

export default DarkSignUp;
