import React from "react";
import { render } from "react-dom";
import { List01 } from "./component/List01";
import { TestMolecures } from "./component/TestMolecures";
import { Random } from './lib/Random';


render(
    <TestMolecures />,
    document.getElementById('main')
);

