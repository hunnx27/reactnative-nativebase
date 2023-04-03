/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
//import {View, Text} from 'react-native';
import {
  NativeBaseProvider,
  Box,
  Text,
  View,
  //Heading,
  //VStack,
  //FormControl,
  //Input,
  //Link,
  //Button,
  HStack,
  Center,
  Pressable,
  ScrollView,
} from 'native-base';

function App(): JSX.Element {
  const [selected, setSelected] = React.useState(1);
  return (
    <NativeBaseProvider>
      <View flex={1}>
        <ScrollView>
          <Box>
            <Center>
              <Text>MAIN</Text>
            </Center>
          </Box>
        </ScrollView>
        <Box bg="white" safeAreaTop width="100%" alignSelf="center">
          <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
            <Pressable
              opacity={selected === 0 ? 1 : 0.5}
              py="3"
              flex={1}
              onPress={() => setSelected(0)}>
              <Center>
                <Text color="white" fontSize="12">
                  Home
                </Text>
              </Center>
            </Pressable>
            <Pressable
              opacity={selected === 1 ? 1 : 0.5}
              py="2"
              flex={1}
              onPress={() => setSelected(1)}>
              <Center>
                <Text color="white" fontSize="12">
                  List
                </Text>
              </Center>
            </Pressable>
          </HStack>
        </Box>
      </View>
    </NativeBaseProvider>
  );
}

export default App;
