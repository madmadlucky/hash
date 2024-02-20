import React, { useRef } from "react";
import { SwitchTransition, Transition } from "react-transition-group";
import styled from "styled-components";

const FadeDiv = styled.div`
  width: 100%;
  transition: all ${({ timeout }) => timeout}ms ease-in-out;
`;

export default ({
  transitionKey = "",
  timeout = 250,
  mode = "out-in",
  children = null,
  delay = 0,
  transitionStyles = {
    entering: {},
    entered: {},
    exiting: {},
    exited: {},
  },
  onExited = () => {},
}) => {
  const nodeRef = useRef(null);

  const defaultTransitionStyles = {
    entering: {
      opacity: 1,
      transitionDelay: `${delay}ms`,
    },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <SwitchTransition mode={mode}>
      <Transition
        key={transitionKey}
        nodeRef={nodeRef}
        timeout={timeout}
        appear
        unmountOnExit
        enter
        exit
        onExited={onExited}
      >
        {(state) => (
          <FadeDiv
            ref={nodeRef}
            state={state}
            timeout={timeout}
            delay={delay}
            style={{
              ...defaultTransitionStyles[state],
              ...transitionStyles[state],
            }}
          >
            {children}
          </FadeDiv>
        )}
      </Transition>
    </SwitchTransition>
  );
};
