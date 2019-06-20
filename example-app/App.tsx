import React from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';
import Dialog from 'react-native-pokemon-dialog';

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
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non mi vitae orci imperdiet porttitor at eget arcu. Fusce ut neque maximus, laoreet turpis eget, rhoncus arcu.',
            'Ut interdum est mi, at viverra nulla condimentum at. Nulla tempor nunc id sollicitudin auctor. Praesent sodales feugiat odio ac aliquet.',
            'Aliquam erat volutpat. Duis consectetur, massa non tincidunt fermentum, turpis lectus venenatis quam, a commodo urna tortor at lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Praesent urna arcu, efficitur in efficitur non, faucibus id ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
          ]}
          onDone={() => this.setState({ visible: false })}
          wait={20}
          withChevron
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
