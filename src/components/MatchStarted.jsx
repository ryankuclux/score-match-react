import { useState } from "react"; // Import useState dari React
import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation dan useNavigate dari React Router
import { Container, Row, Col, Form, Button } from "react-bootstrap"; // Import Container, Row, Col, Form, dan Button dari React Bootstrap

function MatchStarted() {
  const location = useLocation(); // Inisialisai fungsi location untuk mendapatkan state dari halaman ini
  const navigate = useNavigate(); // Inisialisasi fungsi navigate untuk navigasi halaman
  const { title, teamA, teamB } = location.state; // Mengambil title, tim a, dan tim b dari state location

  const [countA, setCountA] = useState(0); // Membuat state lokal untuk menyimpan skor tim a
  const [countB, setCountB] = useState(0); // Membuat state lokal untuk menyimpan skor tim b

  // Fungsi untuk menambah skor tim a
  const incrementA = () => {
    setCountA(countA + 1);
  };

  // Fungsi untuk mengurangi skor tim a
  const decrementA = () => {
    if (countA > 0) {
      setCountA(countA - 1);
    }
  };

  // Fungsi untuk menambah skor tim b
  const incrementB = () => {
    setCountB(countB + 1);
  };

  // Fungsi untuk mengurangi skor tim b
  const decrementB = () => {
    if (countB > 0) {
      setCountB(countB - 1);
    }
  };

  // Fungsi yang akan dipanggil ketika tombol "Selesai" ditekan
  const finishMatch = () => {
    const winner = countA > countB ? teamA : countA < countB ? teamB : "Draw"; // Menentukan pemenang berdasarkan skor
    // Arahkan pengguna ke halaman /Result dengan membawa state title, teamA, teamB, countA, countB, winner
    navigate("/Result", {
      state: { title, teamA, teamB, countA, countB, winner },
    });
  };

  return (
    <Container
      fluid
      style={{
        backgroundColor: "#222831",
        minHeight: "100vh",
        paddingTop: "20px",
        paddingBottom: "40px",
      }}
      className="text-white"
    >
      <Row className="justify-content-center">
        <Col xs="auto">
          <h1>Pertandingan {title}</h1>
        </Col>
      </Row>

      <Row className="justify-content-center align-items-center my-4">
        <Col xs="auto">
          <Form.Label>{teamA}</Form.Label>
        </Col>
        <Col xs="auto">
          <Button variant="primary" onClick={incrementA}>
            +
          </Button>
        </Col>
        <Col xs="auto">
          <span>{countA}</span>
        </Col>
        <Col xs="auto">
          <Button variant="danger" onClick={decrementA}>
            -
          </Button>
        </Col>
      </Row>

      <Row className="justify-content-center my-4">
        <Col xs="auto">
          <h3>VS</h3>
        </Col>
      </Row>

      <Row className="justify-content-center align-items-center my-4">
        <Col xs="auto">
          <Form.Label>{teamB}</Form.Label>
        </Col>
        <Col xs="auto">
          <Button variant="primary" onClick={incrementB}>
            +
          </Button>
        </Col>
        <Col xs="auto">
          <span>{countB}</span>
        </Col>
        <Col xs="auto">
          <Button variant="danger" onClick={decrementB}>
            -
          </Button>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs="auto">
          <Button variant="success" onClick={finishMatch}>
            Selesai
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default MatchStarted;