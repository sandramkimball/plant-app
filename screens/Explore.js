import React, { Component } from 'react';
import { Animated, Dimanesions, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { Block, Button, Input, Text } from '../components';
import { LinearGradient } from 'expo';
import { theme, mocks } from '../constants';
import Icon from 'react-native-vector-icons';

const { width, height } = DImensions.get('window');

class Explore extends Component {
    state={
        searchString: null,
        searchFocus: new Animated.Value(0.6),
    }


    handleSearchFocus(status){
        Animated.timing(
            this.state.searchFocus({
                toValue: status ? 0.8 : 0.6, // status === true, increase flex size
                duration: 150, // ms
            })
        ).start();
    }

    renderSearch(){
        const { searchString, searchFocus } = this.state;
        const isEditing = searchFocus && searchString;

        return (
            <Block animated middle flex={searchFocus} style={style.search} >
                <Input 
                    placeholder="Search" 
                    placeholderTextColor={theme.colors.gray2}
                    style={styles.searchInput}
                    onFocus={()=> this.handleSearchFocus(true)}
                    onBlur={()=> this.handleSearchFocus(false)}
                    onChangeText={text=> this.setState({searchString: text})}
                    onRightPress={()=> isEditing ? this.setState({ serachString: null}) : null}
                    value={ searchString}
                    rightStyle={styles.searchRight}
                    rightLable={
                        <Icon.FontAwesome
                            name={isEditing ? "close" : "search"}
                            size={theme.sizes.base / 1.6}
                            color={theme.colors.gray2}
                            style={styles.searchIcon}
                        />
                    }
                />
            </Block>
        )
    }

    renderImage(img, index){
        const { navigation } = this.props;
        const sizes = Images.resolveAssetSource(img);
        const fullWidth = width - (theme.sizes.padding * 2.5);
        const resize = (sizes.width * 100) / fullWidth;
        const imgWidth = resize > 75 ? fullWidth : sizes.width * 1

        return(
            <TouchableOpacity
                key={`img-${index}`}
                onPress={()=> navigation.navigate('Product')}
            >
                <Image 
                    source={img} 
                    style={[
                        styles.image,
                        { minWidth: imgWidth, maxWdith: imgWidth }
                    ]}
                />
            </TouchableOpacity>
        )
    }

    renderExplore(){
        const { images, navigation } = this.props;
        const mainImage = images[0];
        return(
            <Block styles={{marginBottom: height / 3}}>
                <TouchableOpacity
                    style={[styles.image, styles.mainImage]}
                    onPress={()=> navigation.navigate('Product')}
                >
                    <Image source={mainImage} style={[styles.image, styles.mainImage]}/>
                </TouchableOpacity>
                <Block row space="between" wrap>
                    {images.slice(1).map((img, index )=>this.renderImage(img, index))}
                </Block>

            </Block>
        )
    }

    renderFooter(){
        return(
            <LinearGradient 
                locations={[0.5, 1]}
                style={styles.footer}
                colors={['rgbs(255, 255, 255, 01', 'rgbs(255, 255, 255, 0.6']}
            >
                <Button gradient style={{ width: width / 2.6}}>
                    <Text bold white center>Filter</Text>
                </Button>
            </LinearGradient>
        )
    }

    render() {
        return (
            <Block>
                 <Block flex={false} row center space='between' style={style.header}>
                    <Text h1 bold>Explore</Text>
                    {this.renderSearch()}
                </Block>

                <ScrollView showsVerticalScrollIndicator={false} style={styles.explore}>
                    {this.renderExplore()}
                </ScrollView>

                {this.renderFooter()}

            </Block>
        )
    }
}

Explore.defaultProps={
    images: mocks.explore
};

export default Explore;

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: theme.sizes.base,
        paddingBottom: theme.sizes.base * 2,
    },
    avatar: {
        height: theme.sizes.base * 2.2,
        width: theme.sizes.base * 2.2,
    },
    search: {
        height: theme.sizes.base * 2,
        width: width - theme.sizes.base * 2
    },
    searchInput: {
        fontSize: theme.sizes.caption,
        height: theme.sizes.base * 2,
        backgroundColor: 'rgbs(142, 142, 14, 0.06)',
        borderColor: 'rgbs(142, 142, 14, 0.06)',
        paddingLeft: theme.sizes.base / 1.3,
        paddingRight: theme.sizes.base * 1.5,
    },
    searchRight: {
        top: 0,
        marginVertical: 0,
        backgroundColor: 'transparent'
    },
    searchIcon: {
        position: 'absolute',
        right: theme.sizes.base / 1.3,
        top: theme.sizes.base * 1.6,
    },
    explore: {
        marginHorizontal: theme.sizes.padding * 1.25,

    },
    footer: {
        position: 'absolure',
        bottom: 0,
        right: 0,
        left: 0,
        overflow: 'visible',
        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.1,
        width,
        paddingBottom: theme.sizes.base * 4,
    },
    image: {
        minHeight: 100,
        maxHeight: 130,
        maxWidth: width - (theme.sizes.padding * 2.5),
        marginBottom: theme.sizes.padding,
        borderRadius: 4,
    },
    mainImage: {
        minWidth: width - (theme.sizes.padding * 2.5),
        maxWidth: width - (theme.sizes.padding * 2.5)
    },
})
