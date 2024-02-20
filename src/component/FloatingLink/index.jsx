import { useState } from "react";
import { Link } from "react-router-dom";
import { Img, LinkLayout } from "./styles";

const getRandomIntInclusive = (min = 15, max = 85) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
};

export default ({ to = "/", src = "" }) => {
  const [position, setPosition] = useState({
    x: getRandomIntInclusive(),
    y: getRandomIntInclusive(),
  });
  const [duration, setDuration] = useState(getRandomIntInclusive(3, 7));

  return (
    <LinkLayout
      initial={{ x: `calc(50vw - 50%)`, y: `calc(50vh - 50%)` }}
      animate={{
        x: `calc(${position.x}vw - 50%)`,
        y: `calc(${position.y}vh - 50%)`,
      }}
      transition={{
        ease: "linear",
        duration,
      }}
      onAnimationComplete={() => {
        setPosition({ x: getRandomIntInclusive(), y: getRandomIntInclusive() });
        setDuration(getRandomIntInclusive(3, 7));
      }}
    >
      <Link to={to}>
        <Img src={src} />
      </Link>
    </LinkLayout>
  );
};
