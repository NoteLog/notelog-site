import React from "react";

import { logos } from "../data/images.yml";

interface ILogoProps {
    size?: string;
}

const Logo: React.FunctionComponent<ILogoProps> = (props = {}) => (
    <img
        src="https://i.ibb.co/LdnvfRT/logo.png" 
        height={ props.size || 50 }
    />
);

export default Logo;
