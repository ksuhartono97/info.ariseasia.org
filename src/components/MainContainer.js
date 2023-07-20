import React from "react";
import { chakra } from "@chakra-ui/react";
import NotFoundPage from "./NotFoundPage";
import { Route, Routes } from "react-router-dom";
import OverviewContainer from "./home/OverviewContainer";

const MainContainer = () => {
  const homeItems = [
    { title: "Program Schedule", link: "/schedule" },
    { title: "Workshop", link: "/workshops" },
    { title: "Venue Map", link: "/map" },
    { title: "Other Info", link: "/other" },
  ];
  const scheduleItems = [
    { title: "Day 1 - Tue, July 25", link: "#" },
    { title: "Day 2 - Wed, July 26", link: "#" },
    { title: "Day 3 - Thu, July 27", link: "#" },
    { title: "Day 4 - Fri, July 28", link: "#" },
    { title: "Day 5 - Sat, July 29", link: "#" },
  ];
  const workshopItems = [
    { title: "Session 1", link: "#" },
    { title: "Session 2", link: "#" },
    { title: "Session 3", link: "#" },
    { title: "Session 4", link: "#" },
  ];
  const mapItems = [
    { title: "Map Link 1", link: "#" },
    { title: "Map Link 2", link: "#" },
    { title: "Map Link 3", link: "#" },
    { title: "Map Link 4", link: "#" },
    { title: "Map Link 5", link: "#" },
  ];
  const otherItems = [
    { title: "Link 1", link: "#" },
    { title: "Link 2", link: "#" },
    { title: "Link 3", link: "#" },
    { title: "Link 4", link: "#" },
    { title: "Link 5", link: "#" },
  ];

  return (
    <chakra.main maxH="100vh" flexGrow={1} overflowY="auto" id="main-container">
      <Routes>
        <Route
          path="/"
          element={
            <OverviewContainer title="Arise Asia Info" items={homeItems} />
          }
        />
        <Route
          path="/schedule"
          element={
            <OverviewContainer title="Program Schedule" items={scheduleItems} />
          }
        />
        <Route
          path="/workshops"
          element={
            <OverviewContainer title="Workshops" items={workshopItems} />
          }
        />
        <Route
          path="/map"
          element={<OverviewContainer title="Venue Map" items={mapItems} />}
        />
        <Route
          path="/other"
          element={<OverviewContainer title="Other Info" items={otherItems} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </chakra.main>
  );
};

export default MainContainer;
