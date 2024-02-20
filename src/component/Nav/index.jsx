import { Container, Row, Col } from "react-grid-system";
import { Link } from "react-router-dom";
import NavTitleSVG from "@/component/svg/NavTitle";
import { Nav, NavLayout, Title } from "./styles";

export default () => {
  return (
    <Nav>
      <Container>
        <Row>
          <Col xs={12}>
            <NavLayout>
              <Link to="/">
                <Title>
                  <NavTitleSVG />
                </Title>
              </Link>
              <a href="http://projecthashtag.net" target="_blank">Official</a>
            </NavLayout>
          </Col>
        </Row>
      </Container>
    </Nav>
  );
};
