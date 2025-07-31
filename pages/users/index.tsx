import { GetStaticProps } from "next";
import Link from "next/link";

import { User } from "../../interfaces";
import { sampleUserData } from "../../utils/sample-data";
import Layout from "../../components/Layout";
import List from "../../components/List";

type Props = {
  items: User[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Users List | Sri Krishna AutoMotive">
    <h1 className="text-3xl font-bold text-primary mb-6">Users List</h1>
    <p className="text-lg text-text mb-4">
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p className="text-text-muted mb-4">You are currently on: /users</p>
    <List items={items} />
    <p>
      <Link href="/" className="text-primary hover:underline">Go home</Link>
    </p>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = sampleUserData;
  return { props: { items } };
};

export default WithStaticProps;
