/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  View,
  Dimensions,
  DrawerLayoutAndroid,
  ToolbarAndroid,
} = React;

var DRAWER_WIDTH_LEFT = 156;
var ImageExample = require('./ImageExample')

var UIExploer = React.createClass({
  render: function() {
    return (
      // 源码 ./node_modules/react-native/Libraries/Components/DrawerAndroid
      <DrawerLayoutAndroid
        drawerPosition={DrawerLayoutAndroid.positions.Left} // 支持Left、Right
        drawerWidth={Dimensions.get('window').width - DRAWER_WIDTH_LEFT}
        keyboardDismissMode="none" // 支持none、on-drag 返回是否阻拦
        ref={(drawer) => { this.drawer = drawer; }}
        renderNavigationView={this._renderNavigationView}>
        <View style={styles.navaitor}>
          <ToolbarAndroid
            style={styles.toolbar}
            title="title"
            titleColor="#white"/>
          <ImageExample source={{uri: 'http://facebook.github.io/origami/public/images/blog-hero.jpg?r=1'}} />
        </View>
      </DrawerLayoutAndroid>
    );
  },
  _renderNavigationView: function() {
   return (
     <View style={styles.drawer}>
     </View>
   );
 }
});

var styles = StyleSheet.create({
  drawer: {
    flex: 1,
    backgroundColor: '#5D9CEC',
  },
  toolbar: {
    backgroundColor: 'blue',
    height: 56,
  },
  navaitor: {
    flex: 1,
    backgroundColor: '#E6E9ED',
  },
});

AppRegistry.registerComponent('UIExploer', () => UIExploer);
