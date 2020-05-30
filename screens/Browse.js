import React, { Component } from 'react'
import { TouchableOpacity, Image,  StyleSheet } from 'react-native';
import { ScrollView} from 'react-native-gesture-handler';
import { Card, Badge, Button, Block, Text } from '../components';
import { theme, mocks } from '../constants';

class Browse extends Component {
    state = {
        active: 'Products'
    }

    renderTab(tab){
        const { active } = this.state;
        const isActive = active === tab;
        return (
            <TouchableOpacity
                key={`tab-${tab}`}
                onPress={()=> this.setState({ active: tab})}
                style={[
                    styles.tab,
                    isActive ? styles.active: null
                ]}
            >
                <Text header medium gray={!isActive} secondary={isActive}>{tab}</Text>
            </TouchableOpacity>

        )
    }

    render() {
        const { profile, navigation } = this.props;
        const tabs = ['Products', 'Inspurations', 'Shop']

        return (
            <Block>
                <Block flex={false} row center space='between' style={style.header}>
                    <Text h1 bold>Browse</Text>
                    <Button onPress={()=> navigation.navigate('Settings')}>
                        <Image
                            source={}
                            style={styles.avatar}
                        />
                    </Button>
                </Block>

                <Block flex={false} row style={style.tabs}>
                    {tabs.map(tab => this.renderTab(tab))}
                </Block>

                <ScrollView 
                    showVerticalScrollIndicator={false} 
                    style={{ paddingVertical: themse.sizes.base * 2}}
                >
                    <Block flex={false} row space="beween" style={style.categories}>
                        {categories.map(category=> {
                            <TouchableOpacity 
                                key={category.name}
                                onPress={()=> navigation.navigate('Explore', { category})}
                            >
                                <Card center middle shadow styles={styles.category}>
                                    <Badge margin={[0, 0, 15]} suze={50} color="rgba(41,216,143,0.20">
                                        <Image source={category.image}/>
                                    </Badge>
                                    <Text medium height={20}>{category.name}</Text>
                                    <Text gray caption>{category.count} products</Text>
                                </Card>
                            </TouchableOpacity>
                        })}
                    </Block>
                </ScrollView>

            </Block>
        )
    }
}

Browse.defaultProps = {
    profile: mocks.profile,
    categories: mocks.categories
}

export default Browse;

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: theme.sizes.base
    },
    avatar: {
        height: theme.sizes.base * 2.2,
        width: theme.sizes.base * 2.2,

    },
    tabs: {
        borderBottomColor: themse.colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: themse.sizes.base,
        marginHorizontal: themse.sizes.base * 2
    },
    tab: {
        marginRight: theme.sizes.base * 2,
        paddingBottom: theme.sizes.base
    },
    active: {
        borderBottomColor: themse.colors.secondary,
        borderBottomWidth: themse.sizes.base
    },
    categories: {
        flexwrap: 'wrap',
        paddingHorizontal: theme.sizes.base * 2,
        marginBottom: theme.sizes.base * 3.5
    },
    category: {
        //make more dynamic for screen widths
        width: 150,
        height: 150
    }
})
