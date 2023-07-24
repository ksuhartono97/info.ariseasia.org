import React from "react";
import { chakra } from "@chakra-ui/react";
import NotFoundPage from "./NotFoundPage";
import { Route, Routes } from "react-router-dom";
import AccordionSection from "./AccordionSection";
import CardSection from "./home/CardSection";
import OverviewContainer from "./home/OverviewContainer";

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
    { title: "Day 1 - Tue, July 25", link: "/schedule/day-1.pdf" },
    { title: "Day 2 - Wed, July 26", link: "/schedule/day-2.pdf" },
    { title: "Day 3 - Thu, July 27", link: "/schedule/day-3.pdf" },
    { title: "Day 4 - Fri, July 28", link: "/schedule/day-4.pdf" },
    { title: "Day 5 - Sat, July 29", link: "/schedule/day-5.pdf" },
  ];
  const workshopItems = [
    {
      title: "Wed, July 26",
      subtitle: "1:30 pm - 2:45 pm",
      link: "/workshop/workshop-1.pdf",
    },
    {
      title: "Wed, July 26",
      subtitle: "3:15 pm - 4:30 pm",
      link: "/workshop/workshop-2.pdf",
    },
    {
      title: "Fri, July 28",
      subtitle: "1:30 pm - 2:45 pm",
      link: "/workshop/workshop-3.pdf",
    },
    {
      title: "Fri, July 28",
      subtitle: "3:15 pm - 4:30 pm",
      link: "/workshop/workshop-4.pdf",
    },
  ];
  const speakersItems = [
    { title: "Plenary Speakers", link: "/speakers/plenary" },
    { title: "Workshop Speakers", link: "/speakers/workshop" },
  ];
  const plenarySpeakers = [
    {
      title: "Wayne Chen",
      subtitle: "Radius Asia",
      role: "Director",
      description:
        "Say hello to the awesome Wayne Chen! With a Master of Divinity from Gordon-Conwell Theological Seminary and a heart for missions, this former pastor from Northern California packed up with his family and headed to Papua New Guinea in 2009 to live with an unreached tribal people group. For eight years, they were involved in language and culture acquisition, bible translation, and church planting - And now? Wayne is the director of Radius Asia, a training program for cross-cultural missionaries that emphasizes language and cultural proficiency, foundational Bible teaching, and embracing suffering and hardship as tools for completing the Great Commission. With his wife Gail and two daughters by his side, Wayne is making a huge impact in the world of missions!",
    },
    {
      title: "Asiri Fernando",
      subtitle: "Youth For Christ, Sri Lanka",
      role: "Senior Coordinator",
      description:
        "Asiri Fernando is serving with 'Youth for Christ Sri Lanka, leading the work in the mountain regions. He is actively involved in teaching and giving pastoral care to staff and volunteers engaged in grassroots evangelism. Asiri has a preaching/teaching ministry in his local church (and outside) and is passionate about serving the urban poor. Asiri is also writing his first book on Paul's letter to the Philippians and he is an author at ‘Our Daily Bread'. Asiri is married to Cheryl and they have two kids, Yasas (6) and Yeheli (3). Asiri is also a singer-songwriter and loves reading, watching movies and playing cricket.",
    },
    {
      title: "Wayne Chen",
      subtitle: "Radius Asia",
      role: "Director",
      description:
        "Say hello to the awesome Wayne Chen! With a Master of Divinity from Gordon-Conwell Theological Seminary and a heart for missions, this former pastor from Northern California packed up with his family and headed to Papua New Guinea in 2009 to live with an unreached tribal people group. For eight years, they were involved in language and culture acquisition, bible translation, and church planting - And now? Wayne is the director of Radius Asia, a training program for cross-cultural missionaries that emphasizes language and cultural proficiency, foundational Bible teaching, and embracing suffering and hardship as tools for completing the Great Commission. With his wife Gail and two daughters by his side, Wayne is making a huge impact in the world of missions!",
    },
    {
      title: "Asiri Fernando",
      subtitle: "Youth For Christ, Sri Lanka",
      role: "Senior Coordinator",
      description:
        "Asiri Fernando is serving with 'Youth for Christ Sri Lanka, leading the work in the mountain regions. He is actively involved in teaching and giving pastoral care to staff and volunteers engaged in grassroots evangelism. Asiri has a preaching/teaching ministry in his local church (and outside) and is passionate about serving the urban poor. Asiri is also writing his first book on Paul's letter to the Philippians and he is an author at ‘Our Daily Bread'. Asiri is married to Cheryl and they have two kids, Yasas (6) and Yeheli (3). Asiri is also a singer-songwriter and loves reading, watching movies and playing cricket.",
    },
  ];
  const workshopSpeakers = [
    {
      title:
        "Church Planting in Multicultural teams - the keys to doing it really well",
      subtitle: "Tim Stone",
      description:
        "This is the real- life story of how God has rebuilt a church shattered by the torture - murder of three of its members, until it could plant daughter churches in some of the least - reached regions of the Muslim world.Come and learn from our mistakes, and also from what God has taught us to do well.This workshop focuses not only on what the most important principles are, but also on clear examples of HOW our multicultural team was able to apply these principles in the midst of the tragedy.Most of us already know what we should be doing, but we were learning what actually worked when bad things happened.",
    },
    {
      title: "People Movements and Missions",
      subtitle: "Christie Samuel",
      description:
        "Voicing out for the voiceless in people movements (joining existing or forming new ones), and how to bring freedom to the communities as a Christian. We can refer to Christian Mission history and relate it with contemporary struggles in Asia and how the missionaries made it an opportunity for sharing the Gospel.",
    },
    {
      title:
        "Church Planting in Multicultural teams - the keys to doing it really well",
      subtitle: "Tim Stone",
      description:
        "This is the real- life story of how God has rebuilt a church shattered by the torture - murder of three of its members, until it could plant daughter churches in some of the least - reached regions of the Muslim world.Come and learn from our mistakes, and also from what God has taught us to do well.This workshop focuses not only on what the most important principles are, but also on clear examples of HOW our multicultural team was able to apply these principles in the midst of the tragedy.Most of us already know what we should be doing, but we were learning what actually worked when bad things happened.",
    },
    {
      title: "People Movements and Missions",
      subtitle: "Christie Samuel",
      description:
        "Voicing out for the voiceless in people movements (joining existing or forming new ones), and how to bring freedom to the communities as a Christian. We can refer to Christian Mission history and relate it with contemporary struggles in Asia and how the missionaries made it an opportunity for sharing the Gospel.",
    },
  ];

  return (
    <chakra.main maxH="100vh" flexGrow={1} overflowY="auto" id="main-container">
      <Routes>
        <Route
          path="/"
          element={
            <OverviewContainer title="Arise Asia Info">
              <CardSection items={homeItems} />
            </OverviewContainer>
          }
        />
        <Route
          path="/schedule"
          element={
            <OverviewContainer title="Program Schedule">
              <CardSection items={scheduleItems} />
            </OverviewContainer>
          }
        />
        <Route
          path="/workshops"
          element={
            <OverviewContainer title="Workshops">
              <CardSection items={workshopItems} />
            </OverviewContainer>
          }
        />
        <Route
          path="/speakers"
          element={
            <OverviewContainer title="Speakers">
              <CardSection items={speakersItems} />
            </OverviewContainer>
          }
        />
        <Route
          path="/speakers/plenary"
          element={
            <OverviewContainer title="Plenary Speakers">
              <AccordionSection items={plenarySpeakers} />
            </OverviewContainer>
          }
        />
        <Route
          path="/speakers/workshop"
          element={
            <OverviewContainer title="Workshop Speakers">
              <AccordionSection items={workshopSpeakers} />
            </OverviewContainer>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </chakra.main>
  );
};

export default MainContainer;
