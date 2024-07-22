import { useState } from "react"; // Import useState dari React
import { useNavigate, useLocation } from "react-router-dom"; // Import useNavigate dan useLocation dari React Router
import { Container, Row, Col, Form, Button } from "react-bootstrap"; // Import Container, Row, Col, Form, dan Button dari React Bootstrap

function InputTeams() {
  const navigate = useNavigate(); // Inisialisasi fungsi navigate untuk navigasi halaman
  const location = useLocation(); // Inisialisasi fungsi location untuk mendapatkan state dari halaman ini
  const { title } = location.state; // Mengambil title dari state location

  const [teamA, setTeamA] = useState(""); // Membuat state lokal untuk tim a
  const [teamB, setTeamB] = useState(""); // Membuat state lokal untuk tim b

  // Fungsi yang akan dipanggil ketika tombol "Mulai" ditekan
  const handleTeams = () => {
    // Menghentikan proses handleTeams jika input kosong
    if (teamA.trim() === "" || teamB.trim() === "") {
      alert("Nama tim tidak boleh kosong!");
      return;
    }
    // Arahkan pengguna ke halaman /Started dengan membawa state title, teamA, teamB
    navigate("/Started", { state: { title, teamA, teamB } });
  };

  return (
    <>
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

        <Row className="justify-content-center" style={{ padding: "50px" }}>
          <Col xs={12} md={6}>
            <Form>
              <Form.Group className="mb-4" controlId="teamA">
                <Form.Label>Masukkan Nama Tim A</Form.Label>
                <Form.Control
                  type="text"
                  value={teamA}
                  onChange={(e) => setTeamA(e.target.value)} // Update state tim a ketika ada perubahan pada input
                />
              </Form.Group>
              <div className="text-center mb-4">
                <h3>VS</h3>
              </div>
              <Form.Group className="mb-4" controlId="teamB">
                <Form.Label>Masukkan Nama Tim B</Form.Label>
                <Form.Control
                  type="text"
                  value={teamB}
                  onChange={(e) => setTeamB(e.target.value)} // Update state tim b ketika ada perubahan pada input
                />
              </Form.Group>
              <div className="text-center">
                <Button variant="primary" onClick={handleTeams}>
                  Mulai
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default InputTeams;