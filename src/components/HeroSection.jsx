import React, { useEffect, useState } from "react";
import ReportCard from "./ReportCard";
import { TiLocation } from "react-icons/ti";
import { GrTwitter, GrOrganization } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";

import DateComponet from "./DateComponent";
const HeroSection = (props) => {
	let userProfile = props.userProfile;
	let lightModeOn = props.lightModeOn;

	return (
		<div className="flex flex-col items-center md:items-start md:flex-row gap-3">
			<div className=" w-[85px] h-[85px] md:w-[150px] md:h-[150px] ">
				<img
					src={userProfile.profileUrl}
					loading="lazy"
					className="bg-cover rounded-full w-full h-full object-cover"
				/>
			</div>
			<div className="flex flex-col w-full md:w-[490px] px-1 ">
				<div className=" px-7 md:px-0 flex justify-center gap-5 md:gap-0  md:justify-between w-[2/4] md:w-full ">
					<p
						className={`${
							lightModeOn ? "text-teal-800" : "text-white"
						} font-extrabold leading-relaxed`}
					>
						{userProfile.profileName}
					</p>
					<DateComponet
						label="Joined on "
						join_date={userProfile.join_date}
						lightModeOn={lightModeOn}
					/>
				</div>
				<div className="flex md:justify-between">
					<p className=" text-center md:text-start text-sky-500 underline font-semibold cursor-pointer">
						@{userProfile.login}
					</p>
					<DateComponet
						label={"last Update "}
						join_date={userProfile.last_update}
						lightModeOn={lightModeOn}
					/>
				</div>

				<div className="w-full py-4">
					<p
						className={` ${
							lightModeOn ? "text-stone-700" : "text-white"
						} text-center mx-auto md:mx-0 w-2/4 md:w-full  md:text-justify tracking-wide`}
					>
						{userProfile.description}
					</p>
				</div>
				<ReportCard
					repos={userProfile.repos}
					followers={userProfile.followers}
					following={userProfile.following}
				/>
				<ul
					className={`${
						!lightModeOn ? "text-white" : ""
					} grid  grid-cols-1 md:grid-cols-2  mx-auto md:mx-0 md:w-full auto-rows-auto md:gap-5 md:mt-5`}
				>
					<li className="flex gap-2 items-center">
						<TiLocation className="text-[24px]" />
						<a href={"#"}>
							{userProfile.location === null
								? "Not Available"
								: userProfile.location}
						</a>
					</li>
					<li className="flex gap-2 items-center">
						<GrTwitter className="text-[24px]" />
						<a href="#">
							{userProfile.twitter_username === null
								? "Not Available"
								: userProfile.twitter_username}
						</a>
					</li>
					<li className="flex gap-2 items-center">
						<IoIosMail className="text-[24px]" />
						<a href="#">
							{userProfile.email === null
								? "Mail Not Available"
								: userProfile.email}
						</a>
					</li>
					<li className="flex gap-2 items-center">
						<GrOrganization
							className={`${lightModeOn ? "" : "bg-white"} text-[24px]`}
						/>
						<a href="#">
							{userProfile.company === null
								? "Not Available"
								: userProfile.company}
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default HeroSection;
