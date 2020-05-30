import React, { Component } from 'react'
import { KeyboardAvoidingView, StyleSheet } from 'react-native';

import { Button, Block, Input, Text } from '../components';
import { theme } from '../constants';

const TEST_EMAIL = 'panda6@panda.com'


export default class Forgot extends Component {
    state = {
        email: '',
        password: '',
        errors: [],
        loading: false,
    }

    handleForgot(){
        const { navigation } = this.props;
        const { email, password, errors } = this.state;
        const errors = [];

        Keyboard.dismiss();
        this.setState({ loading: true });

        // verify login
        if(email !== TEST_EMAIL) {
            errors.push('Incorrect email')
        }
        
        this.setState({ errors, loading: false });

        if (!errors.length){
            Alert.alert(
                'Password reset.',
                'Please check your email.',
                [{
                    text: 'OK', onPress: () => {
                        navigation.navitage('Login')
                    }
                }],
                {cancelable: false}
            );
        } else {
            Alert.alert(
                'Error resetting passworld.',
                'Please check your email is correct.',
                [{
                    text: 'Try again.'
                }],
                {cancelable: false}
            );
        }
    }


    render() {
        const { navigation } = this.props;
        const { loading, errors } = this.state;
        const hasErrors = key => errors.includes(key) ? styles.hasErrors : null
        return (
            <KeyboardAvoidingView style={styles.login} behavior='padding'>
                <Block padding={[0, theme.sizes.base * 2]}>
                    <Text h1 bold> Reset Password </Text>
                    <Block middle>
                        <Input 
                            label="Email"
                            error={hasErrors('email')}
                            style={[styles.input, hasErrors('email')]}
                            defaultValue={this.state.email}
                            onChangeText={text=> this.setState({email: text})}
                        />
                        <Input 
                            secure
                            label="Password"
                            error={hasErrors('password')}
                            style={[styles.input, hasErrors('password')]}
                            defaultValue={this.state.password}
                            onChangeText={text=> this.setState({password: text})}
                        />
                        <Button gradient onPress={()=> this.handleForgot()}>
                            {loading ? 
                                <ActivityIndicator size="small" color="white" /> : 
                                <Text bold white center>Reset</Text>
                            }
                        </Button>
                        <Button onPress={()=> navigation.navigate('Login')}>
                            <Text gray caption center style={{ textDecorationLine: 'underline'}}>
                                Back to Login
                            </Text>
                        </Button>
                        

                    </Block>
                </Block>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    login: {
        flex: 1,
        justifyContent: 'center',

    },

    input: {
        borderRadius: 0,
        borderWidth: 0,
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    hasErrors: {
        borderBottomColor: theme.colors.accent
}})
