// import { useQuery } from "@apollo/client";
// import { TexteInterface } from "@/types/texte";
// import { QUERY_ALL_TEXTES } from "@/graphql/texte/queryTextes";
import Accueil from "@/components/home/Home";
import Layout from "@/components/Layout";

export default function Home() {
  // const { data } = useQuery<{ items: TexteInterface[] }>(QUERY_ALL_TEXTES);

  return (
    <Layout title="Accueil Paul Krulic">
      <Accueil />
    </Layout>
  );
}
