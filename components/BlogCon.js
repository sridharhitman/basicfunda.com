import React from "react";
import Script from "next/script";
import Link from "next/link";
import PropTypes from 'prop-types'
const BlogCon = (props) => {
  var href = "/blogs/" + props.header;
  return (
    <div>
  
      <Link href={href}>
        <div className=" cursor-pointer bg-gradient-to-r from-cyan-700 to-cyan-300 hover:from-cyan-900 hover:to-cyan-500 font-mono text-gray-200 p-8 h-72 w-72 md:m-7 lg:10 text-center ">
          <h1 className="text-2xl mb-7 hover:text-white">{props.header}</h1>
          <p className="text-md truncate text-ellipse hover:text-white">
            {props.details}
          </p>
          <h6 className="text-right mt-7 text-sm text-gray-200 hover:text-white">
            {props.date}
          </h6>
        </div>
      </Link>
    </div>
  );
};

export default BlogCon;
BlogCon.PropTypes = { header: PropTypes.object.isRequired, details: PropTypes.object.isRequired, date: PropTypes.object.isRequired};
