import styled from 'styled-components';

const SingleBar = styled.button`
    height: 7px;
    width: ${props => props.size};
    margin-left: 5px;
    background: ${props => props.color};
`;

export default SingleBar;