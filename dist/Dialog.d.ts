import _ from 'lodash';
import React from 'react';
import { ImageSourcePropType } from 'react-native';
declare type Props = {
    messages: string[];
    onDone: Function;
    withChevron: boolean;
    wait?: number;
    iconSource?: ImageSourcePropType;
};
declare type State = {
    messages: string[];
    displayedMessage: string;
    cursor: number;
};
declare class DialogMessage extends React.Component<Props, State> {
    constructor(props: Props);
    handleClick: () => void;
    updateDisplayedMessage: (() => void) & _.Cancelable;
    isMessageFullyDisplayed: () => boolean;
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
}
export default DialogMessage;
