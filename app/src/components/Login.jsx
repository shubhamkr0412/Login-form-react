import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContexts";

export const Login = () => {
  const { handleToken } = useContext(AuthContext);
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <div>
      <input
        onChange={handleChange}
        type="text"
        name="username"
        placeholder="Enter Username"
      ></input>
      <input
        onChange={handleChange}
        type="text"
        name="password"
        placeholder="Enter Password"
      ></input>
      <button
        onClick={() => {
          handleToken("sadfsdfasdf");
          navigate(-1);
        }}
      >
        Submit
      </button>
    </div>
  );
};
