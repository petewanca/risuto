import React from 'react';

export const Result = ({ data }) => {
    console.log(data);
    return (
        // <div className='card col-lg-4 m-4 shadow bg-light'>
        //     <div className='p-3 text-center'>
        <div
            className='m-2'
            style={titleStyle}
            className='card-img-top rounded border border-primary shadow-lg'
        >
            <img
                src={data.attributes.posterImage.large}
                style={{ width: '200px' }}
                alt='anime img'
            />
            <p>{data.attributes.canonicalTitle}</p>
        </div>
        /* </div>
            <div className='card-body'>
                <h5 className='card-title'>{data.attributes.canonicalTitle}</h5>
                <p className='card-text'>{`${data.attributes.synopsis.slice(0, 100)} . . . `}</p>
                <a href='/' className='btn btn-primary'>
                    Go somewhere
                </a>
            </div>
        </div> */
    );
};

const titleStyle = {
    // overflow: 'auto',
    // whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '200px',
};
