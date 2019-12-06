import React, { Component } from 'react';
 
class Inline extends Component {

    state = {
        red: false,
        green: false
    }

    makeBackgroundRed = () => {
        this.setState({ red: true, green: false })
    }

    makeBackgroundGreen = () => {
        this.setState({ red: false, green: true });
    }
    
    render() { 
        const styles = {
            backgroundColor: '#eaeaea',
            border: '1px solid #000000'
        }

        if (this.state.red) {
            styles.backgroundColor = 'red';
        }
        if (this.state.green) {
            styles.backgroundColor = 'green';
        }

        const styleRed = {
            backgroundColor: 'red'
        }

        const styleGreen = {
            backgroundColor: 'green'
        }
        return (
            <div style={styles}>
                Inline
                <br/>
                <button style={styleRed} onClick={this.makeBackgroundRed}>RED</button>
                <button style={styleGreen} onClick={this.makeBackgroundGreen}>GREEN</button>
            </div>
        );
    }
}
 
export default Inline;