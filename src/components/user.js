import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/action";

export default function User() {
  const Data = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [flag, setFlag] = useState(false);

  const getUsers = () => {
    dispatch(actions.getAllUsers());
    setFlag(true);
  };

  return (
    <>
      <button onClick={getUsers}>get users</button>
      {flag == true &&
        Data.AllUsers.map((user, index) => {
          <p>
            user number {index+1}:
            {user.name}
            <br></br>
            {user.password}
            <br></br>
            {user.mail}
          </p>;
        })}
    </>
  );
}
