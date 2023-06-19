import { headingType } from "../types";
import { FC } from "react";

const Heading: FC<headingType> = ({ tag, text }) => {
  const Tag = tag || "h1";

  return (
    <>
      <Tag>{text}</Tag>
    </>
  );
};
export default Heading;
