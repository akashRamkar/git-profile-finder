import React, { useState } from "react";

const DateComponet = ({ join_date, lightModeOn, label }) => {
	let date = new Date(join_date);

	let month = date?.toLocaleString("default", { month: "short" }).toString();
	let day = date?.getDate().toString();
	let year = date?.getFullYear().toString();
	let classStyle = `${
		lightModeOn ? "text-indigo-900" : "text-red-400"
	} font-semibold`;
	return (
		<p className="tracking-[1px]">
			<span className={classStyle}>{label}</span>{" "}
			<span className={classStyle}>{day}</span>{" "}
			<span className={classStyle}>{month}</span>{" "}
			<span className={classStyle}>{year}</span>
		</p>
	);
};

export default DateComponet;
