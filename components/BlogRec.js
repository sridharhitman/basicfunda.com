import React from "react";
import Script from "next/Script";
import Link from "next/link";
import PropTypes from 'prop-types'
const BlogRec = (props) => {
  return (
    <div>
      <Script
        id="my-id3"
        strategy="beforeInteractive"
        src="https://cdn.tailwindcss.com"
      >
        {" "}
      </Script>
     
    </div>
  );
};

export default BlogRec;
BlogRec.PropTypes = { header: PropTypes.object.isRequired, details: PropTypes.object.isRequired, date: PropTypes.object.isRequired};
