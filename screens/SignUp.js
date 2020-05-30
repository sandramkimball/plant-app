import React, { Component } from 'react'
import { KeyboardAvoidingView, Image, FlatList, Modal, StyleSheet } from 'react-native';

import { Button, Block, Input, Text } from '../components';
import { theme } from '../constants';

export default class SignUp extends Component {
    state = {
        email: '',
        name: '',
        password: '',
        errors: [],
        loading: false,
    }

    handleSignUp(){
        const { navigation } = this.props;
        const { email, password, name, errors } = this.state;
        const errors = [];

        Keyboard.dismiss();
        this.setState({ loading: true });

        // verify login
        if(!email) {errors.push('Please enter a valid email.')}        
        if(!password) {errors.push('Please enter a password')}
        if(!name){errors.push('Please enter a name.')}
        if(password.length < 8) {
            errors.push('Password must be a minimum of 8 characters.')
        }

        this.setState({ errors, loading: false });

        if (!errors.length){
            Alert.alert(
                'Sucess!',
                'New account created.',
                [{
                    text: 'Continue', onPress: () => {
                        navigation.navitage('Browse')
                    }
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
            <KeyboardAvoidingView style={styles.signup} behavior='padding'>
                <Text h1 bold> Sign Up </Text>
                <Block middle>
                    <Input 
                        label="Email"
                        error={hasErrors('email')}
                        style={[styles.input, hasErrors('email')]}
                        defaultValue={this.state.email}
                        onChangeText={text=> this.setState({email: text})}
                    />
                    <Input 
                        label="First Name"
                        error={hasErrors('name')}
                        style={[styles.input, hasErrors('name')]}
                        defaultValue={this.state.name}
                        onChangeText={text=> this.setState({name: text})}
                    />
                    <Input 
                        secure
                        label="Password"
                        error={hasErrors('password')}
                        style={[styles.input, hasErrors('password')]}
                        defaultValue={this.state.password}
                        onChangeText={text=> this.setState({password: text})}
                    />
                    <Button gradient onPress={()=> this.handleSignUp()}>
                        {loading ? 
                            <ActivityIndicator size="small" color="white" /> : 
                            <Text bold white center>Sign Up</Text>
                        }
                    </Button>
                    <Button gradient onPress={()=> navigation.navigate('Login')}>
                        <Text gray caption center style={{ textDecorationLine: 'underline'}}>
                            Back to Login
                        </Text>
                    </Button>
                </Block>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    signup: {
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
