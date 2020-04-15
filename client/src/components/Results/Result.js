import React from 'react';
import { Container, Title } from '../../style/Style';

export const Result = ({ data }) => {
    const { posterImage, canonicalTitle } = data.attributes;

    return (
        <Container className='m-2 rounded border border-primary shadow-lg'>
            <img className='rounded-top img-fluid' src={posterImage.large} alt='anime poster' />
            <Title className='bg-primary text-light font-weight-bold'>{canonicalTitle}</Title>
        </Container>
    );
};
