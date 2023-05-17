import { Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "../components/Button";

// https://d59b-2001-448a-3052-8013-b916-585d-6bce-d73b.ap.ngrok.io

const SearchResult = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState();

  const fetchCarsData = async () => {
    try {
      const response = await axios.get(
        "https://bootcamp-rent-cars.herokuapp.com/customer/v2/car",
        {
          params: {
            name: searchParams.get("name"),
            category: searchParams.get("kategori"),
            isRented: searchParams.get("status"),
            minPrice: searchParams.get("harga"),
            maxPrice: searchParams.get("harga"),
            // isRented: false,
            // minPrice: 400000,
            // maxPrice: 600000,
            // page: 1,
            // pageSize: 10,
          },
        }
      );
      setData(response.data);
    } catch (error) {
      console.log("error > ", error);
    }
  };

  // useEffect
  // saat mounted komponen Result
  // melakukan hit API untuk mendapatkan data mobil
  useEffect(() => {
    fetchCarsData();
  }, []);

  return (
    <Container className="pt-5">
      <h3>Hasil Pencarian: </h3>

      <Row>
        {data?.cars?.length > 0 ? (
          data.cars.map((car) => {
            return (
              <Col lg={3}>
                <Card>
                  {car && car.image ? (
                    <Card.Img variant="top" src={car.image}></Card.Img>
                  ) : (
                    <div
                      style={{
                        minHeight: "5rem",
                        background: "gray",
                        borderRadius: "10px",
                      }}
                    >
                      Default Background
                    </div>
                  )}
                  <Card.Body>
                    <Card.Title>
                      {car.name} {car.id}
                    </Card.Title>
                    <Card.Text>{car.price} / hari</Card.Text>
                    <Card.Text>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repudiandae inventore natus voluptate nobis vitae odit
                      accusamus neque! Vero similique praesentium ullam iste in,
                      laboriosam ut laborum commodi maiores odit ea.
                    </Card.Text>
                    <Button
                      type="button"
                      variant="success"
                      // className="d-block"
                      style={{ width: "100%" }}
                    >
                      Pilih Mobil
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <>Kata kunci {searchParams.get("name")} tidak ada</>
        )}
      </Row>
    </Container>
  );
};

export default SearchResult;
