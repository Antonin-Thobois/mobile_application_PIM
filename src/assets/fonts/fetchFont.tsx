import * as Font from 'expo-font';

export const fetchFonts = () => {
    return Font.loadAsync({
    'asap': require('./asap-regular.ttf'),
    'helvetica': require('./helvetica.ttf'),
    'quicksand': require('./quicksand-regular.ttf')
    });
    };



