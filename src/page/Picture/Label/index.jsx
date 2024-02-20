import SwitchTransition from "@/component/Partials/SwitchTransition";

import {
  LabelLayout,
  LabelName,
  LabelNameEnglish,
  LabelImg,
  LabelImgDiv,
  CheckImg,
  CheckImgDiv,
} from "./styles";

export default ({ found = false, id = 1, name = {} }) => (
  <LabelLayout>
    <LabelImgDiv>
      <LabelImg src={`/image/picture/label/${id}.png`} alt={name?.korean} />

      <CheckImgDiv>
        <SwitchTransition timeout={250} transitionKey={found}>
          {found && (
            <CheckImg src={"/image/picture/check.png"} alt="Check mark" />
          )}
        </SwitchTransition>
      </CheckImgDiv>
    </LabelImgDiv>

    <LabelName>{name?.korean}</LabelName>
    <LabelNameEnglish>{name?.english}</LabelNameEnglish>
  </LabelLayout>
);
