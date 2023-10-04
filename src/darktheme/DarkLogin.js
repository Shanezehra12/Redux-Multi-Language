import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {changeTheme, changeLanguage} from '../redux/action/Actions';
import {languages} from './Language';

const DarkLogin = () => {
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
        }}>
        {' '}
        {language === 'ENGLISH' ? languages[0].hindi : languages[0].english}
      </Text>

      <Text
        style={{
          alignSelf: 'center',
          marginTop: 50,
          fontSize: 30,
          fontWeight: '700',
          color: theme === 'DARK' ? '#fff' : '#000',
        }}>
        {language === 'ENGLISH' ? languages[1].hindi : languages[1].english}
      </Text>

      <TextInput
        placeholder={
          language === 'ENGLISH' ? languages[2].hindi : languages[2].english
        }
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
        placeholder={
          language === 'ENGLISH' ? languages[3].hindi : languages[3].english
        }
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

      <Text
        style={{
          alignSelf: 'flex-end',
          marginTop: 20,
          marginRight: 30,
          fontSize: 20,
          fontWeight: '600',
          color: theme === 'DARK' ? '#fff' : '#000',
        }}>
        {language === 'ENGLISH' ? languages[4].hindi : languages[4].english} ?
      </Text>

      <TouchableOpacity
        style={{
          width: '85%',
          height: 50,
          backgroundColor: theme === 'DARK' ? '#fff' : '#000',
          borderRadius: 15,
          alignSelf: 'center',
          marginTop: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, color: theme === 'DARK' ? '#000' : '#fff'}}>
          {language === 'ENGLISH' ? languages[1].hindi : languages[1].english}
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          alignSelf: 'center',
          marginTop: 30,
          fontSize: 20,
          fontWeight: '600',
          color: theme === 'DARK' ? '#fff' : '#000',
        }}
        onPress={() => {
          navigation.navigate('DarkSignUp');
        }}>
        {language === 'ENGLISH' ? languages[5].hindi : languages[5].english}
      </Text>

      <TouchableOpacity
        style={{
          width: '85%',
          height: 50,
          backgroundColor: theme === 'DARK' ? '#000' : '#fff',
          borderRadius: 15,
          borderWidth: 0.5,
          alignSelf: 'center',
          marginTop: 30,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: theme === 'DARK' ? '#fff' : '#000',
        }}
        onPress={() => {
          if (theme === 'DARK') {
            dispatch(changeTheme('LIGHT'));
          } else {
            dispatch(changeTheme('DARK'));
          }
        }}>
        <Text style={{fontSize: 18, color: theme === 'DARK' ? '#fff' : '#000'}}>
          {/*           {theme === 'DARK' ? 'Apply Light Theme' : 'Apply Dark Theme'} */}
          {language === 'ENGLISH' ? languages[6].hindi : languages[6].english}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: '85%',
          height: 50,
          backgroundColor: theme === 'DARK' ? '#000' : '#fff',
          borderRadius: 15,
          borderWidth: 0.5,
          alignSelf: 'center',
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: theme === 'DARK' ? '#fff' : '#000',
        }}
        onPress={() => {
          if (language === 'ENGLISH') {
            dispatch(changeLanguage('HINDI'));
          } else {
            dispatch(changeLanguage('ENGLISH'));
          }
        }}>
        <Text style={{fontSize: 18, color: theme === 'DARK' ? '#fff' : '#000'}}>
          {language === 'ENGLISH' ? languages[7].hindi : languages[7].english}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DarkLogin;
