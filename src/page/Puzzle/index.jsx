import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-grid-system";

import Section from "@/component/Partials/Section";
import {
  config,
  labelRowConfig,
  labelColConfig,
  answerLength,
  testData,
} from "./config";
import CompleteModal from "@/component/CompleteModal";
import AnswerModal from "@/component/AnswerModal";

import {
  HeadlineImg,
  PuzzleLayout,
  ContentDiv,
  Head,
  Description,
  SubHead,
  Tile,
  GridDiv,
  GridLayout,
  InstructionImg,
  LabelRow,
  LabelCol,
  Empty,
} from "./styles";

import "swiper/css";

export default ({ n = 30 }) => {
  const [data, setData] = useState(
    JSON.parse(
      JSON.stringify(
        config.map((d) => {
          return { state: d, clicked: false };
        })
      )
    )
  );
  const [complete, setComplete] = useState(false);
  const [openCompleteModal, setOpenCompleteModal] = useState(false);

  useEffect(() => {
    let correctCount = 0;
    let incorreactCount = 0;

    data.filter((d) => {
      console.warn(d)
      if(Boolean(d.state) && Boolean(d.state) === d.clicked) {
        correctCount++;
      } else if(!Boolean(d.state) && d.clicked) {
        incorreactCount++;
      }
    })

    setComplete(incorreactCount === 0 && correctCount === answerLength);
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
      <PuzzleLayout>
        <Container>
          <Row>
            <Col xs={12}>
              <HeadlineImg
                src="/image/puzzle/headline.png"
                alt="칠하라, 최고의 로직게임!"
              />
            </Col>
          </Row>

          <Row>
            <Col
              xs={12}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <GridLayout>
                <GridDiv $n={n}>
                  <Empty />

                  {data.map((item, i) => {
                    const { state, clicked } = item;
                    const clickable = state === 1;
                    const index = i + 1;

                    return (
                      <Tile
                        $index={index}
                        key={i}
                        $clicked={clicked}
                        $clickable={clickable}
                        onClick={() => {
                          const newData = JSON.parse(JSON.stringify(data));
                          newData[i].clicked = !newData[i].clicked;

                          setData(newData);
                        }}
                      ></Tile>
                    );
                  })}

                  {labelColConfig.map((items, i) => {
                    const index = i + 1;

                    return (
                      <LabelCol $index={index} key={index}>
                        {items.map((item, j) => (
                          <span key={j}>{item}</span>
                        ))}
                      </LabelCol>
                    );
                  })}

                  {labelRowConfig.map((items, i) => {
                    const index = i + 1;

                    return (
                      <LabelRow $index={index} key={index}>
                        {items.map((item, j) => (
                          <span key={j}>{item}</span>
                        ))}
                      </LabelRow>
                    );
                  })}
                </GridDiv>
              </GridLayout>
            </Col>
          </Row>

          <Row>
            <Col xs={12} xl={10} xxl={8} offset={{ xl: 1, xxl: 2 }}>
              <Row style={{ rowGap: 40 }}>
                <Col xs={12} lg={6}>
                  <ContentDiv>
                    <div>
                      <Head>게임방법</Head>
                      <Description>
                        네모 로직은 주어진 숫자에 따라 격자의 셀에 색을 칠하거나
                        공백으로 남겨두며 숨겨진 그림을 완성시켜 나가는
                        퍼즐입니다. 칸의 숫자만큼 연속하여 색을 칠하면 되는데,
                        이때 색칠된 칸과 빈칸의 위치를 찾아내면 됩니다.
                      </Description>
                    </div>

                    <div>
                      <SubHead>몸풀기!</SubHead>
                      <Description>
                        숫자 1과 2는 아래 다섯개의 칸 중 1칸 그리고 2칸의
                        사각형이 각각 순서대로 칠해지고, 그 사이에 빈칸이 한 개
                        이상 있음을 의미합니다. 같은 숫자라도 아래와 같이 세가지
                        경우로 칠하는 것이 가능합니다. 이때 교차하는 가로/세로의
                        다른 칸과 모순이 발생하지 않는지를 확인하며 정답을
                        유추해나가면 됩니다.
                      </Description>
                    </div>

                    <InstructionImg
                      src="/image/puzzle/instruction.png"
                      alt="instruction"
                    />

                    <div>
                      <SubHead>Tip!</SubHead>
                      <Description>
                        큰 숫자부터 칠해나가며 꼭 채워져야 하는 칸을 가장 먼저
                        파악해 보세요. 실수로 엉뚱한 곳에 칠할 수도 있으니
                        연필로 푸는 것을 추천드려요!
                      </Description>
                    </div>
                  </ContentDiv>
                </Col>
                <Col xs={12} lg={6}>
                  <ContentDiv>
                    <div>
                      <Head>How to Solve a Nonogram Puzzle</Head>
                      <Description>
                        To solve a nonogram puzzle, fill a grid with colored
                        cells or blanks to unveil a hidden picture. Create
                        consecutive sequences of colored cells as numbered, with
                        at least one blank between them in each column. Your
                        mission: find the perfect placement for each colored
                        cell.
                      </Description>
                    </div>

                    <div>
                      <SubHead>Warm-up!</SubHead>
                      <Description>
                        See the examples here. Numbers 1 and 2 have three
                        possibilities for filling 5 cells. Avoid contradictions
                        and verify both horizontally and vertically for the
                        correct answer.
                      </Description>
                    </div>

                    <InstructionImg
                      src="/image/puzzle/instruction.png"
                      alt="instruction"
                    />

                    <div>
                      <SubHead>Tip!</SubHead>
                      <Description>
                        Start with the big numbers, identify mandatory filled
                        spaces, and watch out for misplaced fills. And don’t
                        forget to use a pencil ― just in case you need to make
                        any corrections along the way!
                      </Description>
                    </div>
                  </ContentDiv>
                </Col>
              </Row>
            </Col>
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
              <AnswerModal type="puzzle" />
            </Col>
          </Row>
        </Container>

        <CompleteModal
          type="puzzle"
          modalState={openCompleteModal}
          onRequestClose={() => {
            setOpenCompleteModal(false);
          }}
        />
      </PuzzleLayout>
    </Section>
  );
};
