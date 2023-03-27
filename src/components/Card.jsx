import React from "react";

const Card = (props) => {
	let lightModeOn = props.lightModeOn;

	const classes =
		"rounded-lg w-[700px] shadow-md m-2  px-6 py-4 w-fit" + props.className;
	const lightMode = "bg-white";
	const darkMode = "bg-slate-800";
	return (
		<div className={`${classes} ${lightModeOn ? lightMode : darkMode}`}>
			{props.children}
		</div>
	);
};

export default Card;
