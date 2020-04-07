import React from 'react';

export const Result = ({ data }) => {
    const { canonicalTitle, synopsis, startDate, endDate } = data.attributes;
    return (
        <div>
            <h3>{canonicalTitle}</h3>
            <p>{synopsis}</p>
            <p>Start date: {startDate}</p>
            <p>End date: {endDate}</p>
        </div>
    );
};

/*
createdAt: "2013-02-20T16:00:13.609Z"
updatedAt: "2020-04-07T00:00:23.141Z"
slug: "cowboy-bebop"
synopsis: "In the year 2071, humanity has colonized several of the planets and moons of the solar system leaving the now uninhabitable surface of planet Earth behind. The Inter Solar System Police attempts to keep peace in the galaxy, aided in part by outlaw bounty hunters, referred to as "Cowboys". The ragtag team aboard the spaceship Bebop are two such individuals.
↵Mellow and carefree Spike Spiegel is balanced by his boisterous, pragmatic partner Jet Black as the pair makes a living chasing bounties and collecting rewards. Thrown off course by the addition of new members that they meet in their travels—Ein, a genetically engineered, highly intelligent Welsh Corgi; femme fatale Faye Valentine, an enigmatic trickster with memory loss; and the strange computer whiz kid Edward Wong—the crew embarks on thrilling adventures that unravel each member's dark and mysterious past little by little. 
↵Well-balanced with high density action and light-hearted comedy, Cowboy Bebop is a space Western classic and an homage to the smooth and improvised music it is named after.  
↵[Written by MAL Rewrite]"
coverImageTopOffset: 400
titles: {en: "Cowboy Bebop", en_jp: "Cowboy Bebop", ja_jp: "カウボーイビバップ"}
canonicalTitle: "Cowboy Bebop"
abbreviatedTitles: ["COWBOY BEBOP"]
averageRating: "82.69"
ratingFrequencies: {2: "3140", 3: "50", 4: "389", 5: "28", 6: "156", 7: "29", 8: "2972", 9: "35", 10: "614", 11: "50", 12: "2077", 13: "110", 14: "6395", 15: "265", 16: "6859", 17: "542", 18: "8316", 19: "496", 20: "29366"}
userCount: 106078
favoritesCount: 4373
startDate: "1998-04-03"
endDate: "1999-04-24"
nextRelease: null
popularityRank: 24
ratingRank: 76
ageRating: "R"
ageRatingGuide: "17+ (violence & profanity)"
subtype: "TV"
status: "finished"
tba: ""
posterImage: {tiny: "https://media.kitsu.io/anime/poster_images/1/tiny.jpg?1431697256", small: "https://media.kitsu.io/anime/poster_images/1/small.jpg?1431697256", medium: "https://media.kitsu.io/anime/poster_images/1/medium.jpg?1431697256", large: "https://media.kitsu.io/anime/poster_images/1/large.jpg?1431697256", original: "https://media.kitsu.io/anime/poster_images/1/original.jpg?1431697256", …}
coverImage: {tiny: "https://media.kitsu.io/anime/cover_images/1/tiny.jpg?1519178801", small: "https://media.kitsu.io/anime/cover_images/1/small.jpg?1519178801", large: "https://media.kitsu.io/anime/cover_images/1/large.jpg?1519178801", original: "https://media.kitsu.io/anime/cover_images/1/original.jpg?1519178801", meta: {…}}
episodeCount: 26
episodeLength: 25
totalLength: 626
youtubeVideoId: "qig4KOK2R2g"
showType: "TV"
nsfw: false
*/
