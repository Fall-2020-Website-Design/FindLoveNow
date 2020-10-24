import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import './Matches.css'


export class Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: this.props.total,
            current: this.props.current
        }
    }

    render() {
        const SingleBar = styled.button`
            height: 7px;
            width: ${props => props.size};
            margin-left: 5px;
            background: ${props => props.color};
        `;

        let barSize = (30 / this.state.total).toString() + "rem";
        
        return (
            <div>
                <Row className="justify-content-center mt-1" >
                    {[...Array(this.state.total)].map((e, i) => 
                        <SingleBar key={i} size={barSize} color={this.state.current === i ? "#FF0000" : "#808080"} onClick={() => this.props.click(i)}/>
                    )}
                </Row>
            </div>
        )
    }
}




export default Bar
