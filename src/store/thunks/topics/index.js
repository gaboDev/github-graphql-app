import { setRelatedTopics } from "../../actions";
import { apolloClient } from "../../../graphql";
import { getTopics as getTopicsQuery } from "../../../graphql/queries";

export const getRelatedTopics = (topicName) => async (dispatch) => {
    dispatch( setRelatedTopics(null) );
    const data = await apolloClient.query({
        query: getTopicsQuery,
        variables: {
            name: topicName
        }
    });
    const {
        data: {
            topic
        }
    } = data;
    const relatedTopics = topic?.relatedTopics ?? [];
    const mappedRelatedTopics = relatedTopics.map(({id, name, stargazerCount}) => ({
        id,
        name,
        stars: stargazerCount
    }));

    setTimeout(() => dispatch( setRelatedTopics(mappedRelatedTopics) ), 800); // Delaying dispatch on purpose just to see the loading animation longer
};

