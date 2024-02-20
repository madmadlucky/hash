import { useEffect, useState } from "react";
import Section from "@/component/Partials/Section";
import { Container, Row, Col, Visible } from "react-grid-system";

import SwitchTransition from "@/component/Partials/SwitchTransition";
import config from "./config";
import CircleIcon from "@/component/svg/CircleIcon";
import CompleteModal from "@/component/CompleteModal";
import AnswerModal from "@/component/AnswerModal";
import Label from "./Label";

import {
  PictureBaseDiv,
  PictureImg,
  PictureLayout,
  HeadlineImg,
  HiddenButton,
} from "./styles";
import LabelCarousel from "./LabelCarousel";

export default () => {
  const [data, setData] = useState(JSON.parse(JSON.stringify(config)));
  const [complete, setComplete] = useState(false);
  const [openCompleteModal, setOpenCompleteModal] = useState(false);

  useEffect(() => {
    const foundAll = data.every((item) => item.found);
    setComplete(foundAll);
  }, [data]);

  useEffect(() => {
    let timeoutId = null;

    if (complete) {
      setTimeout(() => {
        setOpenCompleteModal(true);
      }, 1000);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [complete]);

  return (
    <Section>
      <PictureLayout>
        <Container>
          <Row>
            <Col xs={12}>
              <HeadlineImg
                src="/image/picture/headline.png"
                alt="숨은 미생물, 강냉이를 찾아라!"
              />
            </Col>

            <Visible xs sm md>
              <Col xs={12}>
                <LabelCarousel data={data} />
              </Col>
            </Visible>

            <Col xs={12} lg={8} xxl={6} offset={{ xxl: 1 }}>
              <PictureBaseDiv>
                <PictureImg
                  src="/image/picture/base.png"
                  alt="Hidden pictures"
                />

                {data.map((item, i) => {
                  const { found, position } = item;

                  return (
                    <HiddenButton
                      key={`button-${i}`}
                      style={{ ...position }}
                      onClick={() => {
                        if (found) return;

                        const newData = JSON.parse(JSON.stringify(data));
                        newData[i].found = true;

                        setData(newData);
                      }}
                    >
                      <SwitchTransition timeout={250} transitionKey={found}>
                        {found && <CircleIcon />}
                      </SwitchTransition>
                    </HiddenButton>
                  );
                })}
              </PictureBaseDiv>
            </Col>

            <Visible lg xl xxl>
              <Col xs={4} xxl={3}>
                <Row style={{ rowGap: 40 }}>
                  {data.map((item, i) => {
                    const { found, id, name } = item;

                    return (
                      <Col xs={4} key={`label-${i}`}>
                        <Label id={id} found={found} name={name} />
                      </Col>
                    );
                  })}
                </Row>
              </Col>
            </Visible>
          </Row>

          <Row style={{ marginTop: 100 }}>
            <Col
              xs={12}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <AnswerModal type="picture" />
            </Col>
          </Row>
        </Container>

        <CompleteModal
          type="picture"
          modalState={openCompleteModal}
          onRequestClose={() => {
            setOpenCompleteModal(false);
          }}
        />
      </PictureLayout>
    </Section>
  );
};
