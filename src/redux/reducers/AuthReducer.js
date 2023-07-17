import { LOGIN, CREATE_ACCOUNT, ACTIVE_USER, FORGOT_PASSWORD, RESET_PASSWORD, LOGOUT, USER_PROFILE, FILTER_WATCHLIST } from '../type/Type';
const initialState = {
    isUserLoggedIn: false,
    forgotPasswordEmailSend: false,
    resetSuccess: false,
    userProfile: null,
    user: null,
    loader: false
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                isUserLoggedIn: true,
                user: action.payload
            }
        }

        case USER_PROFILE: {
            return {
                ...state,
                isUserLoggedIn: true,
                userProfile: action.payload
            }
        }
        case FILTER_WATCHLIST: {
            const updatedToWishlist = state.userProfile.user_wishlist.to_wishlist.filter(
                venue => venue.id !== action.payload
            );

            const updatedUserProfile = {
                ...state.userProfile,
                user_wishlist: {
                    ...state.userProfile.user_wishlist,
                    to_wishlist: updatedToWishlist
                }
            };
            return {
                ...state,
                userProfile: updatedUserProfile
            };
        }

        case ACTIVE_USER: {
            return {
                ...state,
                isUserLoggedIn: true,
            }
        }
        case CREATE_ACCOUNT: {
            return {
                ...state,
                isUserLoggedIn: false,
            }
        }
        case FORGOT_PASSWORD: {
            return {
                ...state,
                forgotPasswordEmailSend: true,
            }
        }
        case RESET_PASSWORD: {
            return {
                ...state,
                resetSuccess: true,
            }
        }

        case LOGOUT: {
            return {
                ...state,
                isUserLoggedIn: false,
                user: null
            }
        }
        default:
            return state;
    }
}

export default AuthReducer;