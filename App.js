import React from 'react'; 
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading, Asset } from 'expo';
import Navigation from './navigation';
import { Block } from './components';
import * as constants from './constants';

//import all used images
const images = [
  require('./assets/icons/plants.png'),
  require('./assets/icons/flowers.png'),
  require('./assets/icons/fertilizers.png'),
  require('./assets/icons/sprayers.png'),
  require('./assets/images/pots.png'),
  require('./assets/images/plants_1.png'),
  require('./assets/images/plants_2.png'),
  require('./assets/images/plants_3.png'),
  require('./assets/images/explore_1.png'),
  require('./assets/images/explore_2.png'),
]

export default class App extends React.Component {
  state = {
    isLoadingComplete: false, 
  }

  handleResourcesAsync = async () => {
    // here we cache all images
    // for better performance
    const cacheImages = images.map(img => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages)
  }

  render(){
    if(!this.state.isLoadingComplete && !this.props.skipLoadingScreen){
      <AppLoading
        startAsync={this.handleResourcesAsync}
        onError={err=> console.warn(err)}
        onFinish={()=> this.setState({ isLoadingComplete: true })}
      />
    }
    return (
      <Block white>
        <Navigation />
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  
});
