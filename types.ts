import { type } from "os";

export type contactType = {
  id: string;
  name: string;
  email: string;
  address: addressType;
};

export type addressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

export type postType = {
  title: string;
  body: string;
};

export type socialsType = {
  id: number;
  icon: string;
  path: string;
};

export type headingType = {
  tag: keyof JSX.IntrinsicElements;
  text: string;
};

export type postType = {
  id: number;
  title: string;
};
