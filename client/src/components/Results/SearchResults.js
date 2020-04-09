import React, { useContext } from 'react';
import { SearchContext } from '../../context/Contexts/SearchContext';

export const SearchResults = () => {
    const { results } = useContext(SearchContext);
    let content;

    // card width option: style={{ width: '30%' }}

    results.length
        ? (content = results.map((item) => (
              <div className='card col-lg-4 m-4 shadow bg-light' key={item.id}>
                  <div className='p-3 text-center'>
                      <img
                          className='card-img-top rounded border border-secondary shadow'
                          src={item.attributes.posterImage.large}
                          style={{ width: '200px' }}
                          alt='anime img'
                      />
                  </div>
                  <div className='card-body'>
                      <h5 className='card-title'>{item.attributes.canonicalTitle}</h5>
                      <p className='card-text'>{`${item.attributes.synopsis.slice(
                          0,
                          100
                      )} . . . `}</p>
                      <a href='/' className='btn btn-primary'>
                          Go somewhere
                      </a>
                  </div>
              </div>
          )))
        : (content = null);

    return <div className='row justify-content-center'>{content}</div>;
};

/*
coverImageTopOffset: 92
titles: {en: "Baka & Test - Summon the Beasts", en_jp: "Bak…}
canonicalTitle: "Baka to Test to Shoukanjuu"
abbreviatedTitles: ["The Idiot, the Tests, and the Summoned Creatures"…]
averageRating: "76.42"
ratingFrequencies: {10: "879", 11: "24", 12: "2094", 13: "62", 14: "42…}
userCount: 36007
favoritesCount: 483
startDate: "2010-01-07"
endDate: "2010-04-01"
nextRelease: null
popularityRank: 194
ratingRank: 1237
ageRating: "PG"
ageRatingGuide: "Teens 13 or older"
subtype: "TV"
status: "finished"
tba: ""
posterImage: {large: "https://media.kitsu.io/anime/poster_images…}
coverImage: {large: "https://media.kitsu.io/anime/cover_images/…}
episodeCount: 13
episodeLength: 24
totalLength: 312
youtubeVideoId: "OiqsI1rNnGo"
showType: "TV"
nsfw: false
*/
