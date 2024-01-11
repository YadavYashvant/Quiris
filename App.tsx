/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  AppRegistry,
  TouchableOpacity,
  Linking,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera, BarCodeReadEvent } from 'react-native-camera';
import { CupertinoSectionList } from 'react-native-cupertino-list';

function App(): React.JSX.Element {
  
  const isDarkMode = useColorScheme() === 'dark';

  const onBarCodeRead = (event: BarCodeReadEvent) => {
    // Extract the URL from the QR code data
    const { data } = event;
    
    // Open the URL
    if (data) {
      Linking.openURL(data);
    }
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <QRCodeScanner
        onRead={onBarCodeRead}
        flashMode={RNCamera.Constants.FlashMode.off}
        topContent={
          <Text style={styles.centerText}>
            Go to{' '}
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
        cameraContainerStyle={{backgroundColor: 'transparent',}}
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
  );
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: '#fff'
    //color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: '#333',
    borderRadius: 20,  
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  preview: {
    flex: .9,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  camcontainer: {
    flex: .8,
    flexDirection: 'column',
    backgroundColor: 'black',
    borderRadius: 20,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },
});

export default App;
