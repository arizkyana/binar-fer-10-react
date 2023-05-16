import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

// Siklus Komponen:
// 1. Mounted
// 2. DidUpdate
// 3. Destroy/Unmounted

// props
function AreaParkir(props) {
  const [motor, setMotor] = useState("honda"); // state
  const [mobil, setMobil] = useState("bmw"); // state

  useEffect(() => {
    console.log("useEffect -> 1");
    console.log("mobil > ", mobil);
    console.log("motor > ", motor);
  }, [motor, mobil]);

  // function handleClick() {}
  const handleClick = () => {
    setMotor("yamaha");
  };

  return (
    <>
      <div>
        Info Kendaraan (State): Motor:{motor} - Mobil:{mobil}
      </div>
      <div>
        Info Kendaraan (Props): {props.motor} - {props.mobil}
      </div>
      <div>
        <button type="button" onClick={handleClick}>
          Ubah Motor
        </button>
      </div>
    </>
  );
}

function GedungMal() {
  return <AreaParkir motor={10} mobil={5} />;
}

// 1. basic hooks -> bawaan react (useState dan useEffect)
// 2. custom hooks -> hooks yang dibuat oleh developer
//   useGetListCar
//     -> useState dan useEffect

function LoginForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [hidePassword, setHidePassword] = useState(true);

  useEffect(() => {
    console.log("mounted");
  }); // Mounted

  useEffect(
    function () {
      console.log("did update");
      // console.log("useEffect login form...");
      // console.log("email > ", email);
      // console.log("password > ", password);
    },
    [email, password] // Updating / DidUpdate
  );

  // useEffect(() => {}, []); // Mounted

  useEffect(() => {
    return () => {
      console.log("unmounted");
    }; // Unmounted
  }, []);

  const handleChangeEmail = (evt) => {
    const value = evt.target.value;
    console.log("value email > ", value);
    setEmail(value);
  };
  const handleChangePassword = (evt) => {
    const value = evt.target.value;
    console.log("value password > ", value);
    setPassword(value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("result submit form...");
    console.log("email > ", email);
    console.log("password > ", password);
    window.location.href = `/search-result?nama_mobil=${email}&kategori=${password}&harga=${4}`;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            placeholder="Type your email here"
            name="email"
            onChange={handleChangeEmail}
          />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input
            type={hidePassword ? "password" : "text"}
            placeholder="Type your password here"
            name="passsword"
            onChange={handleChangePassword}
          />
          <button type="button" onClick={() => setHidePassword(!hidePassword)}>
            toggle text
          </button>
        </div>
        <div>
          <button type="submit">Go to my Account</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
