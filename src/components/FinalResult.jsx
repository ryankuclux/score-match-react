import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation dan useNavigation dari React Router
import { Container, Row, Col, Button } from "react-bootstrap"; // Import Container, Row, Col, dan Button dari React Bootstrap

function FinalResult() {
  const location = useLocation(); // Inisialisasi fungsi location untuk mendapatkan state dari halaman ini
  const navigate = useNavigate(); // Inisialisasi fungsi navigate untuk navigasi halaman
  // Mengambil title, teamA, teamB, countA, countB, dan winner dari state location
  const { title, teamA, teamB, countA, countB, winner } = location.state;

  return (
    <Container
      fluid
      style={{
        backgroundColor: "#222831",
        minHeight: "100vh",
        paddingTop: "20px",
        paddingBottom: "40px",
      }}
      className="text-white text-center"
    >
      <Row className="justify-content-center">
        <Col xs="auto">
          <h1>Hasil Akhir Pertandingan {title}</h1>
        </Col>
      </Row>

      <Row className="justify-content-center my-4">
        <Col xs="auto">
          <p>
            Pertandingan dimenangkan oleh <strong>{winner}</strong>
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center my-4">
        <Col xs="auto">
          <p>
            dengan skor{" "}
            <strong>
              {teamA} {countA} - {countB} {teamB}
            </strong>
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs="auto">
          <Button variant="primary" onClick={() => navigate("/")}>
            Kembali ke Beranda
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default FinalResult;