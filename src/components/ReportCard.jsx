import React from "react";

function ReportCard({ repos, following, followers }) {
	return (
		<div className=" mx-auto w-fit md:w-full  md:mx-0 flex flex-col items-center md:flex-row md:items-start gap-5 md:gap-24 bg-blue-100 py-3 px-6 my-2 rounded-md">
			<div>
				<p className="text-cyan-900 font-bold opacity-80">Repos</p>
				<p className="font-bold text-lg">{repos}</p>
			</div>
			<div>
				<p className="text-cyan-900 font-bold opacity-80">Followers</p>
				<p className="font-bold text-lg">{followers}</p>
			</div>
			<div>
				<p className="text-cyan-900 font-bold opacity-80">Following</p>
				<p className="font-bold text-lg">{following}</p>
			</div>
		</div>
	);
}

export default ReportCard;
