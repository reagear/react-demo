// import './index.less';
import React from 'react';

class Comp extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getInputDom = this.getInputDom.bind(this);
        this.input = null;
    }

    handleSubmit(event) {
        console.log('A name was submitted: ' + this.input.value);
        console.log(this.input)
        event.preventDefault();
    }

    getInputDom(el){
        this.input = el;
    }

    render() {
        return (
            <>
                <h3>ref研究</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text"
                               defaultValue="233"
                               ref={this.getInputDom} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </>
        );
    }
}

export default Comp;
