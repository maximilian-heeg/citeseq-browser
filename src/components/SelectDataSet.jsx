import React from "react";
import "./SelectDataSet.css";

import { day7Config } from "../config/day7";
import { day30Config } from "../config/day30";
import { day60Config } from "../config/day60";
import { tumorConfig } from "../config/tumor";

import imgDay7 from "./images/day7.png";
import imgDay30 from "./images/day30.png";
import imgDay60 from "./images/day60.png";
import imgTumor from "./images/tumor.png";

export default function SelectDataset({ setConfig }) {
  const [visible, setVisible] = React.useState(true);

  return (
    <div className="selectContainer">
      <button onClick={() => setConfig(day7Config)}>
        <img src={imgDay7} alt="Day 7" />
        Day 7 post infection with LCMV Armstrong
      </button>
      <button onClick={() => setConfig(day30Config)}>
        <img src={imgDay30} alt="Day 30" />
        Day 30 post infection with LCMV Armstrong
      </button>
      <button onClick={() => setConfig(day60Config)}>
        <img src={imgDay60} alt="Day 60" />
        Day 60 post infection with LCMV Armstrong
      </button>
      <button onClick={() => setConfig(tumorConfig)}>
        <img src={imgTumor} alt="Tumor" />
        Tumor experiment
      </button>
    </div>
  );
}
