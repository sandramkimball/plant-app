import React, { Component } from 'react';
import { TouchableOpacity, FlatList, Image, ScrollView, StyleSheet } from 'react-native';
import { Block, Divider, Button, Text } from '../components';
import { theme, mocks } from '../constants';
import Icon from 'react-native-vector-icons';

class Product extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: (
                <Button onPress={()=> naviagtion.goBack()}>
                    <Icon.Entpe name="dots-three-horizontal" color={theme.colors.gray}/>
                </Button>
            )
        }
    }

    renderGallery(){
        const { product } = this.props;

        return(
            <FlatList
                horizontal
                pagingEnabled
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                snapToAlignment="center"
                data={product.images}
                keyExtractor={(item, index)=> `${item}`}
                renderItem={item=> (
                    <Image 
                        source={item}
                        resizeMode="contain"
                        style={{width, height: height / 2.8}}
                    />
                )}
            />
        )
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                {this.renderGallery()}
                
                <Block style={styles.product}>
                    <Text>{product.name}</Text>
                    <Block flex={false} row margin={[theme.sizes.base, 0]}>
                        {product.tags.map(tag=> (
                            <Text caption gray style={styles.tag} key={`tag-${tag}`}>
                                {tag}
                            </Text>
                        ))}
                    </Block>
                    <Text gray light height={22}>{product.description}</Text>
                    
                    <Divider margin={[theme.sizes.padding, 0]}/>

                    <Block>
                        <Text semibold>Gallery</Text>
                        <Block row margin={[theme.sizes.margin, 0]}>
                            {product.images.slice(1, 3).map(image => (
                                    <Image 
                                        source={image} 
                                        stlye={styles.image}
                                        key={`gallery-${index}`}
                                    />
                            ))}
                            <Block 
                                flex={false} 
                                card 
                                center 
                                middle 
                                color="rgba(197, 204, 214, 0.20)"
                            >
                                <Text gray>+{product.images.slice(3).length}</Text>
                            </Block>
                        </Block>
                    </Block>

                </Block>

                
            </ScrollView>
        )
    }
}

Product.defaultProps = {
    product: mocks.product[0]
}
export default  Product;

const styles = StyleSheet.create({
    product: {
        paddingHorizontal: theme.sizes.base * 2,
        paddingVertical: theme.sizes.padding,
    },
    tag: {
        borderColor: theme.colors.gray,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: theme.sizes.base,
        paddingHorizontal: theme.sizes.base,
        paddingVertical: theme.sizes.padding / 3,
        marginRight: theme.sizes.base * 0.5,
        
    },
    image: {
        width: width / 3.26,
        height: width / 3.26,
        marginRight: theme.sizes.base,
    
    },
    more: {
        width: 55,
        height: 55
    }
})
