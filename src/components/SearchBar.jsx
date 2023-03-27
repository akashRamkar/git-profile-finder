import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";
const SearchBar = (props) => {
	const [user, setUser] = useState();
	let fetchUserData = props.fetchUserData;

	function handleSubmit(event) {
		event.preventDefault();

		fetchUserData(user);
	}
	function changeHandler(event) {
		setUser(event.target.value);
	}
	return (
		<form
			className="flex  max-w-full mx-auto md:mx-0 justify-evenly md:justify-between"
			onSubmit={handleSubmit}
		>
			<div className="flex items-center p-2 bg-blue-50 md:w-full mr-6 rounded-lg">
				<FcSearch />
				<input
					id="login"
					onChange={changeHandler}
					name="login"
					type="text"
					placeholder="your profile name..."
					className="text-center bg-blue-50 h-full md:w-full outline-none rounded"
				/>
			</div>

			<button className=" rounded-md font-bold text-white bg-indigo-500 px-6 py-3">
				Search
			</button>
		</form>
	);
};

export default SearchBar;
