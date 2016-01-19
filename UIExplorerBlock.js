'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = React;

var UIExplorerBlock = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    description: React.PropTypes.string,
  },

  getInitialState: function() {
    return {description: (null: ?string)};
  },

  render: function() {
    var description;
    if (this.props.description) {
      description =
        <Text style={styles.descriptionText}>
          {this.props.description}
        </Text>;
    }

    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            {this.props.title}
          </Text>
          {description}
        </View>
        <View style={styles.children}>
          {this.props.children}
        </View>
      </View>
    );
  }
});

// ./node_modules/react-native/Libraries/Components/View/ 目录下可查看源码
var styles = StyleSheet.create({
  container: {
    borderRadius: 3,  //边线圆角半径
    borderWidth: 0.5, //边线宽度
    borderColor: '#d6d7da', // 边线颜色
    backgroundColor: '#ffffff', // 背景色
    margin: 10,
    marginVertical:5,  // 上边距 会覆盖掉margin
    overflow: 'hidden', // 超出隐藏 还可以是visible
  },
  titleContainer: {
    borderBottomWidth: 0.5, // 只指定一个方向的边线，其他的方向不会有边线
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3, // 保持与父类一致
    borderBottomColor: '#d6d7da',
    backgroundColor: '#f6f7f8',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  titleText: {
    fontSize: 22,
    fontWeight: '500', // 字重，可以选择normal bold 100 200 300 400 500 600 700 800 900
  },
  descriptionText: {
    fontSize: 14,
  },
  children: {
    margin: 10,
  }
});

module.exports = UIExplorerBlock;
