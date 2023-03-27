import React, { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";
const Header = (props) => {
	const [mode, setMode] = useState("Dark");
	let lightModeOn = props.lightModeOn;
	let setLightModeOn = props.setLightModeOn;
	function toggleHandler() {
		if (mode === "Dark") {
			setMode("Light");
		} else {
			setMode("Dark");
		}

		console.log(mode);
		setLightModeOn((prev) => !prev);
	}

	return (
		<div className="flex  justify-evenly md:justify-between">
			<div>
				<p className="text-blue-700 font-bold">DevDetective</p>
			</div>
			<div className="flex gap-2 justify-center items-center">
				<p
					className={`uppercase font-bold ${
						lightModeOn ? "text-slate-600" : "text-white"
					}`}
				>
					{mode}
				</p>

				<button onClick={toggleHandler}>
					{lightModeOn ? <MdDarkMode /> : <FiSun className="text-white" />}
				</button>
			</div>
		</div>
	);
};

export default Header;
