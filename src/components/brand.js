import {Link} from "gatsby";
import * as React from "react";

import "../styles/brand.css"

const Brand = () => (
  <Link className="brand" to="/">
    <span className="text-green">ryoma</span>
    <span className="text-white">:</span>
    <span className="text-magenta">~</span>
    <span className="text-white">$</span>
  </Link>
)

export default Brand
