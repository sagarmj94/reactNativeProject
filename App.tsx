import React, {Component} from 'react';
import {View, TextInput, SafeAreaView, StyleSheet} from 'react-native';

interface Props {}
interface State {
  textInputValue: string;
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      textInputValue: '',
    };
  }

  updateTextInputValue = (text: any) => {
    this.setState({textInputValue: text});
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          onChangeText={this.updateTextInputValue}
          placeholder="Example Input"
          value={this.state.textInputValue}
          style={{width: 300, borderWidth: 1, alignSelf: 'center'}}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'stretch'},
});

export default App;
