"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __importDefault(require("lodash"));
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var styles = {
    fullScreenOverlay: {
        position: 'absolute',
        top: 0,
        zIndex: 1,
        width: '100%',
        height: '100%',
        opacity: 0.6,
        backgroundColor: 'black',
    },
    fixedBottomContainer: {
        position: 'absolute',
        bottom: 55,
        zIndex: 2,
        height: '20%',
        backgroundColor: 'transparent',
        opacity: 1,
    },
    dialogContainer: {
        position: 'relative',
        padding: 10,
        minWidth: '85%',
        maxWidth: '85%',
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: '#444444',
    }
};
var DialogMessage = /** @class */ (function (_super) {
    __extends(DialogMessage, _super);
    function DialogMessage(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function () {
            if (_this.state.messages.length === 1) {
                _this.props.onDone && _this.props.onDone();
                return;
            }
            _this.state.messages.shift();
            _this.setState({
                messages: _this.state.messages,
                displayedMessage: '',
                cursor: 0,
            });
        };
        _this.updateDisplayedMessage = lodash_1.default.throttle(function () {
            if (_this.isMessageFullyDisplayed()) {
                return;
            }
            var newCursor = _this.state.cursor + 1;
            var newMessage = _this.state.messages[0].slice(0, _this.state.cursor);
            _this.setState({
                displayedMessage: newMessage,
                cursor: newCursor,
            });
        }, _this.props.wait || 40);
        _this.isMessageFullyDisplayed = function () {
            return _this.state.displayedMessage === _this.state.messages[0];
        };
        _this.state = {
            messages: props.messages,
            displayedMessage: '',
            cursor: 0,
        };
        return _this;
    }
    DialogMessage.prototype.render = function () {
        this.updateDisplayedMessage();
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_native_1.View, { style: styles.fullScreenOverlay }),
            react_1.default.createElement(react_native_1.View, { style: styles.fixedBottomContainer },
                react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: this.handleClick },
                    react_1.default.createElement(react_native_1.View, { style: styles.dialogContainer },
                        react_1.default.createElement(react_native_1.Text, null,
                            " Prout",
                            this.state.displayedMessage))))));
    };
    return DialogMessage;
}(react_1.default.Component));
exports.default = DialogMessage;
