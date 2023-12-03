import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
  Pressable
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../../conts/colors';
import routes from '../../conts/routes';
import Button from '../components/Button';
import Input from '../components/Input';
import Loader from '../components/Loader';
import axios from 'axios';
import { IpAdd } from 'client/utils/key.js';


const RegistrationScreen = ({navigation}) => {
    // const navigation = useNavigation()
    const [fullName, setFullname] = useState("")
    const [address, setAddress] = useState ("")
    const [phoneNum, setphoneNum] = useState ("")
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState ("")
    const createAccount = () => {
      console.log("line30");
        console.log(fullName);
        console.log(address);
        console.log(phoneNum);
        console.log(username);
        console.log(email);
        console.log(password);
      axios.post (`${IpAdd()}/server`, {
        
        fullName: fullName,
        address: address,
        phoneNum:phoneNum,
        username:username,
        email:email,
        password:password,
      })
      .then((result) => 
      {
        console.log(result)
        if(result.data.success) 
        {
          navigation.navigate("LoginScreen")
          console.log("Success ")
        }
        else 
        {
            // navigation.navigate("Validate")
            console.log("Faild")
        }
      })
    }
  const [inputs, setInputs] = React.useState({
    email: '',
     fullName: '',
    phoneNum: '',
    address: '',
    username: '',
    password: '',
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = () => {

    console.log(inputs.email)
    console.log(inputs.address)
    console.log(inputs.phoneNum)
    console.log(inputs.username)
    console.log(inputs.fullName)
    console.log(inputs.password)

    Keyboard.dismiss();
    let isValid = true;
    
    //fullName
    if (!fullName) {
      handleError('Please input fullnNme!', 'fullName');
      isValid = false;
    }else if(fullName.length < 10){
        handleError('Min password length of 10!', 'fullName');
      isValid = false;
    }

    //Address
    if (!address) {
        handleError('Please input Address!', 'address');
        isValid = false;
    }else if(address.length < 10){
        handleError('Min address length of 10!', 'address');
      isValid = false;
    }
    //phone
    if (!phoneNum) {
      handleError('Please input phone number!', 'phoneNum');
      isValid = false;
    }
    // else if (phoneNum.match (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/)) {
    //     handleError('Must use philippines phone number!', 'phoneNum');
    //     isValid = false;
    //   }


      //email
    if (!email) {
        handleError('Please input email!', 'email');
        isValid = false;
      } 
      // else if (email.match(/\S+@\S+\.\S+/)) {
      //   handleError('Please input a valid email!', 'email');
      //   isValid = false;
      // }

      //username
      if(!username){
        handleError("Please input Username!", 'username');
        isValid = false;
      }else if(username.length < 5){
        handleError('Min username length of 5!', 'username');
      isValid = false;
    }

    //Password
    if (!password) {
      handleError('Please input password!', 'password');
      isValid = false;
    } else if (password.length < 5) {
      handleError('Min password length of 5!', 'password');
      isValid = false;
    }else if (typeof password === 'string' && password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/)){
        handleError('Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters!', 'password');
        isValid = false;
    }
    console.log(isValid);

    if (isValid) {
      createAccount();
      // createAccount();
    }
  };

  // 

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{paddingTop: 50, paddingHorizontal: 20}}>
        <Text style={{color: COLORS.black, fontSize: 40, fontWeight: 'bold', alignSelf: 'center'}}>
          Register
        </Text>
    
        <View style={{marginVertical: 20}}>
          
          
         <Input
            // onChange={text => handleOnchange(text, 'fullname')}

             onChange={(e) => setFullname(e)}
            //  onChange ={text => handleOnchange(text, 'fullName')}
            onFocus={() => handleError(null, 'fullName')}
            iconName="account-outline"
            label="Full Name"
            placeholder="Enter your Full Name"
            error={errors.fullName}
          /> 

          <Input
            keyboardType="numeric"
            onChange={(e) => setphoneNum(e)}
            // onChange={text => handleOnchange(text, 'phone')}
            onFocus={() => handleError(null, 'phoneNum')}
            iconName="phone-outline"
            label="Phone Number"
            placeholder="Enter your Phone Number"
            error={errors.phoneNum}
          />  

              <Input
              onChange={(e) => setAddress(e)}
            // onChange={text => handleOnchange(text, 'address')}
            onFocus={() => handleError(null, 'address')}
            iconName="home-heart"
            label="Address"
            placeholder="Enter your full address"
            error={errors.address}
          />
          <Input
          onChange={(e) => setEmail(e)}
            // onChange={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            label="Email"
            placeholder="Enter your email address"
            error={errors.email}
          />

          
            <Input
            onChange={(e) => setUserName(e)}
            // onChange={text => handleOnchange(text, 'username')}
            onFocus={() => handleError(null, 'username')}
            iconName="account-cowboy-hat"
            label="Username"
            placeholder="Enter your Username"
            error={errors.username}
          />


          <Input
            onChange={(e) => setPassword(e)}
            // onChange={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Password"
            placeholder="Enter your password"
            error={errors.password}
            password
          />
          <Button title="Register" onPress={validate } />
          <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16, color: COLORS.black }}>Already have an account?</Text>
                    <Pressable
                        onPress={() => navigation.navigate(routes.LOGIN)}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.primary,
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>Login</Text>
                    </Pressable>
                </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;