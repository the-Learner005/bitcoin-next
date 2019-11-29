import Fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Prices from "../components/Prices.js";
const Index = props => (
  <Layout>
    <div>
      <h1>Welcome to Bitzprice app</h1>
      <p>Check Current bitcoin rates</p>
      <Prices bpi={props.bpi} />
    </div>
  </Layout>
);
Index.getInitialProps = async function() {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();
  return { bpi: data };
};
export default Index;
