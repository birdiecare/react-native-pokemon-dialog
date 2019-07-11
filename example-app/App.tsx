import React from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';
import Dialog from 'react-native-pokemon-dialog';

const professorOakFace = require('./assets/professor-oak.png');

class App extends React.Component<{}, { visible: boolean }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      visible: false,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Click to see dialog" onPress={() => this.setState({ visible: true })} />
        {this.state.visible ? <Dialog
          messages={[
            'Welcome to an adventure you will never forget.',
            `I'm Oak, and to train them is my cause.`,
            `You will travel across the land, searching far and wide.`,
            `To understand the power that is inside.`,
          ]}
          onDone={() => this.setState({ visible: false })}
          wait={20}
          withChevron
          iconSource={professorOakFace}
        /> : null}
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
