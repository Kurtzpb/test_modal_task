import React from "react";

import { storiesOf } from "@storybook/react";

import ModalWindow from "../components/ModalWindow";
import SelectItem from "../components/SelectItem";

storiesOf("ModalWindow", module).add("to Storybook", () => <ModalWindow />);

storiesOf("SelectItem", module).add("to Storybook", () => <SelectItem />);
