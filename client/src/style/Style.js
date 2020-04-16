import styled from 'styled-components';

export const Title = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 5px;
`;

export const Container = styled.div`
    cursor: pointer;
    width: 200px;
    &:hover {
        opacity: 0.6;
    }
`;
