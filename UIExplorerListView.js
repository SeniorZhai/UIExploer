'use strict';

var React = require('react-native');
var {
  View,
  ListView,
  Text,
  StyleSheet,
} = React;
var UIExplorerList = React.createClass({

  getInitialState: function() {
     var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     return {
        dataSource: ds.cloneWithRows(['row1','row2','row3','row4','row5','row6','row7','row8','row9','row10','row11','row12']),
      };
   },

  render: function(){
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text style={styles.item}>{rowData}</Text>}
      />
    );
  },
});

var styles = StyleSheet.create({
  item:{
    borderRadius: 3,  //边线圆角半径
    borderWidth: 0.5, //边线宽度
    borderColor: '#d6d7da', // 边线颜色
    backgroundColor: '#ffffff',
    padding:10,
    margin: 10,
    justifyContent: 'center',
  }
});

module.exports = UIExplorerList;
