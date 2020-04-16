import axios from 'axios';

export const searchByTitle = (search, filter, limit) => {
    const searchTerm = search.trim().split(' ').join('%20');
    const response = axios({
        method: 'GET',
        url: `https://kitsu.io/api/edge/anime?filter[${filter}]=${searchTerm}&page[limit]=${limit}`,
        headers: {
            Accept: 'application/vnd.api+json',
            'Content-Type': 'application/vnd.api+json',
        },
    });
    return response;
};

// createdAt
// "2013-02-20T16:02:18.291Z"
// updatedAt
// "2020-04-16T12:00:21.184Z"
// slug
// "solty-rei"
// synopsis
// "In a future-based disaster-ridden city with an enormous gap between the rich and the poor, it is hard to tell which humans are walking around with cybernetic body parts. This makes Roy Revant's job as a renegade bounty hunter/bodyguard-for-hire even more difficult. When a young girl with unbeliveable strength rescues him from a particularly dangerous criminal, Roy realizes that perhaps help can be found in the strangest of places. Joining together with a few others, they engage in a battle to fi..."
// coverImageTopOffset
// 400

// titles
// {en_jp: "Solty Rei", ja_jp: "ソルティレイ"}
// canonicalTitle
// "Solty Rei"

// abbreviatedTitles
// ["SoltyRei"]
// averageRating
// "72.4"

// ratingFrequencies
// {10: "54", 11: "0", 12: "146", 13: "4", 14: "202", …}
// userCount
// 2126
// favoritesCount
// 12
// startDate
// "2005-10-06"
// endDate
// "2006-03-30"
// nextRelease
// null
// popularityRank
// 3089
// ratingRank
// 2686
// ageRating
// "R"
// ageRatingGuide
// "17+ (violence & profanity)"
// subtype
// "TV"
// status
// "finished"
// tba
// null

// posterImage
// {large: "https://media.kitsu.io/anime/poster_images…}

// coverImage
// {large: "https://media.kitsu.io/anime/cover_images/…}
// episodeCount
// 24
// episodeLength
// 23
// totalLength
// 552
// youtubeVideoId
// null
// showType
// "TV"
// nsfw
// false
