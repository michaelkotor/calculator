import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";

import Calc from 'expression-calculator';

import InputNumberButton from "./InputNumberButton.js";

const buttons = [
    ["CLEAR", "DEL"],
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["0", ".", "=", "+"]
];

export default class App extends Component {
    constructor() {
        super();
        this.initialState = {
            displayValue: "0",
        };
        this.state = this.initialState;
    }

    renderButtons() {
        return buttons.map((buttonRows, index) => {
            let rowItem = buttonRows.map((buttonItems, buttonIndex) => {
                return (
                    <InputNumberButton
                        value={buttonItems}
                        handleOnPress={this.handleInput.bind(this, buttonItems)}
                        key={"btn-" + buttonIndex}
                    />
                );
            });

            return (
                <View style={styles.inputRow} key={"row-" + index}>
                    {rowItem}
                </View>
            );
        });
    }

    handleInput = input => {
        const {
            displayValue
        } = this.state;

        switch (input) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                if (displayValue === "0") {
                    this.setState({displayValue: input});
                } else {
                    this.setState({displayValue: displayValue + input});
                }
                break;

            case "+":
            case "-":
            case "*":
            case "/":
                if(displayValue[displayValue.length - 1] === '.') {
                    break;
                }
                if(!isNaN(displayValue[displayValue.length - 1])) {
                    this.setState({displayValue: displayValue + input});
                } else {
                    this.setState({displayValue: displayValue.slice(0, -1) + input});
                }
                break;
            case ".":
                if(!isNaN(displayValue[displayValue.length - 1])) {
                    this.setState({displayValue: displayValue + input});
                }
                break;
            case "=":
                if(!isNaN(displayValue[displayValue.length - 1])) {
                    const calc = new Calc(displayValue);
                    const result = calc.calc();
                    this.setState({displayValue: result + ""});
                }
                break;
            case "CLEAR":
                this.setState({displayValue: "0"});
                break;
            case "DEL":
                if (displayValue.length === 1) {
                    this.setState({displayValue: "0"});
                } else {
                    this.setState({displayValue: displayValue.slice(0, -1)});
                }
                break;
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.resultContainer}>
                    <Text style={styles.resultText}>{this.state.displayValue}</Text>
                </View>
                <View style={styles.inputContainer}>{this.renderButtons()}</View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    resultContainer: {
        flex: 2,
        backgroundColor: "#373737",
        justifyContent: "center"
    },
    inputContainer: {
        flex: 8,
        backgroundColor: "#535353"
    },
    resultText: {
        color: "white",
        fontSize: 80,
        fontWeight: "bold",
        padding: 20,
        textAlign: "right"
    },
    inputRow: {
        flex: 1,
        flexDirection: "row"
    }
});
