import React from "react";
import { useLocation } from "react-router-dom";
import TheWorkBgUrl from "../img/TheWorkRepeating.jpg";
import TheTeamBgUrl from "../img/TheTeamRepeating.jpg";
import TheColBgUrl from "../img/TheCollectiveRepeating.jpg";

import { Container } from "react-bootstrap";

const BackgroundSwitcher = () => {
  const path = useLocation().pathname;
  const location = path.split("/")[1];

  let bgUrl = TheWorkBgUrl;
  if (location === "the-work") bgUrl = TheWorkBgUrl;
  else if (location === "the-team") bgUrl = TheTeamBgUrl;
  else if (location === "the-collective") bgUrl = TheColBgUrl;

  const switchBackground = () => {
    if (location === "the-work") {
      bgUrl = "../img/theteam_3k.png";
    } else if (location === "the-team") {
      bgUrl = "../img/bg_the_team.png";
    } else if (location === "the-collective") {
      bgUrl = "../img/theteam_3k.png";
    }
  };

  return (
    <>
      <Container
        fluid
        style={{
          backgroundImage: `url(${bgUrl})`,
        }}
        onClick={switchBackground}
        className="bg mobile-no-pad mobile-no-mar"
      ></Container>
    </>
  );
};

export default BackgroundSwitcher;
