'use strict';

var React = require('react-native');
var {
  Text,
  View
} = React;

var styles = require('./styles');

var SessionDetails = React.createClass({
  render: function() {
    var sessionData = this.props.sessionData;
    console.log(sessionData);

    return (
      <View style={styles.flex}>
        <Text style={styles.title}>
          {sessionData[6]}
        </Text>
        <View style={styles.horizontal}>
          <Text style={styles.label}>
            Day:
          </Text>
          <Text style={styles.field}>
            {sessionData[0]}
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
            Category:
          </Text>
          <Text style={styles.field}>
            {sessionData[4]}
          </Text>
        </View>
        <View style={styles.horizontal}>
          <Text style={styles.label}>
            Level:
          </Text>
          <Text style={styles.field}>
            {sessionData[5]}
          </Text>
        </View>
      </View>
    );
  }
});

module.exports = SessionDetails;