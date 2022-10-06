import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import Topic from "../../components/Topic";
import { Typography } from "@mui/material";
import SearchBar from "../../components/SearchBar";
import { connect, useSelector } from "react-redux";
import { selectTopics } from "../../store/selectors";
import { getRelatedTopics } from "../../store/thunks/topics";
import Skeleton from "./Skeleton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 0;
`;

const StyledTopic = styled(Topic)`
  margin-bottom: 2em;
  width: 50%;
`;

const ErrorMessage = styled(Typography)`
  margin: 0.8em 0;
  color: #868686;
  font-weight: 200;
`;

const SearchPage = ({ getRelatedTopics }) => {
    const topics = useSelector(selectTopics);
    const isLoading = topics === null;

    const [searchValue, setSearchValue] = useState('reactjs');
    const handleTopicSelection = (topicName) => {
        setSearchValue(topicName)
        getRelatedTopics(topicName);
    };
    const onChange = ({ target: { value } }) => setSearchValue(value);

    const renderTopics = (topics) => {
        if (!topics.length){
            return ( <ErrorMessage variant='h3'>No data available</ErrorMessage> )
        }
        return topics.map(({ name, id, stars }) => (
            <StyledTopic
                onClick={handleTopicSelection}
                key={id}
                title={name}
                id={id}
                stars={stars}/>
        ))
    };

    useEffect(() => {
        getRelatedTopics(searchValue);
    }, []);

    return (
        <div>
            <SearchBar logo='img/github.png'
                       onSearch={getRelatedTopics}
                       onChange={onChange}
                       searchValue={searchValue}
            />
            <Container>
                {
                    isLoading
                    ? ( <Skeleton length={3} isLoading={isLoading} /> )
                    : renderTopics(topics)
                }
            </Container>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    getRelatedTopics: (topicName) => dispatch(getRelatedTopics(topicName))
});

export default connect(null, mapDispatchToProps)(SearchPage);
