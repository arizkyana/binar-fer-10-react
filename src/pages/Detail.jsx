import { useParams } from "react-router-dom";
const Detail = () => {
  const { carId, carBrand } = useParams();
  return (
    <div>
      Detail: {carId} - {carBrand}
    </div>
  );
};

export default Detail;
