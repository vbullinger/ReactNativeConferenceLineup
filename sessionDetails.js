'use strict';

var React = require('react-native');
var {
  Text,
  View
} = React;

var styles = require('./styles');

var SessionDetails = React.createClass({
  render: function() {
  debugger;
    var sessionData = this.props.sessionData;
    var columnIndex = this.props.columnIndex;

    return (
      <View style={styles.flex}>
        <Text style={styles.title}>
          {sessionData[columnIndex]}
        </Text>
        <View style={styles.horizontal}>
          <Text style={styles.label}>
            Title:
          </Text>
          <Text style={styles.field}>
            {sessionData[6]}
          </Text>
        </View>
        <View style={styles.horizontal}>
          <Text style={styles.label}>
            Time:
          </Text>
          <Text style={styles.field}>
            {sessionData[1]}
          </Text>
        </View>
        <View style={styles.horizontal}>
          <Text style={styles.label}>
            Room:
          </Text>
          <Text style={styles.field}>
            {sessionData[2]}
          </Text>
        </View>
        <View style={styles.horizontal}>
          <Text style={styles.label}>
            Presenter:
          </Text>
          <Text style={styles.field}>
            {sessionData[3]}
          </Text>
        </View>
        <View style={styles.horizontal}>
          <Text style={styles.label}>
            Track:
          </Text>
          <Text style={styles.field}>
            {sessionData[4]}
          </Text>
        </View>
      </View>
    );
  }
});

module.exports = SessionDetails;