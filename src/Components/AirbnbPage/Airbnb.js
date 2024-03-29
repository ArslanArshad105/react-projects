import React, { Fragment, useEffect, useState } from "react";
import { Row, Container, Navbar, Button, Col } from "react-bootstrap";
import Heroimg from "../AirbnbPage/Heroimg";
import Card from "../AirbnbPage/Card";
import Card2 from "../AirbnbPage/Card2";
import { data } from "../../Services/data";
import axios from "axios";
import Spinner from "../LoadingSpinner/Spinner";
import { Helmet } from "react-helmet";
import * as Constants from "../../Services/Constants";

const Airbnb = () => {
  const [records, setRecords] = useState([]);
  const [reload, isReload] = useState(false);
  const [pagenumber, setPagenumber] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(Constants.FAKE_STORE_API, {
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
          <img src="../../Media/Airbnb_logo.png" alt="Airbnb Logo" />
        </Navbar.Brand>
      </Navbar>

      <Container>
        <Helmet>
          <title>Airbnb | Arslan's Portfolio</title>
        </Helmet>
        <Heroimg />
        <Row>{cards}</Row>
      </Container>
      <Row>
        <h1 className="card2heading">Platzi Fake Store API</h1>
        <p className="card2Para">
          Fake store rest API for e-commerce or shopping website prototype.
        </p>
      </Row>
      <Container>
        <Row>
          <Button
            style={{ marginBottom: "20px" }}
            onClick={() => isReload(!reload)}
          >
            Reload
          </Button>
        </Row>
        <Row>
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
        </Row>
        <Row>
          <Col xs={6} className="Pg-Btn">
            <Button
              onClick={() =>
                pagenumber > 0 ? setPagenumber(pagenumber - 1) : null
              }
            >
              Previous Page
            </Button>
          </Col>
          <Col xs={6} className="Pg-Btn">
            <Button onClick={() => setPagenumber(pagenumber + 1)}>
              Next Page
            </Button>
          </Col>
        </Row>
        <Row>
          <h1 className="card2heading">Page Number: {pagenumber + 1}</h1>
        </Row>
        <Row>
          <>{loading ? <Spinner /> : card2}</>
        </Row>
      </Container>
    </>
  );
};

export default Airbnb;
