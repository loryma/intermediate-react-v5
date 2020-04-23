import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./colors";

const spin = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

const Navbar = () => {
  const [padding, setPadding] = useState(15);
  const [speed, setSpeed] = useState(1);

  return (
    <header
      css={css`
        background-color: ${colors.primary};
        padding: ${padding}px;
      `}
    >
      <Link to="/">Adopt me!</Link>
      <span
        onClick={() => setSpeed(speed - 0.1)}
        css={css`
          font-size: 60px;
          display: inline-block;
          animation: ${speed}s ${spin} linear infinite;
          &:hover {
            text-decoration: underline;
            animation: ${speed}s ${spin} reverse infinite;
          }
        `}
        role="img"
        aria-label="logo"
      >
        😺
      </span>
    </header>
  );
};

export default Navbar;
