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
            current: 0,
            bars: [],
            barSize: null
        }
    }

    static getDerivedStateFromProps (props, state) {
        const { total, current } = props;
        let bar = [];
        const size = (80 / total).toString() + "%"
        
        for(let i=0; i < total; i++) {
            bar.push(
                <SingleBar key={i} size={size} color={current === i ? "#FF0000" : "#808080"} onClick={() => props.click(i)}/>
            );
        }
        return {
            total: total,
            bars: bar,
            barSize: size,
            current: current
        };
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
