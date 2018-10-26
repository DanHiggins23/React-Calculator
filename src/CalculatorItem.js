import React, {Component} from 'react';

export default class CalculatorItem extends Component {
    constructor() {
        super();
        this.state = {
            textMessage: ""
        }

        this.updateText = (event) => this.setState ({
            textMessage: this.state.textMessage + event.target.value
        })

        this.clear = () => this.setState ({
            textMessage: ""
        })
    }

    render() {
        return (
            <center>
            <div id="calculatorMain">
                <div id="row">
                    <input value={this.state.textMessage} type="text" id="result" readonly class="noPadding"/>
                </div>
                <div id="row1">
                    <input type="button" value="7" onClick={this.updateText}/>
                    <input type="button" value="8" onClick={this.updateText}/>
                    <input type="button" value="9" onClick={this.updateText}/>
                    <input type="button" value="CLR" id="clear" onClick={this.clear} class="noPadding"/>
                </div>
                <div id="row2">
                    <input type="button" value="4" onClick={this.updateText}/>
                    <input type="button" value="5" onClick={this.updateText}/>
                    <input type="button" value="6" onClick={this.updateText}/>
                    <input type="button" value="*" class="noPadding"/>
                </div>
                <div id="row3">
                    <input type="button" value="1" onClick={this.updateText}/>
                    <input type="button" value="2" onClick={this.updateText}/>
                    <input type="button" value="3" onClick={this.updateText}/>
                    <input type="button" value="-" onclick="addNum(value)" class="noPadding"/>
                </div>
                <div id="row4">
                    <input type="button" value="0" onClick={this.updateText}/>
                    <input type="button" value="%" onclick="addNum(value)"/>
                    <input type="button" value="=" onclick="calculate()"/>
                    <input type="button" value="+" onclick="addNum(value)" class="noPadding"/>
                </div>
            </div>
            </center>
        );
    }
}