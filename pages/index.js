import Fetch from 'isomorphic-unfetch';
import Layout from "../components/MyLayout";


const Index = (props) => (

    <Layout></Layout>
    <p>Hello Next.js</p>;

)

Page.getInitialProps = async function() {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();

    return {
        bpi: data.bpi
    }
}

export default withLayout(Page);
 