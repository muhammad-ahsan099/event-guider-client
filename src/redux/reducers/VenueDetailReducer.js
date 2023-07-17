import { VIEWED_VENUES, ALL_VENUES, VENUE_DETAIL, MOST_POPULAR_VENUES, ADD_RATING, UPDATE_RATING, DELETE_RATINGS, VENUE_REVIEW, RECOMMENDED_VENUES, SEARCH_VENUES } from "../type/Type"

const initialState = {
    all_venues: [],
    venueDetail: {},
    mostPopularVenues: [],
    recommendedVenues: [],
    venueReviews: [],
    searchVenues: [],
    viewedVenues: [],
    ratings: false,
    loading: false,
};
const VenueDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_VENUES: {
            return {
                ...state,
                all_venues: action.payload,
            }
        }
        case VENUE_DETAIL: {
            return {
                ...state,
                venueDetail: action.payload,
            }
        }
        case MOST_POPULAR_VENUES: {
            return {
                ...state,
                mostPopularVenues: action.payload,
            }
        }
        case RECOMMENDED_VENUES: {
            return {
                ...state,
                recommendedVenues: action.payload,
            }
        }
        case VENUE_REVIEW: {
            return {
                ...state,
                venueReviews: action.payload,
            }
        }
        case ADD_RATING: {
            return {
                ...state,
                ratings: action.payload,
            }
        }
        case UPDATE_RATING: {
            return {
                ...state,
                ratings: action.payload,
            }
        }
        case DELETE_RATINGS: {
            return {
                ...state,
                ratings: action.payload
            }
        }

        case SEARCH_VENUES: {
            return {
                ...state,
                searchVenues: action.payload
            }
        }
        case VIEWED_VENUES: {
            return {
                ...state,
                viewedVenues: action.payload
            }
        }

        default:
            return state;
    }
}

export default VenueDetailReducer;
