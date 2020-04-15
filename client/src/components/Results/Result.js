import React from 'react';
import styled from 'styled-components';

export const Result = ({ data }) => {
    console.log(data);
    return (
        <Container className='m-2 rounded border border-primary shadow-lg'>
            <img
                className='rounded-top img-fluid'
                src={data.attributes.posterImage.large}
                // style={{ width: '200px' }}
                alt='anime poster'
            />
            <Title className='bg-primary text-light font-weight-bold'>
                {data.attributes.canonicalTitle}
            </Title>
        </Container>
    );
};

const Title = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 5px;
`;

const Container = styled.div`
    cursor: pointer;
    width: 200px;
    &:hover {
        opacity: 0.5;
    }
`;
