import { headingType } from "../types";
import { NextPage } from "next";

const Heading: NextPage<headingType> = ({ tag, text }) => {
  const Tag = tag || "h1";

  return (
    <>
      <Tag>{text}</Tag>
    </>
  );
};
export default Heading;
