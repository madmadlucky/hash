import { useState, useEffect } from "react";
import { Col, Container, Row, Visible } from "react-grid-system";

import Section from "@/component/Partials/Section";
import config from "./config";
import CompleteModal from "@/component/CompleteModal";
import BingoIcon from "@/component/svg/BingoIcon";
import ZoomDiv from "@/component/ZoomDiv";

import {
  HeadlineImg,
  BingoLayout,
  ContentLayout,
  ContentDiv,
  Head,
  Description,
  InstructionTitleImg,
  Tile,
  IconTile,
  GridDiv,
  GridLayout,
} from "./styles";

import "swiper/css";

export default () => {
  const [data, setData] = useState(JSON.parse(JSON.stringify(config)));
  const [complete, setComplete] = useState(false);
  const [openCompleteModal, setOpenCompleteModal] = useState(false);

  useEffect(() => {
    const clickedAll = data.every((item) => item.clicked);
    setComplete(clickedAll);
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

  const bingoEnglishText = (i, text) => {
    /* 모바일에서 <i> 태그 출력 버그가 있어 예외처리로 처리 */
    switch(i) {
      case 2:
          return <div>With just one single try, I aced <i>One Click Three Gangnaengyi</i>, the game by lab B!</div>
      case 13:
          return <div>I am interested in participating in the <i>Holobiont Galaxy</i> programs by Rice Brewing Sisters Club (*The program schedule is on p.11)</div>
      default:
          return <div>{text.english}</div> 
    }
  }

  return (
    <Section>
      <BingoLayout>
        <Container>
          <Row>
            <Col xs={12}>
              <HeadlineImg
                src="/image/bingo/headline.png"
                alt="당신의 해시태그력을 측정해 보세요!"
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
                  <GridDiv>
                    {data.map((item, i) => {
                      const { clicked, text, icon, link } = item;

                      return icon ? (
                        <IconTile key={i} $clicked={clicked}>
                          <BingoIcon />
                        </IconTile>
                      ) : (
                        <Tile
                          key={i}
                          $clicked={clicked}
                          onClick={() => {
                            if (clicked) return;
                            if (link) window.open(link, "_blank");

                            const newData = JSON.parse(JSON.stringify(data));
                            newData[i].clicked = true;

                            setData(newData);
                          }}
                        >
                          <div>{text.korean}</div>
                          {bingoEnglishText(i, text)}
                        </Tile>
                      );
                    })}
                  </GridDiv>
              </GridLayout>
            </Col>
          </Row>
          <Row>
            <Col xs={12} xl={10} xxl={8} offset={{ xl: 1, xxl: 2 }}>
              <ContentLayout>
                <InstructionTitleImg
                  src="/image/bingo/instructionTitle.png"
                  alt="Check your bingo level"
                />

                <Row style={{ rowGap: 40 }}>
                  <Col xs={12} lg={6}>
                    <ContentDiv>
                      <div>
                        <Head>Level 1 : 0-1 bingo</Head>
                        <Description>
                          레벨업의 시작은 《프로젝트 해시태그 2023》 관람부터.
                          2024년 4월 7일까지 국립현대미술관 서울관에서 만나요.
                        </Description>
                      </div>

                      <div>
                        <Head>Level 2 : 2-4 bingo</Head>
                        <Description>
                          퍼즐을 풀다 전시 내용을 깜빡했다면 4페이지로 이동!
                          여유롭게 다시 읽어보세요.
                        </Description>
                      </div>

                      <div>
                        <Head>Level 3 : 5-7 bingo</Head>
                        <Description>
                          거의 다 왔습니다. 심화학습은 아카이브 신문 2호에서
                          이어 가볼까요?
                        </Description>
                      </div>

                      <div>
                        <Head>Level 4 : 8 or more</Head>
                        <Description>
                          이상 최고 레벨 달성을 축하합니다! 당신의 해시태그력을
                          친구들에게 마음껏 자랑해보세요.
                        </Description>
                      </div>
                    </ContentDiv>
                  </Col>
                  <Col xs={12} lg={6}>
                    <ContentDiv>
                      <div>
                        <Head>Level 1 : 0-1 bingo</Head>
                        <Description>
                          Want to level up your HASHTAG mastery? Start by
                          checking out <i>PROJECT HASHTAG 2023</i>, currently
                          exhibiting at MMCA Seoul until April 7<sup>th</sup>,
                          2024.
                        </Description>
                      </div>

                      <div>
                        <Head>Level 2 : 2-4 bingo</Head>
                        <Description>
                          Oops, forgot about the exhibition? No worries! Just
                          head back to p.4 and take your time to give it another
                          look.
                        </Description>
                      </div>

                      <div>
                        <Head>Level 3 : 5-7 bingo</Head>
                        <Description>
                          We&apos;re almost there! Feeling ready to dive deeper?
                          Grab the Archive Newspaper 2<sup>nd</sup> issue!
                        </Description>
                      </div>

                      <div>
                        <Head>Level 4 : 8 or more</Head>
                        <Description>
                          Congratulations on unleashing the HASHTAG! Show off
                          your skills and impress your friends.
                        </Description>
                      </div>
                    </ContentDiv>
                  </Col>
                </Row>
              </ContentLayout>
            </Col>
          </Row>
        </Container>
      </BingoLayout>
    </Section>
  );
};
