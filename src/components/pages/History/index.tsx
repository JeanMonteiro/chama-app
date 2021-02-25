import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "src/store";
import { getSearchs, HistoryState } from "src/store/ducks/history";

import { Container, HistoryLine } from "./styles";

const History: React.FC = () => {
  const dispatch = useDispatch();

  const historyState = useSelector<ApplicationState, HistoryState>(
    (state) => state.history
  );

  useEffect(() => {
    dispatch(getSearchs());
  }, []);

  return (
    <Container>
      {historyState.searchs.map((search, index) => (
        <HistoryLine key={`${index}`}>
          <a href={`/search/${search}`}>{search}</a>
        </HistoryLine>
      ))}
    </Container>
  );
};

export default History;
