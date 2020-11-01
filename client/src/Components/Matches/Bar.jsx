import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import './Matches.css'

const SingleBar = styled.button`
    height: 7px;
    width: ${props => props.size};
    margin-left: 5px;
    background: ${props => props.color};
`;

export class Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: this.props.total,
            bars: [],
            barSize: (30 / this.props.total).toString() + "rem"
        }
    }

    componentDidMount () {
        let bar = []
        
        console.log(this.state.barSize)
        console.log(window.innerWidth )
        
        for(let i=0; i < this.state.total; i++) {
            bar.push(
                <SingleBar key={i} size={this.state.barSize} color={0 === i ? "#FF0000" : "#808080"} onClick={() => this.props.click(i)}/>
            );
        }

        this.setState({
            bars: bar
        })
    }

    componentWillReceiveProps (newProps) {
        let bar = []

        for(let i=0; i < this.state.total; i++) {
            bar.push(
                <SingleBar key={i} size={this.state.barSize} color={newProps.current === i ? "#FF0000" : "#808080"} onClick={() => this.props.click(i)}/>
            );
        }

        this.setState({
            bars: bar
        })
    }

    render() {
        return (
            <div>
                <Row className="justify-content-center mt-1" >
                    {this.state.bars}
                </Row>
            </div>
        )
    }
}

export default Bar
