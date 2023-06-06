import React, { Fragment, useEffect, useState } from "react";
import { Row, Container, Navbar, Button, Col } from "react-bootstrap";
import Heroimg from "../AirbnbPage/Heroimg";
import Card from "../AirbnbPage/Card";
import Card2 from "../AirbnbPage/Card2";
import { data } from "../../data";
import axios from "axios";
import Spinner from "../LoadingSpinner/Spinner";

const Airbnb = () => {
  const [records, setRecords] = useState([]);
  const [reload, isReload] = useState(false);
  const [pagenumber, setPagenumber] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.escuelajs.co/api/v1/products", {
        params: {
          offset: pagenumber * 10,
          limit: 10,
        },
      })
      .then((response) => {
        setRecords(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [reload, pagenumber]);

  const cards = data.map((items, idx) => {
    return (
      <Fragment key={idx}>
        <Card
          crdimg={items.coverImg}
          star={items.starImg}
          rating={items.stats.rating}
          ratingCount={items.stats.reviewCount}
          countryLoc={items.location}
          title={items.title}
          price={items.price}
        />
      </Fragment>
    );
  });

  const card2 = records.map((apirecord, idx) => {
    return (
      <Fragment key={idx}>
        <Card2
          card2img={apirecord.images[0]}
          name={apirecord.name}
          title={apirecord.title}
          price={apirecord.price}
          description={apirecord.description}
        />
      </Fragment>
    );
  });

  return (
    <>
      <Navbar className="Airbnbnav">
        <Navbar.Brand className="Airbnblogo">
          <img
            src="http://localhost:3000/Media/Airbnb_logo.png"
            alt="Airbnb Logo"
          />
        </Navbar.Brand>
      </Navbar>
      <Heroimg />
      <Container>
        <Row>{cards}</Row>
        <Row>
          <Row>
            <h1 className="card2heading">This is API Record</h1>
            <Row>
              <Button onClick={() => isReload(!reload)}>Reload</Button>
              <span>
                <p></p>
              </span>
              <Button
                onClick={() => {
                  setPagenumber(0);
                }}
              >
                Reset
              </Button>
              <span>
                <p></p>
              </span>
              <Col>
                <Button
                  onClick={() =>
                    pagenumber > 0 ? setPagenumber(pagenumber - 1) : null
                  }
                >
                  previous Page
                </Button>
              </Col>
              <Col>
                <Button onClick={() => setPagenumber(pagenumber + 1)}>
                  Next Page
                </Button>
              </Col>
            </Row>
            <h1>Page number: {pagenumber + 1}</h1>
          </Row>

          <>{loading ? <Spinner /> : card2}</>
        </Row>
      </Container>
    </>
  );
};

export default Airbnb;
