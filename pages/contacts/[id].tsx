import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";
import { GetServerSideProps } from "next";
import { contactType } from "../../types";
import { FC } from "react";

type contactTypeProps = {
  contact: contactType;
};

//=========== Server Side Render approach ============//

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  // const data = null;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contact: data },
  };
};

const Contact: FC<contactTypeProps> = ({ contact }) => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactInfo contact={contact} />
    </>
  );
};
export default Contact;
