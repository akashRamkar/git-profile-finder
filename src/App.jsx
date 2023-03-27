import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import HeroSection from "./components/HeroSection";
import { useEffect, useState } from "react";
const GitApi = "https://api.github.com/users/";

function App() {
	// const [userName, setUserName] = useState("akashRamkar");
	const [lightModeOn, setLightModeOn] = useState(true);
	const [userProfile, setUserProfile] = useState({
		profileName: "",
		joinDate: "",
		login: "",
		profileUrl: "",
		description: "",
		repoCount: "",
		followers: "",
		following: "",
		location: "",
	});
	async function fetchUserData(userName) {
		console.log("received username is -> :" + userName);
		try {
			const data = await fetch(`${GitApi}${userName}`);
			const response = await data.json();

			const user_login = response.login;
			const user_profileUrl = response.avatar_url;
			const user_profileName = response.name;
			const user_description = response.bio;

			const user_followers = response.followers;
			const user_following = response.following;
			const user_repoCount = response.public_repos;
			const twitter_username = response.twitter_username;
			const user_location = response.location;
			const join_date = response.created_at;
			const user_email = response.email;
			const user_company = response.company;
			const user_last_update = response.updated_at;
			setUserProfile((prev) => {
				return {
					["login"]: user_login,
					["profileName"]: user_profileName,
					["description"]: user_description,
					["repoCount"]: user_repoCount,
					["location"]: user_location,
					["following"]: user_following,
					["followers"]: user_followers,
					["profileUrl"]: user_profileUrl,
					["join_date"]: join_date,
					["repos"]: user_repoCount,
					["twitter_username"]: twitter_username,
					["email"]: user_email,
					["company"]: user_company,
					["last_update"]: user_last_update,
				};
			});
		} catch (error) {
			console.error(error);
		}
	}
	useEffect(() => {
		fetchUserData("akashRamkar");
	}, []);
	return (
		<div className="flex flex-col items-center justify-center">
			<Card lightModeOn={lightModeOn}>
				<Header lightModeOn={lightModeOn} setLightModeOn={setLightModeOn} />
			</Card>
			<Card lightModeOn={lightModeOn}>
				<SearchBar
					setUserProfile={setUserProfile}
					fetchUserData={fetchUserData}
				/>
			</Card>

			<Card lightModeOn={lightModeOn}>
				{userProfile === null ? (
					<p>Loading!!</p>
				) : (
					<HeroSection userProfile={userProfile} lightModeOn={lightModeOn} />
				)}
			</Card>
		</div>
	);
}

export default App;
