import React from "react";
import { number } from "prop-types";
import { Paper, Skeleton } from "@mui/material";
import styled from "@emotion/styled";
import WithAnimation from "../../../hoc/WithAnimation";

const StyledPaper = styled(Paper)`
  padding: 1.5em;
  margin-top: 2em;
  margin-bottom: 1em;
  width: 50%;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled(Skeleton)`
  width: 250px;
  height: 15px;
  margin-left: 1em;
`;
const Content = styled(Skeleton)`
  margin-top: 0.5em;
  height: 20px;
`;

const TopicsSkeleton = ({ length, isLoading }) => {
    const avatarSize = 25;
    const items = [...Array(length).keys()];
    return (
        <>
            {
                Array.isArray(items) && items.map((value) => {
                    const PaperWithAnimation = WithAnimation(StyledPaper, ( value * 500 ), isLoading);
                    return (
                        <PaperWithAnimation key={value}>
                            <Header>
                                <Skeleton variant="circular" height={avatarSize} width={avatarSize} />
                                <Title variant="rectangular" />
                            </Header>
                            <Content variant="rectangular" />
                        </PaperWithAnimation>
                    );
                })
            }
        </>
    );
};

TopicsSkeleton.propTypes = {
  length: number.isRequired
};

export default TopicsSkeleton;
