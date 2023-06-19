import { NextPage } from "next";
import Heading from "../../components/Heading";
import Link from "next/link";
import Head from "next/head";
import { GetStaticProps } from "next";
import { contactType } from "../../types";

type contactsTypeProps = {
  contacts: contactType[];
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  // const data = null;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contacts: data },
  };
};

const Contacts: NextPage<contactsTypeProps> = ({ contacts }) => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Contacts list:" tag={undefined} />
      <ul>
        {contacts &&
          contacts.map(({ id, name }) => (
            <li key={id}>
              <Link href={`/contacts/${id}`}>{name}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};
export default Contacts;
