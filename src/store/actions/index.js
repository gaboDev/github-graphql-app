import { SET_RELATED_TOPICS } from "./types";

export const setRelatedTopics = (data) => ({
    payload: { data },
    type: SET_RELATED_TOPICS
});
