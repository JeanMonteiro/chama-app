import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "src/types/User";
import { ApplicationState } from "src/store";
import { requestGetUsers, UserState } from "src/store/ducks/users";
import { LoaderSpinner } from "src/styles";
import {
  Avatar,
  UserName,
  RepoContainer,
  AvatarContainer,
  InfoContainer,
  SubmitButton,
} from "./styles";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Search: React.FC = () => {
  const dispatch = useDispatch();

  const userNameInputTextRef = useRef<HTMLInputElement>(null);

  const { username } = useParams<{ username: string }>();

  useEffect(() => {
    if (username) {
      if (userNameInputTextRef.current) {
        userNameInputTextRef.current.value = username;
      }
      dispatch(requestGetUsers(username));
    }
  }, []);

  const userState = useSelector<ApplicationState, UserState>(
    (state) => state.users
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userNameInputTextRef?.current?.value) {
      dispatch(requestGetUsers(userNameInputTextRef?.current?.value));
    } else {
      toast("Digite um nome de usuário", { type: "warning" });
    }
  };

  const renderRepos = () => {
    if (userState.loadingRepos) {
      return <LoaderSpinner />;
    }

    if (userState.user?.repos?.length === 0) {
      return <p></p>;
    }
    return (
      <div>
        <h3 style={{ marginTop: "3%" }}>Repositories</h3>
        {userState.user?.repos?.map((repo) => {
          return (
            <RepoContainer key={`${repo.id}`}>
              <div className="display-flex">
                <p className="label">name:</p>
                <p>{repo.name}</p>
              </div>

              <div className="display-flex">
                <p className="label">visibiliy:</p>
                <p>{repo.private ? "private" : "public"}</p>
              </div>

              <div className="display-flex">
                <p className="label">Description:</p>
                <p>{repo.description}</p>
              </div>

              <div className="display-flex">
                <p className="label">URL:</p>
                <a href={repo.html_url}>{repo.html_url}</a>
              </div>
            </RepoContainer>
          );
        })}
      </div>
    );
  };

  const renderUserCard = (user?: User) => {
    if (user === undefined) {
      return null;
    }
    if (userState.loadingUser) {
      return <LoaderSpinner />;
    }
    return user ? (
      <>
        <div className="display-flex">
          <AvatarContainer>
            <Avatar src={user.avatar_url} alt="Avatar" />
            <UserName>{user.name}</UserName>
          </AvatarContainer>
          <InfoContainer>
            <div className="display-flex">
              <p className="label bold">Location:</p>
              <p>{`${user.location ? user.location : "Não infomado"}`}</p>
            </div>
            <div>
              <p className="bold">Bio: </p> <p>{` ${user.bio}`}</p>
            </div>
          </InfoContainer>
        </div>
        {renderRepos()}
      </>
    ) : (
      <div>
        <p>Nenhum usuário encontrado</p>
      </div>
    );
  };

  const renderSearchForm = () => (
    <form
      onSubmit={onSubmit}
      className="form"
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      <input
        ref={userNameInputTextRef}
        type="text"
        name="text"
        placeholder="Search Users..."
        style={{
          width: "80%",
          marginRight: "1%",
          display: "flex",
          flexGrow: 3,
        }}
      />

      <SubmitButton type="submit" value="Search" className="btn btn-primary" />
    </form>
  );

  return (
    <div>
      {renderSearchForm()}
      {renderUserCard(userState.user)}
    </div>
  );
};

export default Search;
