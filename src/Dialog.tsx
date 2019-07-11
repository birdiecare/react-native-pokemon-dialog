import _ from 'lodash';
import React from 'react';
import { Text, TouchableOpacity, View, Image, ImageSourcePropType } from 'react-native';

const styles = {
  fullScreenOverlay: {
    position: 'absolute' as 'absolute',
    top: 0,
    zIndex: 1,
    width: '100%',
    height: '100%',
    opacity: 0.6,
    backgroundColor: 'black',
  },
  fixedBottomContainer: {
    position: 'absolute' as 'absolute',
    bottom: 55,
    zIndex: 2,
    height: '20%',
    width: '100%',
    backgroundColor: 'transparent',
    alignItems: 'center' as 'center',
    flexDirection: 'row' as 'row',
    opacity: 1,
  },
  dialogContainer: {
    position: 'relative' as 'relative',
    padding: 10,
    minWidth: '85%',
    maxWidth: '85%',
    borderWidth: 1,
    backgroundColor: 'white',
    flexDirection: 'row' as 'row',
    alignItems: 'flex-start' as 'flex-start',
    justifyContent: 'flex-start' as 'flex-start',
    borderColor: '#444444',
  },
  chevron: {
    position: 'absolute' as 'absolute',
    right: 5,
    bottom: 0,
    width: 15,
    fontSize: 24,
  }
}

type Props = {
  messages: string[];
  onDone: Function;
  withChevron: boolean;
  wait?: number;
  iconSource?: ImageSourcePropType,
};

type State = {
  messages: string[];
  displayedMessage: string;
  cursor: number;
};

class DialogMessage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      messages: props.messages,
      displayedMessage: '',
      cursor: 0,
    };
  }

  handleClick = () => {
    if (this.state.messages.length === 1) {
      this.props.onDone && this.props.onDone();
      return;
    }

    this.state.messages.shift();
    this.setState({
      messages: this.state.messages,
      displayedMessage: '',
      cursor: 0,
    });
  };

  updateDisplayedMessage = _.throttle(() => {
    if (this.isMessageFullyDisplayed()) {
      return;
    }

    const newCursor = this.state.cursor + 1;
    const newMessage = this.state.messages[0].slice(0, this.state.cursor);

    this.setState({
      displayedMessage: newMessage,
      cursor: newCursor,
    });
  }, this.props.wait || 40);

  isMessageFullyDisplayed = () =>
    this.state.displayedMessage === this.state.messages[0];

  componentDidMount() {
    this.updateDisplayedMessage();
  }

  componentDidUpdate() {
    this.updateDisplayedMessage();
  }

  render() {
    return (<>
        <View style={styles.fullScreenOverlay} />
        <View style={styles.fixedBottomContainer} >
            {this.props.iconSource ? <Image source={this.props.iconSource} style={{ width: '20%', height: 50 }} /> : null}
            <TouchableOpacity onPress={this.handleClick}>
              <View style={styles.dialogContainer}>
                <Text>{this.state.displayedMessage}</Text>
                {this.props.withChevron ? <Text style={styles.chevron}>{this.isMessageFullyDisplayed() && this.state.messages.length > 1 ? '▾' : ''}</Text> : null}
              </View>
            </TouchableOpacity>
        </View>
      </>);
  }
}

export default DialogMessage;
