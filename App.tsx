import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

interface Props{
  
}
interface State{

}

class App extends Component<Props, State> {

  render() {
    return (
      <View>
        <TextInput placeholder="Example Input" value={'Sagar'}/>
      </View>
    );
  }
}

export default App;