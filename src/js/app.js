import React from "react";
import { render } from "react-dom";
import ButtonNext from "./component/ButtonNext";
import Question from "./component/Question";
import Result from "./component/Result";
import Choices from "./component/Choices";

const onClick = ()=> console.log('success');

render(
    <div>
        <Question />
        <ButtonNext onClick={onClick} />
        <Choices onClick={onClick} />
        <Result result={'fine'} />
    </div>,
    document.getElementById('main')
);
