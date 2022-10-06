import { Grow } from "@mui/material";
import React from "react";

const WithAnimation = (Component, timeout, isLoading) => {
    return ({ children, ...props }) => (
        <Grow
            in={isLoading}
            style={{ transformOrigin: '0 0 0' }}
            timeout={timeout}
        >
            <Component { ...props }>
                {children}
            </Component>
        </Grow>
    )
};

export default WithAnimation;
