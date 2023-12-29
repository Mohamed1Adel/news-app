import React,{useEffect, useState} from "react";
import { Container, Accordion, Col, Row, Card, Button } from "react-bootstrap";
import NavBar from "../navbar/navbar";
import ImageSlider from "../imageSlider/imageSlider";
import axios from "axios";

export default function Home() {

  const [data,setData] = useState("");
  const [zamalek,setZamalek] = useState("");
  const getData =async ()=>{
    try {
      
      // const response = await axios.get(`https://www.btolat.com/HomePageMatchesBox/GetList`);
      const response = await axios.get(`https://webws.365scores.com/web/standings/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competit/ions=552&live=false&withSeasons=true&`);
      const data = response.data;
      // console.log(data.standings[0].rows.filter((item)=>item.competitor.name == 'الزمالك'));
      // const zam = data?.standings[0]?.rows.filter((item)=>item.competitor.name == 'الزمالك');
      // console.log(data?.standings[0]?.rows.filter((item)=>item.competitor.name == 'الزمالك'));
      // setZamalek(zam)
      setData(data);
    } catch (e) {
      console.log(e);
    }
    

  }


  useEffect(()=>{
    getData();
    console.log(data);
    // console.log(zamalek[0]?.nextMatch.homeCompetitor.name);
  },[])
  return (
    <>
      <NavBar />

      {/* <ImageSlider /> */}

      <Container>

      {/* <ImageSlider /> */}
        {/* <Row>
          <Col
            className="col-12 col-md-6 col-lg-3"
            style={{ border: "1px solid #000", minHeight: "100vh" }}
          >
            <h4>المباراة القادمة</h4><br />
          
            <div>
              <div  className="box " style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
    <div className="first-team">
    <p>{zamalek[0]?.nextMatch.homeCompetitor.name}</p>
    </div>
    <div className="match-date">
    <p>{zamalek[0]?.nextMatch.statusText}</p>
    <p>{zamalek[0]?.nextMatch.startTime}</p>
    </div>
    <div className="second-team">
<p>{zamalek[0]?.nextMatch.awayCompetitor.name}</p>

    </div>

              </div>
            </div>
            <h4>اخر خمس مبارات</h4>
            <div></div>
            <h4>جدول ترتيب الفرق</h4>
          </Col>
          <Col
            className="col-12 col-md-6 col-lg-9"
            style={{ border: "1px solid #000", minHeight: "100vh" }}
          >
            <div
              style={{
                width: "100%",
                height: "70vh",
                border: "1px solid #000",
              }}
            >
  
            </div>
            <h4>اخر الاخبار</h4>
            <Row>
              <Col className="col-12 col-md-6 col-lg-4 border">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="col-12 col-md-6 col-lg-4 border">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="col-12 col-md-6 col-lg-4 border">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row> */}
      </Container>
    </>
  );
}
