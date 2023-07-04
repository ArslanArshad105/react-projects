import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <Container>
      <Helmet>
        <title>Arslan's Portfolio</title>
        {/* <meta name="description" content="Helmet application" /> */}
      </Helmet>
      This is Home Page
    </Container>
  );
};

export default Home;
