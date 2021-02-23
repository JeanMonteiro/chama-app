import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { requestGetUsers } from "src/store/ducks/users";

// import { Container } from './styles';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const userNameInputTextRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userNameInputTextRef?.current?.value) {
      dispatch(requestGetUsers(userNameInputTextRef?.current?.value));
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          ref={userNameInputTextRef}
          type="text"
          name="text"
          placeholder="Search Users..."
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
    </div>
  );
};

export default Search;
