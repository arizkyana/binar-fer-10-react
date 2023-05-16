import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button, FormControl } from "react-bootstrap";
import ReactSelect from "react-select";

const Search = () => {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [kategori, setKategori] = useState();
  const [harga, setHarga] = useState();
  const [status, setStatus] = useState();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("result submit");
    console.log("name: ", name);
    console.log("kategori: ", kategori);
    console.log("harga: ", harga);
    console.log("status: ", status);
    navigate(
      `/result?name=${name}&kategori=${kategori}&harga=${harga}&status=${status}`
    );
  };

  return (
    <Container className="py-3">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="d-block">Nama Mobil</label>
          <FormControl
            type="text"
            onChange={(evt) => setName(evt.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="d-block">Kategori</label>
          <select name="" id="">
            <option value="small">2-4 orang</option>
            <option value="medium">4-6 orang</option>
            <option value="large">6-8 orang</option>
          </select>
          <ReactSelect
            placeholder="Kategori"
            options={[
              {
                label: "Small",
                value: "small",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Large",
                value: "large",
              },
            ]}
            onChange={(selected) => setKategori(selected.value)}
          />
        </div>
        <div className="mb-3">
          <label className="d-block">Harga</label>
          <select name="" id="">
            <option value="0-400000">{"< 400"}</option> min - max
            <option value="400000-600000">{"400 - 600"}</option> min - max
            <option value="99999999999999">{"> 600"}</option> max
          </select>
          <ReactSelect
            placeholder="Pilih Rentang Harga"
            options={[
              {
                label: "< 400.000",
                value: "0-400000",
              },
              {
                label: "400.000 - 600.000",
                value: "400000-600000",
              },
              {
                label: "> 600.000",
                value: "99999999999999",
              },
            ]}
            onChange={(selected) => setHarga(selected.value)}
          />
        </div>
        <div className="mb-3">
          <label className="d-block">Status</label>
          <select name="" id="">
            <option value="true">Di Sewa</option>
            <option value="false">Tersedia</option>
          </select>
          <ReactSelect
            placeholder="Pilih Status"
            options={[
              {
                label: "Disewa",
                value: true,
              },
              {
                label: "Belum Disewa",
                value: false,
              },
            ]}
            onChange={(selected) => setStatus(selected.value)}
          />
        </div>
        <div className="">
          <Button type="submit" className="d-block" style={{ width: "100%" }}>
            Cari Mobil
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Search;
