import styled from "styled-components";

import Modal from "@/component/Partials/Modal";
import Button from "@/component/Partials/Button";
import { MediaAbove } from "@/styles/mixins";
import { Fragment } from "react";

const CompleteModalLayout = styled.div`
  max-width: 95vw;
  border-radius: 10px;
  padding: 20px;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 15px 0;
  text-align: center;
  width: 360px;

  ${MediaAbove("lg")} {
    width: 420px;
  }
`;

export const TextKorean = styled.div`
  font-weight: 500;
`;
export const TextEnglish = styled.div`
  font-weight: 500;
  padding-bottom: 12px;
`;

export default ({
  modalState = false,
  type = "picture",
  onRequestClose = () => {},
}) => {
  const copyConfig = {
    picture: {
      korean: ["축하해요!", "모든 숨은 그림을 찾으셨네요!"],
      english: ["Congratulations!", "You’ve found all the hidden pictures!"],
    },
    bingo: {
      korean: ["축하해요!", "프로젝트 해시태그 전문가가 되셨어요!"],
      english: ["Congratulations!", "You’ve mastered PROJECT HASHTAG!"],
    },
    puzzle: {
      korean: ["축하해요!", "노노그램 퍼즐을 완성했어요!"],
      english: ["Congratulations!", "You've completed the nonogram puzzle!"],
    },
  };

  return (
    <Modal modalState={modalState} onRequestClose={onRequestClose}>
      <CompleteModalLayout>
        <TextKorean>
          {copyConfig[type].korean.map((text, i) => (
            <div key={i}>{text}</div>
          ))}
        </TextKorean>
        <TextEnglish>
          {copyConfig[type].english.map((text, i) => (
            <div key={i}>{text}</div>
          ))}
        </TextEnglish>
        <Button onClick={onRequestClose}>확인</Button>
      </CompleteModalLayout>
    </Modal>
  );
};
