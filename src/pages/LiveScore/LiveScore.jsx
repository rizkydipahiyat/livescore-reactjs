import React, { useEffect, useState } from "react";
import Fixture from "./Fixture/Fixture";
import "./LiveScore.css";
import { findClosestPreviousMatch, findClosestNextMatch } from "./matchFinders";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const LiveScore = () => {
	const [nextMatchData, setNextMatchData] = useState({});
	const [nextHomeTeam, setNextHomeTeam] = useState({});
	const [nextAwayTeam, setNextAwayTeam] = useState({});

	const [lastMatchData, setLastMatchData] = useState({});
	const [lastHomeTeam, setLastHomeTeam] = useState({});
	const [lastAwayTeam, setLastAwayTeam] = useState({});

	const [shownFixture, setShownFixture] = useState("next");

	const showNextMatch = () => {
		setShownFixture("next");
		findClosestNextMatch({
			setNextHomeTeam,
			setNextAwayTeam,
			setNextMatchData,
		});
	};
	const showLastMatch = () => {
		setShownFixture("last");
		findClosestPreviousMatch({
			setLastHomeTeam,
			setLastAwayTeam,
			setLastMatchData,
		});
	};

	useEffect(() => {
		console.log("Match Data:", nextMatchData);
	}, [nextMatchData]);

	useEffect(() => {
		showLastMatch();
	}, []);

	return (
		<section className="live-score">
			<MdNavigateBefore
				className={"round " + (shownFixture === "last" ? "hide-match" : "")}
				onClick={showLastMatch}
			/>
			<MdNavigateNext
				className={"round " + (shownFixture === "next" ? "hide-match" : "")}
				onClick={showNextMatch}
			/>
			<div className="live-container">
				{shownFixture === "next" ? (
					<Fixture
						matchData={nextMatchData}
						homeTeam={nextHomeTeam}
						awayTeam={nextAwayTeam}
					/>
				) : (
					<Fixture
						matchData={lastMatchData}
						homeTeam={lastHomeTeam}
						awayTeam={lastAwayTeam}
					/>
				)}
			</div>
		</section>
	);
};

export default LiveScore;
