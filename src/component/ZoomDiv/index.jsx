import { Fragment } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import styled from "styled-components";
import MinusIcon from "@/component/svg/MinusIcon";
import PlusIcon from "@/component/svg/PlusIcon";
// import { wrap } from "framer-motion";

const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  width: 20px;
  background: transparent;

  svg {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const ControlLayout = styled.div`
  display: flex;
  column-gap: 10px;
  margin-top: 10px;
  justify-content: center;
`;

export default ({
  children = null,
  wrapperStyle = {},
  contentStyle = {},
  controlStyle = {},
}) => {
  return (
    <TransformWrapper
      initialScale={1}
      initialPositionX={0}
      initialPositionY={0}
      wheel={{ disabled: true }}
      doubleClick={{ disabled: true }}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <Fragment>
          <TransformComponent
            wrapperStyle={{
              maxWidth: "100%",
              width: "100%",
              height: "100%",
              ...wrapperStyle,
            }}
            contentStyle={{
              maxWidth: "100%",
              width: "100%",
              height: "100%",
              ...contentStyle,
            }}
          >
            {children}
          </TransformComponent>

          <ControlLayout style={controlStyle}>
            <Button onClick={() => zoomOut()} className="minus">
              <MinusIcon />
            </Button>
            <Button onClick={() => zoomIn()} className="plus">
              <PlusIcon />
            </Button>
          </ControlLayout>
        </Fragment>
      )}
    </TransformWrapper>
  );
};
