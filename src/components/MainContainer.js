import AccordionSection from "./AccordionSection";
import CardSection from "./CardSection";
import LayoutContainer from "./LayoutContainer";
import NotFoundPage from "./NotFoundPage";
import React from "react";
import TableSection from "./TableSection";
import { Route, Routes } from "react-router-dom";
import {
  plenarySpeakers,
  workshopSpeakers,
  faqItems,
} from "../data/speakers.js";

const MainContainer = () => {
  const homeItems = [
    { title: "Program Schedule", link: "/schedule" },
    { title: "Workshops", link: "/workshops" },
    { title: "Speaker Bios", link: "/speakers" },
    {
      title: "Workshop Registration Instructions",
      link: "/registration-instructions.jpeg",
    },
    { title: "Session Translation Zoom Links", link: "/translation" },
    { title: "Impact Center Floor Map", link: "/floor-map.pdf" },
    { title: "Venue Walking Directions", link: "/walking-directions.pdf" },
    { title: "Breakout Room Assignments", link: "/breakouts" },
    { title: "Night Time Fellowship Info", link: "/fellowship-night.png" },
    {
      title: "GO NOW Applications",
      link: "https://form.jotform.com/231630446225449",
    },
    {
      title: "Spotify Playlist",
      link: "https://open.spotify.com/playlist/7nlYXCTiicyRnnuGSH7zh7?si=ODnIjmzCRgCi81YbHMUa3Q",
    },
    // { title: "FAQ", link: "/faq" },
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
  const translationItems = [
    {
      title: "Tue, July 25 Night",
      link: "https://us02web.zoom.us/j/86832514102?pwd=QnFkd1FVNkhMc1daR0RFTVd0K2Jmdz09",
    },
    {
      title: "Wed, July 26 Morning",
      link: "https://us02web.zoom.us/j/81223109434?pwd=RUQ3bWROU0RLSEdwYVFxNWpxQ0g2UT09",
    },
    {
      title: "Wed, July 26 Night",
      link: "https://us02web.zoom.us/j/85129782039?pwd=Ujg5LytGc29CNUtQOWhYSGs3TUxxUT09",
    },
    {
      title: "Thu, July 27 Morning",
      link: "https://us02web.zoom.us/j/82654998409?pwd=cFRmWkFVY0hkeEVpKzhLRGxFV01kQT09",
    },
    {
      title: "Thu, July 27 Night",
      link: "https://us02web.zoom.us/j/88935156863?pwd=NThjam56SmVzNVVGdm1xV3RiMk1sUT09",
    },
    {
      title: "Fri, July 28 Morning",
      link: "https://us02web.zoom.us/j/89774891907?pwd=TmIwZE83ZGpBSkYzNUtmcmpvNSt1Zz09",
    },
    {
      title: "Fri, July 28 Night",
      link: "https://us02web.zoom.us/j/82624185601?pwd=bkRINGJpdEJxWmNOT0JkZTVvaUNrUT09",
    },
    {
      title: "Sat, July 29 Morning",
      link: "https://us02web.zoom.us/j/81045025169?pwd=M0pEeWpuaG10Wjg5NTJOS0o0VmZiQT09",
    },
  ];
  const breakoutItems = {
    headers: ["Country/Region", "Room Number"],
    body: [
      ["India", "120"],
      ["Chinese World", "119"],
      ["Hong Kong", "103"],
      ["Thailand", "104"],
      ["Mongolia", "105"],
      ["English Speaking SEA", "106"],
      ["South Asia", "107"],
      ["Mainland SEA", "108"],
      ["Pakistan", "109"],
      ["Korea", "110"],
      ["Taiwan", "111"],
      ["Philippines", "	112"],
      ["Japan", "115"],
      ["Vietnam", "116"],
      ["Central Asia", "117"],
      ["MENA", "Novotel Meeting Room"],
      ["Indonesia", "118"],
      ["Free to Choose", "--"],
    ],
  };

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
          <LayoutContainer title="Speaker Bios">
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
      <Route
        path="/translation"
        element={
          <LayoutContainer title="Session Translation Zoom Links">
            <CardSection items={translationItems} />
          </LayoutContainer>
        }
      />
      <Route
        path="/breakouts"
        element={
          <LayoutContainer title="Breakout Room Assignments">
            <TableSection items={breakoutItems} />
          </LayoutContainer>
        }
      />
      <Route
        path="/faq"
        element={
          <LayoutContainer title="FAQ">
            <AccordionSection items={faqItems} />
          </LayoutContainer>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainContainer;
