import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../../conts/colors';
import Button from '../components/Button';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import routes from '../../conts/routes';

const Welcome = ({ navigation }) => {
    const animation =(null);

    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={[COLORS.darkBlue, COLORS.darkBlue]}
        >
            <View style={{ flex: 1 }}>
                <View>
                  
                   <Image
                   source={require('client/assets/LOGO.png')}
                   style={{
                    alignSelf: 'center',
                    width:'80%',
                    height:250,
                    marginTop: 150,

                    }}
                    />
                </View>
                <LottieView 
            
            autoPlay
            loop ={true}
            ref={animation}
            onAnimationFinish={() => console.log('Finished')}
            style ={{
                width: '100%',
                height: '100%',
                alignSelf: 'center',
                marginTop: 100,
                justifyContent: 'center'
            }}
            source={require('client/assets/animations/animation_ln4te7ec.json')}        
        />
                {/* content  */}

                <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 400,
                    width: "100%"
                }}>
                    <Text style={{
                        fontSize: 50,
                        fontWeight: 800,
                        color: COLORS.white
                    }}>Let's Get</Text>
                    <Text style={{
                        fontSize: 46,
                        fontWeight: 800,
                        color: COLORS.white
                    }}>Started</Text>

                    <View style={{ marginVertical: 22 }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white,
                            marginVertical: 4
                        }}>You get a chance to get in touch with nature</Text>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white,
                        }}>Relax, Enjoy Safe and see the stars</Text>
                    </View>

                    <Button
                        title="Join Now"
                        onPress={() => navigation.navigate(routes.REGISTER)}
                        style={{
                            marginTop: 22,
                            width: "100%",
                            
                        
                            
                        }}
                    />
                     {/* ADD xample  */}
                    <View style={{
                        flexDirection: "row",
                        marginTop: 10,
                        justifyContent: "center",
                        
                        
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white
                        }}>Already have an account ?</Text>
                        <Pressable
                            onPress={() => navigation.navigate(routes.LOGIN)}
                        >
                            <Text style={{
                                fontSize: 16,
                                color: COLORS.white,
                                fontWeight: "bold",
                                marginLeft: 4
                            }}>Login</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

export default Welcome