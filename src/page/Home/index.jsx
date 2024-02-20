import FloatingLink from "@/component/FloatingLink";
import HomeTitleSVG from "@/component/svg/HomeTitle";
import Section from "@/component/Partials/Section";
import { HomeLayout, Headline } from "./styles";

export default () => {
  return (
    <Section style={{ position: "unset", padding: "0px" }}>
      <HomeLayout>
        <Headline>
          <HomeTitleSVG />
        </Headline>

        <FloatingLink to="/hub/1" src="/image/home/newspaper.png" />
        <FloatingLink to="/hub/2" src="/image/home/newspaper2.png" />
      </HomeLayout>
    </Section>
  );
};
