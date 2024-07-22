import { useState } from "react"; // Import useState dari React
import { Container, Form, Button } from "react-bootstrap"; // Import Container, Form, dan Button dari React Bootsrap
import { useNavigate } from "react-router-dom"; // Import useNavigate dari React Router

function InputMatch() {
  const [title, setTitle] = useState(""); // Inisialisasi state title
  const navigate = useNavigate(); // Inisialisasi fungsi navigate untuk navigasi halaman

  // Fungsi yang akan dipanggil ketika tombol "Mulai" ditekan
  const handleMatch = () => {
    // Menghentikan proses handleMatch jika input kosong
    if (title.trim() === "") {
      alert("Judul pertandingan tidak boleh kosong!");
      return;
    }
    // Arahkan pengguna ke halaman /Teams dengan membawa state title
    navigate("/Teams", { state: { title } }); 
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
    >
      <div className="d-flex justify-content-center text-white">
        <div style={{ padding: "20px" }}>
          <div
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            <p>Selamat Datang di Aplikasi Score Match</p>
          </div>
          <div style={{ paddingBottom: "10px", textAlign: "center" }}>
            <label>Masukkan Judul Pertandingan</label>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Form.Group style={{ marginRight: "10px", marginBottom: "0" }}>
              <Form.Control
                type="text"
                value={title}
                onChange={ (e) => setTitle(e.target.value) } // Update state title ketika ada perubahan pada input
              />
            </Form.Group>
            <Button variant="primary" onClick={ handleMatch }>
              Mulai
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default InputMatch;