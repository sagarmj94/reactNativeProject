import React, {Component} from 'react';
import {View,Text, TextInput, SafeAreaView, StyleSheet,Button} from 'react-native';
import Container from './src/component/Container';
import CustomButton from './src/component/CustomButton';

interface Props {}
enum InputType{
  EMAIL='Email',
  PASSWORD="Password",
  LOGIN_BUTTON="Login"
}
interface State {
  emailTextValue: string;
  passwordTextValue:string;
  
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      emailTextValue: '',
      passwordTextValue:''
    };
  }

  updateTextInput = (val:any,type:any) => {
    switch (type) {
      case InputType.EMAIL:{
        this.setState({ emailTextValue: val });
        break;
      }
      case InputType.PASSWORD:{
        this.setState({passwordTextValue:val})
        break;
      }
    }
  };
  
  handleLogin=()=>{
    console.log("pringting",this.state.emailTextValue,this.state.passwordTextValue);
  }

  render() {
    return (
      <Container containerStyles={{alignItems:'center'}}>
        <Text style={{fontSize:36,marginBottom:10}}>{"Login"}</Text>
        <TextInput
       
          onChangeText={(val)=>this.updateTextInput(val,InputType.EMAIL)}
          placeholder={InputType.EMAIL}
          value={this.state.emailTextValue}
          style={{width: 300, borderWidth: 1}}
        />
        <TextInput
          onChangeText={(val)=>this.updateTextInput(val,InputType.PASSWORD)}
          placeholder={InputType.PASSWORD}
          value={this.state.passwordTextValue}
          style={{width: 300, borderWidth: 1,marginTop:5,marginBottom:5}}
          secureTextEntry={true}
        />
        <CustomButton onPress={this.handleLogin} title={InputType.LOGIN_BUTTON}/>
      </Container>
    );
  }
}

export default App;
