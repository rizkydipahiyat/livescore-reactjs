import React from "react";
import "./Fixture.css";

const Fixture = ({ matchData, homeTeam, awayTeam }) => {
	return (
		<div className="live-container">
			{matchData && (
				<div className="live-container">
					<div className="match-container">
						<div className="league">
							<img
								src={matchData.logo}
								alt="logo-team"
								className="league-logo"
							/>
							<h5 className="league-name">{matchData.league}</h5>
						</div>
						<div className="teams-container">
							<div className="team-box">
								<img
									src={homeTeam.logo}
									alt={homeTeam.name}
									className="homeTeam-logo"
								/>
								<h5 className="team-name">{homeTeam.name}</h5>
							</div>
							<p
								className={matchData.status !== "notstarted" ? "result" : null}
							>
								{matchData.status === "notstarted" ? "VS" : matchData.result}
							</p>
							<div className="team-box">
								<img
									src={awayTeam.logo}
									alt={awayTeam.name}
									className="awayTeam-logo"
								/>
								<h5 className="team-name">{awayTeam.name}</h5>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Fixture;
