import React from "react";
import Script from "next/Script";
import Link from "next/link";
import PropTypes from 'prop-types'
const BlogRec = (props) => {
  var href = "/blogs/" + props.header;
  return (
    <div>
      <Script
        id="my-id3"
        strategy="beforeInteractive"
        src="https://cdn.tailwindcss.com"
      >
        {" "}
      </Script>
      <Link href={href}>
        <div className="m-3 cursor-pointer bg-gradient-to-r from-blue-400 to-blue-600 p-6 text-gray-200 hover:text-white w-[43rem]">
          <h3 className="text-3xl underline decoration-gray-300">
            {props.header}
          </h3>
          <p className="truncate text-ellipse">{props.details}</p>
          <h6 className="text-right mt-7 text-sm text-gray-200 hover:text-white">
            {props.date}
          </h6>
        </div>
      </Link>
    </div>
  );
};

export default BlogRec;
BlogRec.PropTypes = { header: PropTypes.object.isRequired, details: PropTypes.object.isRequired, date: PropTypes.object.isRequired};
