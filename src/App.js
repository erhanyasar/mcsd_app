import React, { useState } from "react";
import { Selam, Naber } from "./components/Selam";
import SurveyDocumentation from "./components/SurveyDocumentation";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./css/App.css";

function App() {
  const [ornekDegisken, setOrnekDegisken] = useState("");
  const [isGorunur, setIsGorunur] = useState(false);

  const DegisiklikOlunca = (event) => {
    setOrnekDegisken(event.target.value);
  };

  const DegisikligiGonder = () => {
    setIsGorunur(true);
  };

  return (
    <>
      <Container>
        <Row className="mt-5 p-5">
          <Col>
            <input
              defaultValue={ornekDegisken}
              placeholder="Adınızı giriniz..."
              onChange={(e) => DegisiklikOlunca(e)}
            ></input>
          </Col>
          <Col>
            <Button variant="info" onClick={DegisikligiGonder}>
              Gönder
            </Button>
          </Col>
        </Row>
        <Row className="mt-10">
          <Col className="p-3">
            <Selam isim={ornekDegisken} isGorunur={isGorunur} />
          </Col>
          <Col className="p-3">
            <Naber />
          </Col>
          <Col className="p-3">
            <SurveyDocumentation />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
