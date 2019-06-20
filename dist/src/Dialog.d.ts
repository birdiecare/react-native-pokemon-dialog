import _ from 'lodash';
import React from 'react';
declare type Props = {
    messages: string[];
    onDone: Function;
    wait?: number;
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
    render(): JSX.Element;
}
export default DialogMessage;
