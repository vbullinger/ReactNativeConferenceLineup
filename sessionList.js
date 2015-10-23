'use strict';

var React = require('react-native');
var {
  ListView,
  Text,
  TouchableHighlight,
  View
} = React;

var globals = require('./globals');
var schedule = require('./openSourceNorthSchedule')
var SessionDetails = require('./sessionDetails');
var styles = require('./styles');
var _ = require('lodash');

var appTitle = globals.appTitle;

var SessionList = React.createClass({
  getInitialState: function() {
    var getSectionData = (dataBlob, sectionID) => {
      return dataBlob[sectionID];
    };

    var getRowData = (dataBlob, sectionID, rowID) => {
      return dataBlob[sectionID][rowID];
    };

    var ds = new ListView.DataSource({
      getRowData: getRowData,
      getSectionData: getSectionData,
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });

    var thisSessionList = this;

    var sessions = _.filter(schedule, function(session){
      return session[0] === thisSessionList.props.tab;
    });

    var sessionGroups = _.groupBy(sessions, function(session){
      return session[1];
    });

    var sectionIDs = _.uniq(_.pluck(sessions, 1));

    var rowIDs = [];

    _.each(sectionIDs, function(id){
      rowIDs.push(_.range(_.filter(sessions, function(session){
        return session[1] == id;
      }).length));
    });

    return {
      dataSource: ds.cloneWithRowsAndSections(sessionGroups, sectionIDs, rowIDs),
    };
  },

  render: function() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        initialListSize='12'
        renderRow={this.renderRow}
        renderSectionHeader={this.renderSectionHeader}
      />
    );
  },

  renderRow(rowData) {
    var thisSessionList = this;
    var columnIndex = this.props.tab == 'Sessions' ? 6 : this.props.tab == 'Speakers' ? 3 : 4;

    return (
      <TouchableHighlight onPress={() => {
        thisSessionList.props.navigator.push({
          component: SessionDetails,
          title: appTitle,
          passProps: { sessionData: rowData, columnIndex: columnIndex }
        })}}>
        <View style={styles.row}>
          <Text style={styles.rowText}>{rowData[columnIndex]}</Text>
        </View>
      </TouchableHighlight>
    );
  },

  renderSectionHeader(sectionData, sectionID) {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{sectionID} {this.props.tab}</Text>
      </View>
    );
  }
});

module.exports = SessionList;