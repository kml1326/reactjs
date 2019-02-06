import React, { Component } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

class Pdf extends Component {
constructor(props) {
  super(props);
    // Create styles
  this.styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });
}

  render() {
    return (
      <Document>
        <Page size="A4" style={this.styles.page}>
          <View style={this.styles.section}>
            <Text>Section #1</Text>
          </View>
          <View style={this.styles.section}>
            <Text>Section #2</Text>
          </View>
        </Page>
      </Document>
    )
  }
}

export default Pdf;
