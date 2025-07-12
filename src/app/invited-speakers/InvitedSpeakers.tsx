"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";

const speakers = [
  {
    name: "Mr. Greg Brock",
    position: "Chief, Services for Aviation Section",
    agency: "World Meteorological Organization (WMO)",
    presentation_title:
      "Latest and future developments in aeronautical meteorological service provision",
    presentation_summary:
      "The World Meteorological Organization (WMO), as a specialized agency of the United Nations, is an authoritative voice on weather, climate and water issues. This presentation will showcase WMO’s work in aeronautical meteorology, including areas of science focus and the involvement of WMO in the evolution of aeronautical meteorological observations and forecast services in support of the system-wide information management environment of global air traffic management. The presentation will explore enablers to aeronautical meteorological service delivery, such as quality management systems, personnel competency frameworks and cost recovery arrangement. In addition, the presentation will outline WMO’s collaboration with international partners, such as the International Civil Aviation Organization (ICAO), and will draw attention to several global plans and other initiatives of relevance to the aeronautical meteorological community. The presentation will conclude with an overview of where WMO resources in support of aeronautical meteorological services can be obtained.",
    presentation_duration: "Up to 30 minutes",
    speaker_bio:
      "Greg Brock is Chief of the Services for Aviation Section of the World Meteorological Organization (WMO), based at its headquarters in Geneva. His role includes the coordination of WMO’s global activities in aeronautical meteorology and the maintenance of its technical regulations and guidance. He is supported by a small team comprising two staff. Greg possesses a Batchelor’s degree in Mathematics and Meteorology. Before joining WMO in 2016, he worked for the UK Met Office (1997-2009), including as an aeronautical meteorological forecaster, and the International Civil Aviation Organization (ICAO) (2009-2016), including as Chief of the Meteorology Section.",
    speaker_image: "/assets/images/speaker-1.jpg",
  },
  {
    name: "Prof. Dr. Mikdat Kadıoğlu",
    position: "Professor, Meteorology and Disaster Management",
    agency: "Istanbul Technical University (ITU)",
    presentation_title:
      "Urban Climate, Synoptic Meteorology, Disaster Management, Aviation Meteorology and Extreme Events",
    presentation_summary: "Will be announced later.",
    presentation_duration: "Up to 30 minutes",
    speaker_bio:
      "Mikdat Kadıoğlu is Professor of Disaster Management Centre and Meteorological Engineering Department at Istanbul Technical University – Turkey, where he has been since 1991. He also currently serves as advisor to President of Turkish Red Crescent Society and Governorship of Istanbul. Also actively involving in developing Disaster Mitigation, Response and/ or Business Continuity Plans and training programs for municipalities, schools, small business as well as large industrial facilities, etc. His research interests center on disaster management, hydro-meteorological disasters and climate risk management. He received a B.S. from Istanbul Technical University in 1984, and M.S. form University of Missouri at Columbia, USA. He received his Ph.D. in Atmospheric Sciences form University of Missouri in 1987. After 1999 Marmara Earthquakes in Turkey, he earned numerous certificates from foundations such as USA FEMA, Japan JICA and UK Bormounth University about Disaster and Emergency Management, Planning, Flood Plain Development., etc.",
    speaker_image: "/assets/images/speaker-2.jpg",
  },
  {
    name: "Prof. Dr. Zafer Aslan",
    position: "Professor, Atmospheric Sciences",
    agency: "Istanbul Aydın University & OSTIV Meteorological Panel",
    presentation_title:
      "Synoptic Meteorology, Boundary Layer Physics, Aviation Meteorology",
    presentation_summary: "Will be announced later",
    presentation_duration: "Up to 30 minutes",
    speaker_bio:
      "Prof. Dr. Zafer Aslan received his BSc, MSc, and PhD in Meteorological Engineering from ITU. He worked at the UK Met Office and served at the International Civil Aviation Organization (ICAO). She is currently a professor at Istanbul Aydın University and serves as the Chair of the OSTIV Meteorological Panel. Her research interests include wind energy, artificial intelligence in meteorology, wavelet analysis, and climate applications in aviation meteorology.",
    speaker_image: "/assets/images/speaker-3.png",
  },
  {
    name: "Prof. Dr. Rene Heise",
    position: "Staff Officer, Emerging Security Challenges Division",
    agency: "NATO Headquarters",
    presentation_title: "To be announced",
    presentation_summary: "To be announced.",
    presentation_duration: "Up to 30 minutes",
    speaker_bio:
      "Rene Heise works in NATO’s Emerging Security Challenges Division. Previously he served as Head of Geo-Sections at the German Air Force Air Operations Command and Acting Chief Meteorological & Oceanographic Officer at NATO Allied Command Operations. As a German Air Force Staff Officer, he developed forecasting tools on space‑weather effects and supported geo‑missions and humanitarian operations (SFOR, ISAF, OEF, EUFOR Congo). He holds a degree in Meteorology & Geophysics from Humboldt University Berlin. He led airborne GEO-expeditions measuring atmospheric turbulence over the Andes and Himalaya, and as a glider pilot monitors climate impacts such as glacier changes and jet-stream shifts. He is also Vice-President & Board Member of Europe Air Sports and the German Air Sport Federation. Member of GMACCC since October 2019.",
    speaker_image: "/assets/images/speaker-4.jpg",
  },
];

const InvitedSpeakers = () => {
  const [openStates, setOpenStates] = useState(speakers.map(() => false));

  const toggleDetails = (index: number) => {
    const updatedStates = [...openStates];
    updatedStates[index] = !updatedStates[index];
    setOpenStates(updatedStates);
  };

  return (
    <section className="mt-20 py-16 px-4 flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-4xl font-serif mb-12 text-gray-900">
        Invited Speakers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
          >
            <div className="w-40 h-40 relative mb-4">
              <Image
                src={speaker.speaker_image}
                alt={speaker.name}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              {speaker.name}
            </h3>
            <p className="text-sm text-gray-600">{speaker.position}</p>
            <p className="text-sm text-gray-600 italic mb-2">
              {speaker.agency}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Duration: {speaker.presentation_duration}
            </p>
            <h4 className="text-lg font-medium text-gray-800 mt-4">
              Presentation Title: {speaker.presentation_title}
            </h4>

            {openStates[index] && (
              <>
                <p className="text-sm text-gray-700 mt-2">
                  Presentation Summary: {speaker.presentation_summary}
                </p>

                <div className="mt-4 text-left">
                  <h5 className="text-md font-semibold text-gray-800 mb-1 text-center">
                    About the speaker
                  </h5>
                  <p className="text-sm text-gray-700">{speaker.speaker_bio}</p>
                </div>
              </>
            )}

            <button
              onClick={() => toggleDetails(index)}
              className="mt-4 px-4 py-1 text-sm text-gray-400 cursor-pointer underline"
            >
              {openStates[index] ? "Hide Details" : "See Details"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InvitedSpeakers;
