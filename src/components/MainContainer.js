import AccordionSection from "./AccordionSection";
import CardSection from "./CardSection";
import LayoutContainer from "./LayoutContainer";
import NotFoundPage from "./NotFoundPage";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { plenarySpeakers, workshopSpeakers } from "../data/speakers.js";

const MainContainer = () => {
  const homeItems = [
    { title: "Program Schedule", link: "/schedule" },
    { title: "Workshops", link: "/workshops" },
    { title: "Speakers", link: "/speakers" },
    { title: "Impact Center Floor Map", link: "/floor-map.pdf" },
    { title: "Venue Walking Directions", link: "/walking-directions.pdf" },
    { title: "Night Time Fellowship", link: "/fellowship-night.png" },
    {
      title: "Spotify Playlist",
      link: "https://open.spotify.com/playlist/7nlYXCTiicyRnnuGSH7zh7?si=ODnIjmzCRgCi81YbHMUa3Q",
    },
  ];
  const scheduleItems = [
    { title: "Day 1 - Tue, July 25", link: "/schedule/day-1.jpg" },
    { title: "Day 2 - Wed, July 26", link: "/schedule/day-2.jpg" },
    { title: "Day 3 - Thu, July 27", link: "/schedule/day-3.jpg" },
    { title: "Day 4 - Fri, July 28", link: "/schedule/day-4.jpg" },
    { title: "Day 5 - Sat, July 29", link: "/schedule/day-5.jpg" },
  ];
  const workshopItems = [
    {
      title: "Wed, July 26",
      subtitle: "1:30 pm - 2:45 pm",
      link: "/workshop/workshop-1.jpeg",
    },
    {
      title: "Wed, July 26",
      subtitle: "3:15 pm - 4:30 pm",
      link: "/workshop/workshop-2.jpeg",
    },
    {
      title: "Fri, July 28",
      subtitle: "1:30 pm - 2:45 pm",
      link: "/workshop/workshop-3.jpeg",
    },
    {
      title: "Fri, July 28",
      subtitle: "3:15 pm - 4:30 pm",
      link: "/workshop/workshop-4.jpeg",
    },
  ];
  const speakersItems = [
    { title: "Plenary Speakers", link: "/speakers/plenary" },
    { title: "Workshop Speakers", link: "/speakers/workshop" },
  ];

  return (
    <Routes>
      <Route
        path="/"
        element={
          <LayoutContainer title="Arise Asia Info">
            <CardSection items={homeItems} />
          </LayoutContainer>
        }
      />
      <Route
        path="/schedule"
        element={
          <LayoutContainer title="Program Schedule">
            <CardSection items={scheduleItems} />
          </LayoutContainer>
        }
      />
      <Route
        path="/workshops"
        element={
          <LayoutContainer title="Workshops">
            <CardSection items={workshopItems} />
          </LayoutContainer>
        }
      />
      <Route
        path="/speakers"
        element={
          <LayoutContainer title="Speakers">
            <CardSection items={speakersItems} />
          </LayoutContainer>
        }
      />
      <Route
        path="/speakers/plenary"
        element={
          <LayoutContainer title="Plenary Speakers">
            <AccordionSection items={plenarySpeakers} />
          </LayoutContainer>
        }
      />
      <Route
        path="/speakers/workshop"
        element={
          <LayoutContainer title="Workshop Speakers">
            <AccordionSection items={workshopSpeakers} />
          </LayoutContainer>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainContainer;
