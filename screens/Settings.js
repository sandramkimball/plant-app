import React, { Component } from 'react'
import { Image, ScrollView, StyleSheet, TextInput } from 'react-native';
import { Divider, Button, Block, Text, Switch } from '../components';
import { theme, mocks } from '../constants';
import Slider from 'react-native-slider';

class Settings extends Component {
    state = {
        budget: 900,
        monthly: 950,
        notifications: true,
        newsletter: true,
        editing: null,
        profile: {},
    }

    componentDidMount(){
        this.setState({ profile: this.props.profile })
    }

    handleEdit(name, text){
        const { profile } = this.state;
        profile[name] = text;
        this.setState({ profile })
    }

    toggleEdit(name){
        const { editing } = this.state;
        this.setState({ editing: !editing ? name : null })
    }

    renderEdit(name){
        const { profile, editing } = this.state;
        if (editing === name){
            return (
                <TextInput
                    defaultValue={profile[name]}
                    onChangeText={text=> this.handleEdit([name], text)}
                />
            )
        }
        return <Text bold>{profile[name]}</Text>
    }

    render(){
        const { navigation } = this.props;
        const { profile, editing } = this.state;
        return(
            <Block>
            <Block>
                <Block flex={false} row center space='between' style={style.header}>
                    <Text h1 bold>Settings</Text>
                    <Button>
                        <Image
                            source={profile.avatar}
                            style={styles.avatar}
                        />
                    </Button>
                </Block>
            </Block>    
        
            <ScrollView showVerticalScrollIndicator={false}>
                <Block style={styles.inputs}>
                    <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
                        <Block>
                            <Text gray2 style={{marginBottom: 10}}>Name</Text>
                            {this.renderEdit('name')}
                        </Block>
                        <Block>
                            <Text medium secondary onPress={()=> this.toggleEdit('name')}>
                                {editing === 'name' ? 'Save' : 'Edit'}
                            </Text>
                        </Block>
                    </Block>
                    <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
                        <Block>
                            <Text gray2 style={{marginBottom: 10}}>Email</Text>
                            <Text bold>{profile.email}</Text>
                        </Block>
                    </Block>
                    <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
                        <Block>
                            <Text gray2 style={{marginBottom: 10}}>Location</Text>
                            {this.renderEdit('location')}
                            <Text bold>{profile.location}</Text>
                        </Block>
                        <Block>
                            <Text medium secondary onPress={()=> this.toggleEdit('location')}>
                                {editing === 'location' ? 'Save' : 'Edit'}
                            </Text>
                        </Block>
                    </Block>
                </Block>
 
                <Divider />

                <Block style={styles.slider}>
                    <Block margin={[10, 0]}>
                        <Text gray2 style={{ marginBottom: 10 }}>Budget</Text>
                        <Slider
                            minimimValue={0}
                            maximumValue={1000}
                            style={{height: 19}}
                            thumbStyle={styles.thumb}
                            trackStyle={{height: 6, borderRadius: 6}}
                            minimumTrackTintColor={theme.colors.secondary}
                            maximumTrackTintColor="rgba(157, 161, 163, 188, 0.10)"
                            value={this.state.budget}
                            onValueChange={value=> this.setState({budget: value})}
                        />
                        <Text caption gray2 right>${this.state.budget}</Text>
                    </Block>

                    <Divider margin={[theme.sizes.base, theme.sizes.base * 2]} />

                    <Block margin={[10, 0]}>
                        <Text gray2 style={{ marginBottom: 10 }}>Monthly Cap</Text>
                        <Slider
                            minimimValue={0}
                            maximumValue={5000}
                            style={{height: 19}}
                            thumbStyle={styles.thumb}
                            trackStyle={{height: 6, borderRadius: 6}}
                            minimumTrackTintColor={theme.colors.secondary}
                            maximumTrackTintColor="rgba(157, 161, 163, 188, 0.10)"
                            value={this.state.monthly}
                            onValueChange={value=> this.setState({monthly: value})}
                        />
                        <Text caption gray2>${this.state.monthly}</Text>
                    </Block>
                </Block>
  
                <Divider />

                <Block style={styles.toggles}>
                    <Block row center space="between" style={{marginBottom: theme.sizes.base * 2}}>
                        <Text size={16} gray2>Notifications</Text>
                        <Switch
                            value={this.state.notifications}
                            onValueChange={value=>this.setState({notifications: value})}
                        />
                    </Block>
                    <Block row center space="between" style={{marginBottom: theme.sizes.base * 2}}>
                        <Text size={16} gray2>Newsletter</Text>
                        <Switch
                            value={this.state.newsletter}
                            onValueChange={value=>this.setState({newsletter: value})}
                        />
                    </Block>
                </Block>


            </ScrollView>
            </Block>
        )
    }
}

Settings.defaultProps = {
    profile: mocks.profile,
}


export default Settings;

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: theme.sizes.base
    },
    avatar: {
        height: theme.sizes.base * 2.2,
        width: theme.sizes.base * 2.2,

    },
    inputs: {
        marginTop: theme.sizes.base * 0.7,
        paddingHorizontal: theme.sizes.base * 2,
    },
    inputRow: {
        alignItems: 'flex-end',
    },
    slider: {
        marginTop: theme.sizes.base * 0.7,
        paddingHorizontal: theme.sizes.base * 2,
    },
    thumb: {
        width: theme.sizes.base,
        height: theme.sizes.base,
        borderRadius: theme.sizes.base,
        borderColor: 'white',
        borderWidth: 3,
        backgroundColor: theme.colors.secondary,
    },
    toggles: {
        marginTop: theme.sizes.base * 0.7,
        paddingHorizontal: theme.sizes.base * 2,
    }
})