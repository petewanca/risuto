import React, { useContext } from 'react';
import { SearchContext } from '../../context/Contexts/SearchContext';

export const SearchResults = () => {
    const { results } = useContext(SearchContext);
    let content;

    results.length
        ? (content = results.map((item) => (
              <div
                  className='card bg-light m-4 col-lg-3'
                  style={{ maxWidth: '20rem' }}
                  key={item.id}
              >
                  <div className='card-header'>{item.attributes.canonicalTitle}</div>
                  <div className='card-body'>
                      <h4 className='card-title'>Light card title</h4>
                      <p className='card-text'>{`${item.attributes.synopsis.slice(0, 110)}...`}</p>
                  </div>
              </div>
          )))
        : (content = null);

    return <div className='row'>{content}</div>;
};

/*
createdAt: "2013-02-20T17:09:35.557Z"
updatedAt: "2020-04-07T18:00:27.185Z"
slug: "baka-to-test-to-shoukanjuu"
synopsis: description
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
