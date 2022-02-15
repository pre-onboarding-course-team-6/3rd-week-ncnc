import React, { useState } from "react";
import { ChevronRight, ChevronLeft } from "shared/icons";
import * as S from "./styled";

const Banner = () => {
  const [state, setState] = useState<number>(1);

  const onClick = (e) => {
    const target = Number(e.target.value);
    setState(target);
  };

  function Next() {
    if (state >= 3) {
      setState(1);
    } else {
      setState(state + 1);
    }
  }
  function Prev() {
    if (state === 1) {
      setState(3);
    } else {
      setState(state - 1);
    }
  }

  setTimeout(() => Next(), 5000);

  return (
	<S.Wrapper>
		<S.Image src={`/banner${state}.jpg`} alt={`banner${state}`} />
		<S.ListBox>
			<S.Point onClick={onClick} value={1} state={state} />
			<S.Point onClick={onClick} value={2} state={state} />
			<S.Point onClick={onClick} value={3} state={state} />
		</S.ListBox>
		<S.MoveArrow style={{ right: "10px" }} onClick={() => Next}>
			<ChevronRight />
		</S.MoveArrow>
		<S.MoveArrow style={{ left: "10px" }} onClick={() => Prev}>
			<ChevronLeft />
		</S.MoveArrow>
	</S.Wrapper>
  );
};

export default Banner;
