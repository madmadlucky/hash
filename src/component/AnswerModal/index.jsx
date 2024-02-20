import { Fragment, useState } from "react";
import styled from "styled-components";

import Modal from "@/component/Partials/Modal";
import Button from "@/component/Partials/Button";
import { MediaAbove } from "@/styles/mixins";

const AnswerModalLayout = styled.div`
  max-width: 95vw;
  border-radius: 10px;
  padding: 15px;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 15px 0;
  text-align: center;
  width: 500px;
`;

const Img = styled.img`
  display: block;
  width: 100%;
`;

const CloseButton = styled.div`
  background: transparent;
  padding-bottom: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    display: block;
    width: 40px;
    pointer-events: auto;
    cursor: pointer;
  }
`;

export default ({ type = "picture" }) => {
  const [openModal, setOpenModal] = useState(false);

  const srcConfig = {
    picture: "/image/picture/answer.png",
    puzzle: "/image/puzzle/answer.png",
    maze: "/image/maze/maze_answer.png",
  };

  return (
    <Fragment>
      <Button
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <u>답안지 보기</u> <br />
        See answer sheet
      </Button>

      <Modal
        modalState={openModal}
        onRequestClose={() => {
          setOpenModal(false);
        }}
      >
        <CloseButton
          onClick={() => {
            setOpenModal(false);
          }}
        >
          <img src="/image/closeIcon.png" alt="close" />
        </CloseButton>

        <AnswerModalLayout>
          <Img src={srcConfig[type]} alt="answer" />
        </AnswerModalLayout>
      </Modal>
    </Fragment>
  );
};
