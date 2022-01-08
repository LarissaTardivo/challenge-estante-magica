import BrIcon from "../assets/Images/br-icon.png";
import MxIcon from "../assets/Images/mx-icon.png";
import CoIcon from "../assets/Images/co-icon.png";

export const internationalPrefix = [
  {
    value: "+55",
    label: (
        <div>
          <img
              style={{ margin: "0", verticalAlign: "top" }}
              src={BrIcon}
              alt=""
          />
          +55
        </div>
    ),
  },
  {
    value: "+52",
    label: (
        <div>
          <img
              style={{ margin: "0", verticalAlign: "top" }}
              src={MxIcon}
              alt=""
          />
          +52
        </div>
    ),
  },
  {
    value: "+57",
    label: (
        <div>
          <img
              style={{ margin: "0", verticalAlign: "top" }}
              src={CoIcon}
              alt=""
          />
          +57
        </div>
    ),
  },
];
