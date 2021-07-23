import {Link} from "gatsby";
import * as React from "react";

import "../styles/brand.css"

const Brand = () => (
  <div className="brand">
    <Link to="/">
      <span className="text-green">ryoma</span>
      <span className="text-white">:</span>
      <span className="text-magenta">~</span>
      <span className="text-white">$</span>
    </Link>
  </div>
)

export default Brand
