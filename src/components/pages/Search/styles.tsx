import styled from "styled-components";

export const Container = styled.div``;

export const Avatar = styled.img`
  width: 50%;
  border-radius: 50%;
`;

export const AvatarContainer = styled.div`
  display: flex;
  width: 20%;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid black;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1%;
`;

export const UserName = styled.h5`
  display: inline;
`;

export const RepoContainer = styled.div`
  border-bottom: 0.5px solid black;
  padding-bottom: 1%;
  padding-top: 1%;
`;

export const SearchInput = styled.input`
  width: 80%;
  margin-right: 1%;
  display: flex;
  flex-grow: 3;
`;

export const SubmitButton = styled.input`
  display: flex;
  flex: 1;
  justify-content: center;
`;
