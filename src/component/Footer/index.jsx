import { Container, Row, Col } from "react-grid-system";
import { Footer } from "./styles";

export default () => {
  return (
    <Footer>
      <Container>
        <Row>
          <Col xs={12} style={{ textAlign: "right" }}>©{new Date().getFullYear()} Hyundai Motor Company</Col>
        </Row>
      </Container>
    </Footer>
  );
};
