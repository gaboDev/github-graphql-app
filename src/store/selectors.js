import {createSelector} from "@reduxjs/toolkit";

const selectTopicState = ({ topics }) => {
    return topics;
};

export const selectTopics = createSelector([selectTopicState], ({topics}) => {
    return topics;
});
