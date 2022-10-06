import { SET_RELATED_TOPICS } from "../../actions/types";

const initialState = {
  topics: null
};

const topicsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_RELATED_TOPICS: {
            const { data } = payload;
            return {
                ...state,
                topics: data
            }
        }
        default:
            return state;
    }
};

export default topicsReducer;