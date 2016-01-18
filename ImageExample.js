'use strict'

var React = require('react-native')
var {
  Image,
  StyleSheet,
  Text,
  View,
  ActivityIndicatorIOS
} = React;

var NetworkIamgeCallbackExample = React.createClass({
  getInitialState: function() {
    return {
      events: [],
      mountTime:new Date()
    }
  },

  componentWillMount() {
      this.setState({mountTime: new Date()});
  },

  render:function() {
    var { mountTime } = this.state;
    return (
      <View style={{flex:1}}>
        <Image
          style = {styles.base}
          source={this.props.source}
          onLoadStart={() => this._loadEventFired(`开始:${new Date() - mountTime}ms`)}
          onLoad={() => this._loadEventFired(`加载:${new Date() - mountTime}ms`)}
          onLoadEnd={() => this._loadEventFired(`完成:${new Date() - mountTime}ms`)}
          />
          <Text style={{marginTop:20}}>
            {this.state.events.join('\n')}
          </Text>
      </View>
    );
  },

  _loadEventFired(event) {
    this.setState((state) => {
    return state.events = [...state.events, event];
   });
 }
});


var styles = StyleSheet.create({
  base: {
    width: 38,
    height: 38,
  },
})

module.exports = NetworkIamgeCallbackExample;
