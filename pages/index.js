import fetch from "isomorphic-unfetch";

import Prices from '../components/Prices';

const Index = (props) => (

    <div>
      <h1>This is a Bitcoin Company</h1>
      
      <Prices bpi={props.bpi}/>
    </div>

);

Index.getInitialProps = async function() {
  const res = await fetch
  ('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    bpi: data.bpi  
  };
};

export default Index;
