import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import reducer from "./reducers";
import "bootstrap/dist/css/bootstrap.css";

import App from "./routes/App";

const initialState = {
  playing: {},
  myList: [],
  trends: [
    {
      id: 14500,
      url: "https://yts.lt/movie/division-19-2017",
      imdb_code: "tt2492344",
      title: "Division 19",
      title_english: "Division 19",
      title_long: "Division 19 (2017)",
      slug: "division-19-2017",
      year: 2017,
      rating: 6.1,
      runtime: 93,
      genres: ["Action", "Sci-Fi", "Thriller"],
      summary:
        "2039. Jails have been turned into online portals where the public gets to choose what prisoners eat, wear, watch and who they fight. So successful is Panopticon TV, it is about to be rolled out to a whole town, providing subscribers even more choice.",
      description_full:
        "2039. Jails have been turned into online portals where the public gets to choose what prisoners eat, wear, watch and who they fight. So successful is Panopticon TV, it is about to be rolled out to a whole town, providing subscribers even more choice.",
      synopsis:
        "2039. Jails have been turned into online portals where the public gets to choose what prisoners eat, wear, watch and who they fight. So successful is Panopticon TV, it is about to be rolled out to a whole town, providing subscribers even more choice.",
      yt_trailer_code: "hSAa7TbgZfI",
      language: "English",
      mpa_rating: "",
      background_image:
        "https://yts.lt/assets/images/movies/division_19_2017/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/division_19_2017/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/division_19_2017/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/division_19_2017/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/division_19_2017/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/E83B44ACA96636F814368CEC2FE8A155B1EA48E2",
          hash: "E83B44ACA96636F814368CEC2FE8A155B1EA48E2",
          quality: "720p",
          type: "web",
          seeds: 0,
          peers: 0,
          size: "830.61 MB",
          size_bytes: 870957711,
          date_uploaded: "2019-12-06 12:05:31",
          date_uploaded_unix: 1575630331
        },
        {
          url:
            "https://yts.lt/torrent/download/634BD6D433607ECAE96EA7C9D85850CFDC9E8D43",
          hash: "634BD6D433607ECAE96EA7C9D85850CFDC9E8D43",
          quality: "1080p",
          type: "web",
          seeds: 0,
          peers: 0,
          size: "1.47 GB",
          size_bytes: 1578400481,
          date_uploaded: "2019-12-06 13:27:37",
          date_uploaded_unix: 1575635257
        }
      ],
      date_uploaded: "2019-12-06 12:05:31",
      date_uploaded_unix: 1575630331
    },
    {
      id: 14458,
      url: "https://yts.lt/movie/the-reliant-2019",
      imdb_code: "tt6105774",
      title: "The Reliant",
      title_english: "The Reliant",
      title_long: "The Reliant (2019)",
      slug: "the-reliant-2019",
      year: 2019,
      rating: 4.5,
      runtime: 140,
      genres: ["Action"],
      summary:
        "Economic collapse causes widespread rioting and social unrest, leaving a lovesick 19-year-old girl struggling to care for her siblings in a stretch of woods bordered by lawless anarchy, wondering why a good God would let this happen.",
      description_full:
        "Economic collapse causes widespread rioting and social unrest, leaving a lovesick 19-year-old girl struggling to care for her siblings in a stretch of woods bordered by lawless anarchy, wondering why a good God would let this happen.",
      synopsis:
        "Economic collapse causes widespread rioting and social unrest, leaving a lovesick 19-year-old girl struggling to care for her siblings in a stretch of woods bordered by lawless anarchy, wondering why a good God would let this happen.",
      yt_trailer_code: "GyIK5tctorU",
      language: "English",
      mpa_rating: "PG-13",
      background_image:
        "https://yts.lt/assets/images/movies/the_reliant_2019/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/the_reliant_2019/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/the_reliant_2019/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/the_reliant_2019/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/the_reliant_2019/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/39A3EC0D5A1C0DF1BA6F0A42A0D79FF1EAC71015",
          hash: "39A3EC0D5A1C0DF1BA6F0A42A0D79FF1EAC71015",
          quality: "720p",
          type: "web",
          seeds: 592,
          peers: 238,
          size: "1.01 GB",
          size_bytes: 1084479242,
          date_uploaded: "2019-12-03 14:31:30",
          date_uploaded_unix: 1575379890
        },
        {
          url:
            "https://yts.lt/torrent/download/8CAD64A1C69257B1C36ABC2EFB708BD776CD2981",
          hash: "8CAD64A1C69257B1C36ABC2EFB708BD776CD2981",
          quality: "1080p",
          type: "web",
          seeds: 338,
          peers: 140,
          size: "1.82 GB",
          size_bytes: 1954210120,
          date_uploaded: "2019-12-03 16:11:07",
          date_uploaded_unix: 1575385867
        }
      ],
      date_uploaded: "2019-12-03 14:31:30",
      date_uploaded_unix: 1575379890
    },
    {
      id: 14456,
      url: "https://yts.lt/movie/ring-ring-2019",
      imdb_code: "tt6473542",
      title: "Ring Ring",
      title_english: "Ring Ring",
      title_long: "Ring Ring (2019)",
      slug: "ring-ring-2019",
      year: 2019,
      rating: 6.7,
      runtime: 72,
      genres: ["Action", "Thriller"],
      summary:
        "After a group of telemarketers get fired by their penny-pinching boss, they take revenge by stealing the company's list of clients to start up their own firm. In the heat of celebration and a few drinks in, they lose the phone which holds the only copy of their future customers. While tracking the lost device on Halloween night, co-workers Amber and Will find themselves trapped in a demented drug addict's house of horrors.",
      description_full:
        "After a group of telemarketers get fired by their penny-pinching boss, they take revenge by stealing the company's list of clients to start up their own firm. In the heat of celebration and a few drinks in, they lose the phone which holds the only copy of their future customers. While tracking the lost device on Halloween night, co-workers Amber and Will find themselves trapped in a demented drug addict's house of horrors.",
      synopsis:
        "After a group of telemarketers get fired by their penny-pinching boss, they take revenge by stealing the company's list of clients to start up their own firm. In the heat of celebration and a few drinks in, they lose the phone which holds the only copy of their future customers. While tracking the lost device on Halloween night, co-workers Amber and Will find themselves trapped in a demented drug addict's house of horrors.",
      yt_trailer_code: "",
      language: "English",
      mpa_rating: "",
      background_image:
        "https://yts.lt/assets/images/movies/ring_ring_2019/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/ring_ring_2019/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/ring_ring_2019/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/ring_ring_2019/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/ring_ring_2019/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/EE69411A406FF0FF1621067505A92B6447F49032",
          hash: "EE69411A406FF0FF1621067505A92B6447F49032",
          quality: "720p",
          type: "web",
          seeds: 712,
          peers: 286,
          size: "646.75 MB",
          size_bytes: 678166528,
          date_uploaded: "2019-12-03 13:48:15",
          date_uploaded_unix: 1575377295
        },
        {
          url:
            "https://yts.lt/torrent/download/E631B62BA89436278773570E79FD2C0F484C9941",
          hash: "E631B62BA89436278773570E79FD2C0F484C9941",
          quality: "1080p",
          type: "web",
          seeds: 555,
          peers: 164,
          size: "1.14 GB",
          size_bytes: 1224065679,
          date_uploaded: "2019-12-03 15:09:51",
          date_uploaded_unix: 1575382191
        }
      ],
      date_uploaded: "2019-12-03 13:48:15",
      date_uploaded_unix: 1575377295
    },
    {
      id: 14442,
      url: "https://yts.lt/movie/lion-killer-2019",
      imdb_code: "tt7288378",
      title: "Lion Killer",
      title_english: "Lion Killer",
      title_long: "Lion Killer (2019)",
      slug: "lion-killer-2019",
      year: 2019,
      rating: 3.9,
      runtime: 82,
      genres: ["Action", "Drama"],
      summary:
        "A struggling Brazilian Jiu-Jitsu instructor and a domestic abuse survivor, grapple with their past while trying to learn how to love once again.",
      description_full:
        "A struggling Brazilian Jiu-Jitsu instructor and a domestic abuse survivor, grapple with their past while trying to learn how to love once again.",
      synopsis:
        "A struggling Brazilian Jiu-Jitsu instructor and a domestic abuse survivor, grapple with their past while trying to learn how to love once again.",
      yt_trailer_code: "",
      language: "English",
      mpa_rating: "",
      background_image:
        "https://yts.lt/assets/images/movies/lion_killer_2019/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/lion_killer_2019/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/lion_killer_2019/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/lion_killer_2019/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/lion_killer_2019/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/CDB476645CAC2CCD1B2A3555CCB35EDB710B1F94",
          hash: "CDB476645CAC2CCD1B2A3555CCB35EDB710B1F94",
          quality: "720p",
          type: "web",
          seeds: 215,
          peers: 59,
          size: "730.88 MB",
          size_bytes: 766383227,
          date_uploaded: "2019-12-02 10:03:23",
          date_uploaded_unix: 1575277403
        },
        {
          url:
            "https://yts.lt/torrent/download/56E9D981AB893E46BD612F47468E85BE1AD2DDA0",
          hash: "56E9D981AB893E46BD612F47468E85BE1AD2DDA0",
          quality: "1080p",
          type: "web",
          seeds: 145,
          peers: 52,
          size: "1.29 GB",
          size_bytes: 1385126953,
          date_uploaded: "2019-12-02 11:32:59",
          date_uploaded_unix: 1575282779
        }
      ],
      date_uploaded: "2019-12-02 10:03:23",
      date_uploaded_unix: 1575277403
    },
    {
      id: 14422,
      url: "https://yts.lt/movie/rogue-warfare-2-the-hunt-2019",
      imdb_code: "tt7983712",
      title: "Rogue Warfare 2: The Hunt",
      title_english: "Rogue Warfare 2: The Hunt",
      title_long: "Rogue Warfare 2: The Hunt (2019)",
      slug: "rogue-warfare-2-the-hunt-2019",
      year: 2019,
      rating: 3.8,
      runtime: 0,
      genres: ["Action"],
      summary:
        "The next installment of the Rogue Warfare Trilogy. Daniel has been captured and it is up to the TEAM to find him before it is too late.",
      description_full:
        "The next installment of the Rogue Warfare Trilogy. Daniel has been captured and it is up to the TEAM to find him before it is too late.",
      synopsis:
        "The next installment of the Rogue Warfare Trilogy. Daniel has been captured and it is up to the TEAM to find him before it is too late.",
      yt_trailer_code: "7s61QDw4oSY",
      language: "English",
      mpa_rating: "R",
      background_image:
        "https://yts.lt/assets/images/movies/rogue_warfare_the_hunt_2019/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/rogue_warfare_the_hunt_2019/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/rogue_warfare_the_hunt_2019/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/rogue_warfare_the_hunt_2019/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/rogue_warfare_the_hunt_2019/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/1A0D5293845ADF868B7084094C2420AB81872CE7",
          hash: "1A0D5293845ADF868B7084094C2420AB81872CE7",
          quality: "720p",
          type: "bluray",
          seeds: 563,
          peers: 106,
          size: "947.1 MB",
          size_bytes: 993106330,
          date_uploaded: "2019-11-30 03:32:50",
          date_uploaded_unix: 1575081170
        },
        {
          url:
            "https://yts.lt/torrent/download/F13E77160C8A3FF5CB4739BB826AF9B4C06627F4",
          hash: "F13E77160C8A3FF5CB4739BB826AF9B4C06627F4",
          quality: "1080p",
          type: "bluray",
          seeds: 320,
          peers: 127,
          size: "1.65 GB",
          size_bytes: 1771674010,
          date_uploaded: "2019-11-30 05:25:34",
          date_uploaded_unix: 1575087934
        }
      ],
      date_uploaded: "2019-11-30 03:32:50",
      date_uploaded_unix: 1575081170
    },
    {
      id: 14421,
      url: "https://yts.lt/movie/rambo-last-blood-2019",
      imdb_code: "tt1206885",
      title: "Rambo: Last Blood",
      title_english: "Rambo: Last Blood",
      title_long: "Rambo: Last Blood (2019)",
      slug: "rambo-last-blood-2019",
      year: 2019,
      rating: 6.4,
      runtime: 89,
      genres: ["Action", "Adventure", "Thriller"],
      summary:
        "Almost four decades after they drew first blood, Sylvester Stallone is back as one of the greatest action heroes of all time, John Rambo. Now, Rambo must confront his past and unearth his ruthless combat skills to exact revenge in a final mission. A deadly journey of vengeance, RAMBO: LAST BLOOD marks the last chapter of the legendary series.",
      description_full:
        "Almost four decades after they drew first blood, Sylvester Stallone is back as one of the greatest action heroes of all time, John Rambo. Now, Rambo must confront his past and unearth his ruthless combat skills to exact revenge in a final mission. A deadly journey of vengeance, RAMBO: LAST BLOOD marks the last chapter of the legendary series.",
      synopsis:
        "Almost four decades after they drew first blood, Sylvester Stallone is back as one of the greatest action heroes of all time, John Rambo. Now, Rambo must confront his past and unearth his ruthless combat skills to exact revenge in a final mission. A deadly journey of vengeance, RAMBO: LAST BLOOD marks the last chapter of the legendary series.",
      yt_trailer_code: "4vWg5yJuWfs",
      language: "English",
      mpa_rating: "R",
      background_image:
        "https://yts.lt/assets/images/movies/rambo_last_blood_2019/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/rambo_last_blood_2019/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/rambo_last_blood_2019/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/rambo_last_blood_2019/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/rambo_last_blood_2019/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/E14966740CF1587CC3910280BC44984D5D9D4D71",
          hash: "E14966740CF1587CC3910280BC44984D5D9D4D71",
          quality: "720p",
          type: "bluray",
          seeds: 4693,
          peers: 1128,
          size: "909.41 MB",
          size_bytes: 953585500,
          date_uploaded: "2019-11-30 00:41:35",
          date_uploaded_unix: 1575070895
        },
        {
          url:
            "https://yts.lt/torrent/download/7857CD9BFD755381EA65EBD51B532CA38D13D670",
          hash: "7857CD9BFD755381EA65EBD51B532CA38D13D670",
          quality: "1080p",
          type: "bluray",
          seeds: 6806,
          peers: 1708,
          size: "1.59 GB",
          size_bytes: 1707249500,
          date_uploaded: "2019-11-30 02:33:06",
          date_uploaded_unix: 1575077586
        }
      ],
      date_uploaded: "2019-11-30 00:41:35",
      date_uploaded_unix: 1575070895
    },
    {
      id: 14412,
      url: "https://yts.lt/movie/the-protector-1985",
      imdb_code: "tt0089847",
      title: "The Protector",
      title_english: "The Protector",
      title_long: "The Protector (1985)",
      slug: "the-protector-1985",
      year: 1985,
      rating: 5.7,
      runtime: 91,
      genres: ["Action", "Crime", "Thriller"],
      summary:
        "Billy Wong is a New York City cop whose partner is gunned down during a robbery. Billy and his new partner, Danny Garoni, are working security at a fashion show when a wealthy man's daughter, Laura Shapiro, is kidnapped. The Federal authorities suspect that Laura's father is involved with Mr. Ko, a Hong Kong drug kingpin, so the NYC police commissioner sends the two cops to Hong Kong to investigate. Once in Hong Kong, the pair causes no end of trouble for both Mr. Ko and the local authorities.",
      description_full:
        "Billy Wong is a New York City cop whose partner is gunned down during a robbery. Billy and his new partner, Danny Garoni, are working security at a fashion show when a wealthy man's daughter, Laura Shapiro, is kidnapped. The Federal authorities suspect that Laura's father is involved with Mr. Ko, a Hong Kong drug kingpin, so the NYC police commissioner sends the two cops to Hong Kong to investigate. Once in Hong Kong, the pair causes no end of trouble for both Mr. Ko and the local authorities.",
      synopsis:
        "Billy Wong is a New York City cop whose partner is gunned down during a robbery. Billy and his new partner, Danny Garoni, are working security at a fashion show when a wealthy man's daughter, Laura Shapiro, is kidnapped. The Federal authorities suspect that Laura's father is involved with Mr. Ko, a Hong Kong drug kingpin, so the NYC police commissioner sends the two cops to Hong Kong to investigate. Once in Hong Kong, the pair causes no end of trouble for both Mr. Ko and the local authorities.",
      yt_trailer_code: "KPbrtb0COK8",
      language: "English",
      mpa_rating: "",
      background_image:
        "https://yts.lt/assets/images/movies/the_protector_1985/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/the_protector_1985/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/the_protector_1985/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/the_protector_1985/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/the_protector_1985/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/D677C140DB3F56F5CECBF16E8F1FC100F8927065",
          hash: "D677C140DB3F56F5CECBF16E8F1FC100F8927065",
          quality: "720p",
          type: "bluray",
          seeds: 100,
          peers: 20,
          size: "855.75 MB",
          size_bytes: 897318912,
          date_uploaded: "2019-11-30 13:27:46",
          date_uploaded_unix: 1575116866
        },
        {
          url:
            "https://yts.lt/torrent/download/AA015CED143281B53F2D6F1602C29D8F70AFE86E",
          hash: "AA015CED143281B53F2D6F1602C29D8F70AFE86E",
          quality: "1080p",
          type: "bluray",
          seeds: 116,
          peers: 22,
          size: "1.5 GB",
          size_bytes: 1610612736,
          date_uploaded: "2019-11-30 15:14:40",
          date_uploaded_unix: 1575123280
        }
      ],
      date_uploaded: "2019-11-30 13:27:46",
      date_uploaded_unix: 1575116866
    },
    {
      id: 14398,
      url: "https://yts.lt/movie/anacondas-trail-of-blood-2009",
      imdb_code: "tt1150934",
      title: "Anacondas: Trail of Blood",
      title_english: "Anacondas: Trail of Blood",
      title_long: "Anacondas: Trail of Blood (2009)",
      slug: "anacondas-trail-of-blood-2009",
      year: 2009,
      rating: 3,
      runtime: 89,
      genres: ["Action", "Adventure", "Horror", "Sci-Fi", "Thriller"],
      summary:
        "Picking up immediately where Anaconda 3 left off, herpetologist Amanda Hayes finally learns her employer Murdoch's true colors when he hires a doctor to harvest a fresh supply of blood orchids to experiment with the regenerative nectar on a baby snake in order to seek treatment for his own terminal illness. Amanda is forced to secretly bring together another team of scientists whom face off against a heavily armed squad of Murdoch's men to steal the coveted orchids before the killer Anaconda hunts both parties down.",
      description_full:
        "Picking up immediately where Anaconda 3 left off, herpetologist Amanda Hayes finally learns her employer Murdoch's true colors when he hires a doctor to harvest a fresh supply of blood orchids to experiment with the regenerative nectar on a baby snake in order to seek treatment for his own terminal illness. Amanda is forced to secretly bring together another team of scientists whom face off against a heavily armed squad of Murdoch's men to steal the coveted orchids before the killer Anaconda hunts both parties down.",
      synopsis:
        "Picking up immediately where Anaconda 3 left off, herpetologist Amanda Hayes finally learns her employer Murdoch's true colors when he hires a doctor to harvest a fresh supply of blood orchids to experiment with the regenerative nectar on a baby snake in order to seek treatment for his own terminal illness. Amanda is forced to secretly bring together another team of scientists whom face off against a heavily armed squad of Murdoch's men to steal the coveted orchids before the killer Anaconda hunts both parties down.",
      yt_trailer_code: "QeNnOMn80K4",
      language: "English",
      mpa_rating: "R",
      background_image:
        "https://yts.lt/assets/images/movies/anacondas_trail_of_blood_2009/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/anacondas_trail_of_blood_2009/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/anacondas_trail_of_blood_2009/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/anacondas_trail_of_blood_2009/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/anacondas_trail_of_blood_2009/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/EEB23C9C3EDB7BDF6EF1A1C6361E890E4EC088BF",
          hash: "EEB23C9C3EDB7BDF6EF1A1C6361E890E4EC088BF",
          quality: "720p",
          type: "bluray",
          seeds: 92,
          peers: 22,
          size: "797.77 MB",
          size_bytes: 836522476,
          date_uploaded: "2019-11-29 09:36:36",
          date_uploaded_unix: 1575016596
        },
        {
          url:
            "https://yts.lt/torrent/download/4508A80BBE7445508A2807C2AC52B89C875B96AD",
          hash: "4508A80BBE7445508A2807C2AC52B89C875B96AD",
          quality: "1080p",
          type: "bluray",
          seeds: 94,
          peers: 35,
          size: "1.4 GB",
          size_bytes: 1503238554,
          date_uploaded: "2019-11-29 11:17:04",
          date_uploaded_unix: 1575022624
        }
      ],
      date_uploaded: "2019-11-29 09:36:36",
      date_uploaded_unix: 1575016596
    },
    {
      id: 14397,
      url: "https://yts.lt/movie/anaconda-3-offspring-2008",
      imdb_code: "tt1137996",
      title: "Anaconda 3: Offspring",
      title_english: "Anaconda 3: Offspring",
      title_long: "Anaconda 3: Offspring (2008)",
      slug: "anaconda-3-offspring-2008",
      year: 2008,
      rating: 2.7,
      runtime: 91,
      genres: ["Action", "Adventure", "Horror", "Sci-Fi", "Thriller"],
      summary:
        "Cancer-terminal tycoon Peter Murdoch's secret Wexel Hall Pharmaceuticals lab has developed a blood orchid extract cure. To examine why it works optimally in snakes, they also bread a super-anaconda strain. But the original pair escapes, leaving a bloody trail of corpses. Murdoch runs, instructing his staff to clean up. They keep failing and being eaten like unsuspecting locals, some alive, even after enlisting ruthless big game hunter Hammett. The fast-growing pregnant monster sheds its skin, thus disabling the only tracking device.",
      description_full:
        "Cancer-terminal tycoon Peter Murdoch's secret Wexel Hall Pharmaceuticals lab has developed a blood orchid extract cure. To examine why it works optimally in snakes, they also bread a super-anaconda strain. But the original pair escapes, leaving a bloody trail of corpses. Murdoch runs, instructing his staff to clean up. They keep failing and being eaten like unsuspecting locals, some alive, even after enlisting ruthless big game hunter Hammett. The fast-growing pregnant monster sheds its skin, thus disabling the only tracking device.",
      synopsis:
        "Cancer-terminal tycoon Peter Murdoch's secret Wexel Hall Pharmaceuticals lab has developed a blood orchid extract cure. To examine why it works optimally in snakes, they also bread a super-anaconda strain. But the original pair escapes, leaving a bloody trail of corpses. Murdoch runs, instructing his staff to clean up. They keep failing and being eaten like unsuspecting locals, some alive, even after enlisting ruthless big game hunter Hammett. The fast-growing pregnant monster sheds its skin, thus disabling the only tracking device.",
      yt_trailer_code: "56v3LxpSZK0",
      language: "English",
      mpa_rating: "R",
      background_image:
        "https://yts.lt/assets/images/movies/anaconda_3_offspring_2008/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/anaconda_3_offspring_2008/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/anaconda_3_offspring_2008/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/anaconda_3_offspring_2008/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/anaconda_3_offspring_2008/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/5631747A70CC8323530E562C265E19F955BC97E2",
          hash: "5631747A70CC8323530E562C265E19F955BC97E2",
          quality: "720p",
          type: "bluray",
          seeds: 93,
          peers: 28,
          size: "816.15 MB",
          size_bytes: 855795302,
          date_uploaded: "2019-11-28 06:34:33",
          date_uploaded_unix: 1574919273
        },
        {
          url:
            "https://yts.lt/torrent/download/AEAA9FE7531AF9BD3CCAD205F7B730447C556DBC",
          hash: "AEAA9FE7531AF9BD3CCAD205F7B730447C556DBC",
          quality: "1080p",
          type: "bluray",
          seeds: 93,
          peers: 18,
          size: "1.43 GB",
          size_bytes: 1535450808,
          date_uploaded: "2019-11-28 08:22:57",
          date_uploaded_unix: 1574925777
        }
      ],
      date_uploaded: "2019-11-28 06:34:33",
      date_uploaded_unix: 1574919273
    },
    {
      id: 14391,
      url: "https://yts.lt/movie/the-driver-2019",
      imdb_code: "tt9272568",
      title: "The Driver",
      title_english: "The Driver",
      title_long: "The Driver (2019)",
      slug: "the-driver-2019",
      year: 2019,
      rating: 4,
      runtime: 97,
      genres: ["Action"],
      summary:
        "In a zombie apocalypse, one man desperately tries to keep his family alive.",
      description_full:
        "In a zombie apocalypse, one man desperately tries to keep his family alive.",
      synopsis:
        "In a zombie apocalypse, one man desperately tries to keep his family alive.",
      yt_trailer_code: "R_1wvCJRArU",
      language: "English",
      mpa_rating: "",
      background_image:
        "https://yts.lt/assets/images/movies/the_driver_2019/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/the_driver_2019/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/the_driver_2019/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/the_driver_2019/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/the_driver_2019/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/F7AA5B91148F2C03D62B1F287CC0C1FE81875CE0",
          hash: "F7AA5B91148F2C03D62B1F287CC0C1FE81875CE0",
          quality: "720p",
          type: "web",
          seeds: 470,
          peers: 166,
          size: "880.79 MB",
          size_bytes: 923575255,
          date_uploaded: "2019-11-27 12:25:25",
          date_uploaded_unix: 1574853925
        },
        {
          url:
            "https://yts.lt/torrent/download/853ED62820943EB0D3C76ABE0142112EF47C5B41",
          hash: "853ED62820943EB0D3C76ABE0142112EF47C5B41",
          quality: "1080p",
          type: "web",
          seeds: 300,
          peers: 114,
          size: "1.54 GB",
          size_bytes: 1653562409,
          date_uploaded: "2019-11-27 13:58:55",
          date_uploaded_unix: 1574859535
        }
      ],
      date_uploaded: "2019-11-27 12:25:25",
      date_uploaded_unix: 1574853925
    },
    {
      id: 14375,
      url: "https://yts.lt/movie/silver-city-1951",
      imdb_code: "tt0044036",
      title: "Silver City",
      title_english: "Silver City",
      title_long: "Silver City (1951)",
      slug: "silver-city-1951",
      year: 1951,
      rating: 6.1,
      runtime: 90,
      genres: ["Action", "Adventure", "Romance", "Western"],
      summary:
        "The office of mining engineers and partners Larkin Moffatt and Charlie Storrs is robbed. Storrs accuses Moffatt of complicity with the robbers and fires him. He also asks all major mining companies in the region to avoid hiring Moffatt. Unemployable, Moffatt opens his own small independent assay office in Silver City. His first client, Candace Surrency, leases a mine from the greedy R. R. Jarboe, owner of several mines. Candace Surrency and her father have invested all their funds in the mine lease which is due to expire in 12 days, reverting the mining rights back to its owner, R. R. Jarboe. So far the mine has been dry but the Surrencys have hired Moffatt to do another assay on the latest batch of ore. Moffatt finds silver in large amounts in the test batch, making the Surrencys rich. News of their silver strike spreads fast. Mine owner R. R. Jarboe refuses to extend the mine lease to the Surrencys who won't have enough time to extract and process the silver ore during the remainder...",
      description_full:
        "The office of mining engineers and partners Larkin Moffatt and Charlie Storrs is robbed. Storrs accuses Moffatt of complicity with the robbers and fires him. He also asks all major mining companies in the region to avoid hiring Moffatt. Unemployable, Moffatt opens his own small independent assay office in Silver City. His first client, Candace Surrency, leases a mine from the greedy R. R. Jarboe, owner of several mines. Candace Surrency and her father have invested all their funds in the mine lease which is due to expire in 12 days, reverting the mining rights back to its owner, R. R. Jarboe. So far the mine has been dry but the Surrencys have hired Moffatt to do another assay on the latest batch of ore. Moffatt finds silver in large amounts in the test batch, making the Surrencys rich. News of their silver strike spreads fast. Mine owner R. R. Jarboe refuses to extend the mine lease to the Surrencys who won't have enough time to extract and process the silver ore during the remainder...",
      synopsis:
        "The office of mining engineers and partners Larkin Moffatt and Charlie Storrs is robbed. Storrs accuses Moffatt of complicity with the robbers and fires him. He also asks all major mining companies in the region to avoid hiring Moffatt. Unemployable, Moffatt opens his own small independent assay office in Silver City. His first client, Candace Surrency, leases a mine from the greedy R. R. Jarboe, owner of several mines. Candace Surrency and her father have invested all their funds in the mine lease which is due to expire in 12 days, reverting the mining rights back to its owner, R. R. Jarboe. So far the mine has been dry but the Surrencys have hired Moffatt to do another assay on the latest batch of ore. Moffatt finds silver in large amounts in the test batch, making the Surrencys rich. News of their silver strike spreads fast. Mine owner R. R. Jarboe refuses to extend the mine lease to the Surrencys who won't have enough time to extract and process the silver ore during the remainder...",
      yt_trailer_code: "",
      language: "English",
      mpa_rating: "",
      background_image:
        "https://yts.lt/assets/images/movies/silver_city_1951/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/silver_city_1951/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/silver_city_1951/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/silver_city_1951/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/silver_city_1951/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/6D3C6A1F0523E5D7DFAB70183E7164375DB68754",
          hash: "6D3C6A1F0523E5D7DFAB70183E7164375DB68754",
          quality: "720p",
          type: "bluray",
          seeds: 7,
          peers: 7,
          size: "771.94 MB",
          size_bytes: 809437757,
          date_uploaded: "2019-11-25 10:42:41",
          date_uploaded_unix: 1574674961
        },
        {
          url:
            "https://yts.lt/torrent/download/1A50F4FF7A84A91372CE18CCBCC9738E21AF75FA",
          hash: "1A50F4FF7A84A91372CE18CCBCC9738E21AF75FA",
          quality: "1080p",
          type: "bluray",
          seeds: 20,
          peers: 3,
          size: "1.39 GB",
          size_bytes: 1492501135,
          date_uploaded: "2019-11-25 12:25:02",
          date_uploaded_unix: 1574681102
        }
      ],
      date_uploaded: "2019-11-25 10:42:41",
      date_uploaded_unix: 1574674961
    },
    {
      id: 14368,
      url: "https://yts.lt/movie/point-of-no-return-1993",
      imdb_code: "tt0107843",
      title: "Point of No Return",
      title_english: "Point of No Return",
      title_long: "Point of No Return (1993)",
      slug: "point-of-no-return-1993",
      year: 1993,
      rating: 6.1,
      runtime: 109,
      genres: ["Action", "Crime", "Drama", "Thriller"],
      summary:
        'Drug addict Maggie Hayward\'s consistent violence, even in police custody, ends in the execution chamber. However, top secret U.S. government Agent "Bob" arranges a staged death, so Maggie can be elaborately trained as a killer. She gets a new cover identity as saleswoman Claudia Anne Doran. She also finds a housemate, building super J.P., a broad-minded, gentle photographer. The two fall in love, and that complicates her government assignments. His influence extends to breeding in her a conscience that supplants her violent tendencies, and desire to continue work for the agency.',
      description_full:
        'Drug addict Maggie Hayward\'s consistent violence, even in police custody, ends in the execution chamber. However, top secret U.S. government Agent "Bob" arranges a staged death, so Maggie can be elaborately trained as a killer. She gets a new cover identity as saleswoman Claudia Anne Doran. She also finds a housemate, building super J.P., a broad-minded, gentle photographer. The two fall in love, and that complicates her government assignments. His influence extends to breeding in her a conscience that supplants her violent tendencies, and desire to continue work for the agency.',
      synopsis:
        'Drug addict Maggie Hayward\'s consistent violence, even in police custody, ends in the execution chamber. However, top secret U.S. government Agent "Bob" arranges a staged death, so Maggie can be elaborately trained as a killer. She gets a new cover identity as saleswoman Claudia Anne Doran. She also finds a housemate, building super J.P., a broad-minded, gentle photographer. The two fall in love, and that complicates her government assignments. His influence extends to breeding in her a conscience that supplants her violent tendencies, and desire to continue work for the agency.',
      yt_trailer_code: "GUXSN2ZOKw8",
      language: "English",
      mpa_rating: "R",
      background_image:
        "https://yts.lt/assets/images/movies/point_of_no_return_1993/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/point_of_no_return_1993/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/point_of_no_return_1993/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/point_of_no_return_1993/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/point_of_no_return_1993/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/27E23482D166EF9E4FEBF7EE2654484F45E22F23",
          hash: "27E23482D166EF9E4FEBF7EE2654484F45E22F23",
          quality: "720p",
          type: "bluray",
          seeds: 128,
          peers: 33,
          size: "956.53 MB",
          size_bytes: 1002994401,
          date_uploaded: "2019-11-25 14:02:11",
          date_uploaded_unix: 1574686931
        },
        {
          url:
            "https://yts.lt/torrent/download/94C75BB540435410B2B193A71DFB5740E8F9FD60",
          hash: "94C75BB540435410B2B193A71DFB5740E8F9FD60",
          quality: "1080p",
          type: "bluray",
          seeds: 145,
          peers: 26,
          size: "1.69 GB",
          size_bytes: 1814623683,
          date_uploaded: "2019-11-25 15:31:44",
          date_uploaded_unix: 1574692304
        }
      ],
      date_uploaded: "2019-11-25 14:02:11",
      date_uploaded_unix: 1574686931
    },
    {
      id: 14364,
      url: "https://yts.lt/movie/lee-khans-ode-1973",
      imdb_code: "tt0070942",
      title: "Lee Khans öde",
      title_english: "Lee Khans öde",
      title_long: "Lee Khans öde (1973)",
      slug: "lee-khans-ode-1973",
      year: 1973,
      rating: 7.1,
      runtime: 105,
      genres: ["Action", "Drama"],
      summary:
        "Lee Khan, a high official under Mongolian Emperor Yuan of the Yuan dynasty (year 1366) procures the battle map of the Chinese rebel Chu Yuan-Chang's army. Rebel spies, aided by treachery within Khan's ranks, strive to corner him in an inn.",
      description_full:
        "Lee Khan, a high official under Mongolian Emperor Yuan of the Yuan dynasty (year 1366) procures the battle map of the Chinese rebel Chu Yuan-Chang's army. Rebel spies, aided by treachery within Khan's ranks, strive to corner him in an inn.",
      synopsis:
        "Lee Khan, a high official under Mongolian Emperor Yuan of the Yuan dynasty (year 1366) procures the battle map of the Chinese rebel Chu Yuan-Chang's army. Rebel spies, aided by treachery within Khan's ranks, strive to corner him in an inn.",
      yt_trailer_code: "",
      language: "English",
      mpa_rating: "",
      background_image:
        "https://yts.lt/assets/images/movies/the_fate_of_lee_khan_1973/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/the_fate_of_lee_khan_1973/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/the_fate_of_lee_khan_1973/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/the_fate_of_lee_khan_1973/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/the_fate_of_lee_khan_1973/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/03CBD74D3667EC08DCE96CF27E10E264323749BA",
          hash: "03CBD74D3667EC08DCE96CF27E10E264323749BA",
          quality: "720p",
          type: "bluray",
          seeds: 18,
          peers: 4,
          size: "357.07 MB",
          size_bytes: 374415032,
          date_uploaded: "2019-11-25 01:46:41",
          date_uploaded_unix: 1574642801
        },
        {
          url:
            "https://yts.lt/torrent/download/D58CFF81C06A79D335080691935B9D8BE98DC65D",
          hash: "D58CFF81C06A79D335080691935B9D8BE98DC65D",
          quality: "1080p",
          type: "bluray",
          seeds: 34,
          peers: 11,
          size: "647.32 MB",
          size_bytes: 678764216,
          date_uploaded: "2019-11-25 02:35:43",
          date_uploaded_unix: 1574645743
        }
      ],
      date_uploaded: "2019-11-25 01:46:41",
      date_uploaded_unix: 1574642801
    },
    {
      id: 14341,
      url: "https://yts.lt/movie/the-courier-2019",
      imdb_code: "tt9207616",
      title: "The Courier",
      title_english: "The Courier",
      title_long: "The Courier (2019)",
      slug: "the-courier-2019",
      year: 2019,
      rating: 4.4,
      runtime: 99,
      genres: ["Action", "Drama", "Thriller"],
      summary:
        "A courier in London discovers that one of the packages she's transporting is a bomb.",
      description_full:
        "A courier in London discovers that one of the packages she's transporting is a bomb.",
      synopsis:
        "A courier in London discovers that one of the packages she's transporting is a bomb.",
      yt_trailer_code: "EcaNxEVqsnM",
      language: "English",
      mpa_rating: "R",
      background_image:
        "https://yts.lt/assets/images/movies/the_courier_2019/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/the_courier_2019/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/the_courier_2019/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/the_courier_2019/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/the_courier_2019/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/781FBE6069F905A07A6DA4D54A1AB6B5B04262E5",
          hash: "781FBE6069F905A07A6DA4D54A1AB6B5B04262E5",
          quality: "720p",
          type: "web",
          seeds: 1144,
          peers: 417,
          size: "889.04 MB",
          size_bytes: 932226007,
          date_uploaded: "2019-11-22 15:09:07",
          date_uploaded_unix: 1574431747
        },
        {
          url:
            "https://yts.lt/torrent/download/C2BDC83B61548A26A159FE999D931159E58FF840",
          hash: "C2BDC83B61548A26A159FE999D931159E58FF840",
          quality: "1080p",
          type: "web",
          seeds: 889,
          peers: 279,
          size: "1.56 GB",
          size_bytes: 1675037245,
          date_uploaded: "2019-11-22 16:43:27",
          date_uploaded_unix: 1574437407
        }
      ],
      date_uploaded: "2019-11-22 15:09:07",
      date_uploaded_unix: 1574431747
    },
    {
      id: 14332,
      url: "https://yts.lt/movie/godsend-2004",
      imdb_code: "tt0335121",
      title: "Godsend",
      title_english: "Godsend",
      title_long: "Godsend (2004)",
      slug: "godsend-2004",
      year: 2004,
      rating: 4.8,
      runtime: 102,
      genres: ["Action", "Drama", "Fantasy", "Horror", "Sci-Fi", "Thriller"],
      summary:
        "The 8-year-old Adam is killed in a traffic accident. His grieving parents agree to recreate him through experimental and illegal cloning, conducted by an ingenious but pushy geneticist. After eight happy years, a scary door opens between Adam II and someone from the past.",
      description_full:
        "The 8-year-old Adam is killed in a traffic accident. His grieving parents agree to recreate him through experimental and illegal cloning, conducted by an ingenious but pushy geneticist. After eight happy years, a scary door opens between Adam II and someone from the past.",
      synopsis:
        "The 8-year-old Adam is killed in a traffic accident. His grieving parents agree to recreate him through experimental and illegal cloning, conducted by an ingenious but pushy geneticist. After eight happy years, a scary door opens between Adam II and someone from the past.",
      yt_trailer_code: "UWI2qZC_KUY",
      language: "English",
      mpa_rating: "PG-13",
      background_image:
        "https://yts.lt/assets/images/movies/godsend_2004/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/godsend_2004/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/godsend_2004/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/godsend_2004/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/godsend_2004/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/3740062EE71E40A047480BD14DCC8DA6933AE983",
          hash: "3740062EE71E40A047480BD14DCC8DA6933AE983",
          quality: "720p",
          type: "bluray",
          seeds: 24,
          peers: 8,
          size: "911.79 MB",
          size_bytes: 956081111,
          date_uploaded: "2019-11-21 21:59:06",
          date_uploaded_unix: 1574369946
        },
        {
          url:
            "https://yts.lt/torrent/download/AB9ED0F4AC2C5323D1A1E93DABFB56E366A3612A",
          hash: "AB9ED0F4AC2C5323D1A1E93DABFB56E366A3612A",
          quality: "1080p",
          type: "bluray",
          seeds: 34,
          peers: 11,
          size: "1.61 GB",
          size_bytes: 1728724337,
          date_uploaded: "2019-11-21 23:43:33",
          date_uploaded_unix: 1574376213
        }
      ],
      date_uploaded: "2019-11-21 21:59:06",
      date_uploaded_unix: 1574369946
    },
    {
      id: 14327,
      url: "https://yts.lt/movie/the-take-1974",
      imdb_code: "tt0072249",
      title: "The Take",
      title_english: "The Take",
      title_long: "The Take (1974)",
      slug: "the-take-1974",
      year: 1974,
      rating: 5.4,
      runtime: 91,
      genres: ["Action", "Crime", "Drama"],
      summary:
        "Crime fighter Terry Sneed arrives in New Mexico to help out a local police chief - but he's already taking money from the underworld.",
      description_full:
        "Crime fighter Terry Sneed arrives in New Mexico to help out a local police chief - but he's already taking money from the underworld.",
      synopsis:
        "Crime fighter Terry Sneed arrives in New Mexico to help out a local police chief - but he's already taking money from the underworld.",
      yt_trailer_code: "",
      language: "English",
      mpa_rating: "",
      background_image:
        "https://yts.lt/assets/images/movies/the_take_1974/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/the_take_1974/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/the_take_1974/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/the_take_1974/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/the_take_1974/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/4B6E12A32D9C367763EAAE5A8571276872B65C50",
          hash: "4B6E12A32D9C367763EAAE5A8571276872B65C50",
          quality: "720p",
          type: "bluray",
          seeds: 18,
          peers: 3,
          size: "781.66 MB",
          size_bytes: 819629916,
          date_uploaded: "2019-11-21 19:14:36",
          date_uploaded_unix: 1574360076
        },
        {
          url:
            "https://yts.lt/torrent/download/B947E24558574349F828B3E9D0CB356EB5CD75E0",
          hash: "B947E24558574349F828B3E9D0CB356EB5CD75E0",
          quality: "1080p",
          type: "bluray",
          seeds: 19,
          peers: 3,
          size: "1.41 GB",
          size_bytes: 1513975972,
          date_uploaded: "2019-11-21 21:03:57",
          date_uploaded_unix: 1574366637
        }
      ],
      date_uploaded: "2019-11-21 19:14:36",
      date_uploaded_unix: 1574360076
    },
    {
      id: 14325,
      url: "https://yts.lt/movie/3000-miles-to-graceland-2001",
      imdb_code: "tt0233142",
      title: "3000 Miles to Graceland",
      title_english: "3000 Miles to Graceland",
      title_long: "3000 Miles to Graceland (2001)",
      slug: "3000-miles-to-graceland-2001",
      year: 2001,
      rating: 6,
      runtime: 125,
      genres: ["Action", "Comedy", "Crime", "Thriller"],
      summary:
        "It was an ingenious enough plan: rob the Riviera Casino's count room during an Elvis impersonator convention. But Thomas Murphy decided to keep all the money for himself and shot all his partners, including recently-freed ex-con Michael Zane. With $3.2 million at stake, the Marshals Service closing in, and single mom Cybil Waingrow and her son Jesse constantly confounding things, Michael must track down Murphy.",
      description_full:
        "It was an ingenious enough plan: rob the Riviera Casino's count room during an Elvis impersonator convention. But Thomas Murphy decided to keep all the money for himself and shot all his partners, including recently-freed ex-con Michael Zane. With $3.2 million at stake, the Marshals Service closing in, and single mom Cybil Waingrow and her son Jesse constantly confounding things, Michael must track down Murphy.",
      synopsis:
        "It was an ingenious enough plan: rob the Riviera Casino's count room during an Elvis impersonator convention. But Thomas Murphy decided to keep all the money for himself and shot all his partners, including recently-freed ex-con Michael Zane. With $3.2 million at stake, the Marshals Service closing in, and single mom Cybil Waingrow and her son Jesse constantly confounding things, Michael must track down Murphy.",
      yt_trailer_code: "KJPNc2NOKc8",
      language: "English",
      mpa_rating: "R",
      background_image:
        "https://yts.lt/assets/images/movies/3000_miles_to_graceland_2001/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/3000_miles_to_graceland_2001/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/3000_miles_to_graceland_2001/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/3000_miles_to_graceland_2001/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/3000_miles_to_graceland_2001/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/1797CDDB99F6EFA8D8CCB6DA814E8BD00DE0A56E",
          hash: "1797CDDB99F6EFA8D8CCB6DA814E8BD00DE0A56E",
          quality: "720p",
          type: "bluray",
          seeds: 41,
          peers: 13,
          size: "1.09 GB",
          size_bytes: 1170378588,
          date_uploaded: "2019-11-21 16:05:30",
          date_uploaded_unix: 1574348730
        },
        {
          url:
            "https://yts.lt/torrent/download/857FE166983FF0CBF04141A808675F05F411662E",
          hash: "857FE166983FF0CBF04141A808675F05F411662E",
          quality: "1080p",
          type: "bluray",
          seeds: 55,
          peers: 22,
          size: "1.96 GB",
          size_bytes: 2104533975,
          date_uploaded: "2019-11-21 18:17:37",
          date_uploaded_unix: 1574356657
        }
      ],
      date_uploaded: "2019-11-21 16:05:30",
      date_uploaded_unix: 1574348730
    },
    {
      id: 14316,
      url: "https://yts.lt/movie/gemini-man-2019",
      imdb_code: "tt1025100",
      title: "Gemini Man",
      title_english: "Gemini Man",
      title_long: "Gemini Man (2019)",
      slug: "gemini-man-2019",
      year: 2019,
      rating: 5.7,
      runtime: 117,
      genres: ["Action", "Drama", "Sci-Fi", "Thriller"],
      summary:
        "A retiring assassin, Henry Brogan, finds himself pursued by a mysterious killer that can predict his every move. Discovering that he's being hunted by a younger clone of himself, Henry needs to find out why he's being targeted and who the creator is.",
      description_full:
        "A retiring assassin, Henry Brogan, finds himself pursued by a mysterious killer that can predict his every move. Discovering that he's being hunted by a younger clone of himself, Henry needs to find out why he's being targeted and who the creator is.",
      synopsis:
        "A retiring assassin, Henry Brogan, finds himself pursued by a mysterious killer that can predict his every move. Discovering that he's being hunted by a younger clone of himself, Henry needs to find out why he's being targeted and who the creator is.",
      yt_trailer_code: "AbyJignbSj0",
      language: "English",
      mpa_rating: "PG-13",
      background_image:
        "https://yts.lt/assets/images/movies/gemini_man_2019/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/gemini_man_2019/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/gemini_man_2019/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/gemini_man_2019/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/gemini_man_2019/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/9CE8015CCD28300402B1797215CC0F4C475E1F4C",
          hash: "9CE8015CCD28300402B1797215CC0F4C475E1F4C",
          quality: "720p",
          type: "web",
          seeds: 5193,
          peers: 1340,
          size: "1.01 GB",
          size_bytes: 1084479242,
          date_uploaded: "2019-11-20 19:30:52",
          date_uploaded_unix: 1574274652
        },
        {
          url:
            "https://yts.lt/torrent/download/671E6D130005810236C19F2B706AB5552CA1472A",
          hash: "671E6D130005810236C19F2B706AB5552CA1472A",
          quality: "1080p",
          type: "web",
          seeds: 6859,
          peers: 1864,
          size: "1.83 GB",
          size_bytes: 1964947538,
          date_uploaded: "2019-11-20 04:38:57",
          date_uploaded_unix: 1574221137
        }
      ],
      date_uploaded: "2019-11-20 19:30:52",
      date_uploaded_unix: 1574274652
    },
    {
      id: 14313,
      url: "https://yts.lt/movie/the-divine-fury-2019",
      imdb_code: "tt10550884",
      title: "The Divine Fury",
      title_english: "The Divine Fury",
      title_long: "The Divine Fury (2019)",
      slug: "the-divine-fury-2019",
      year: 2019,
      rating: 6.1,
      runtime: 129,
      genres: ["Action", "Horror", "Thriller"],
      summary:
        "After losing his father at a young age in a terrible accident, Yong-hu (Park) abandons his Christian faith and chooses to only believe in himself. Now as an adult, Yong-hu is a champion fighter and has everything he has ever wanted, that is until mysterious wounds appear in the palms of his hands. He solicits help from a local priest Father Ahn (Ahn), hoping the priest can help relieve him of the painful markings only to find himself in the middle of a dangerous fight against otherworldly evil forces seeking to wreak havoc on the human world.",
      description_full:
        "After losing his father at a young age in a terrible accident, Yong-hu (Park) abandons his Christian faith and chooses to only believe in himself. Now as an adult, Yong-hu is a champion fighter and has everything he has ever wanted, that is until mysterious wounds appear in the palms of his hands. He solicits help from a local priest Father Ahn (Ahn), hoping the priest can help relieve him of the painful markings only to find himself in the middle of a dangerous fight against otherworldly evil forces seeking to wreak havoc on the human world.",
      synopsis:
        "After losing his father at a young age in a terrible accident, Yong-hu (Park) abandons his Christian faith and chooses to only believe in himself. Now as an adult, Yong-hu is a champion fighter and has everything he has ever wanted, that is until mysterious wounds appear in the palms of his hands. He solicits help from a local priest Father Ahn (Ahn), hoping the priest can help relieve him of the painful markings only to find himself in the middle of a dangerous fight against otherworldly evil forces seeking to wreak havoc on the human world.",
      yt_trailer_code: "8mBk8634OiM",
      language: "English",
      mpa_rating: "",
      background_image:
        "https://yts.lt/assets/images/movies/the_divine_fury_2019/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/the_divine_fury_2019/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/the_divine_fury_2019/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/the_divine_fury_2019/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/the_divine_fury_2019/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/CADD5A63D4FD68678507D048857CC4EF829F0C17",
          hash: "CADD5A63D4FD68678507D048857CC4EF829F0C17",
          quality: "720p",
          type: "web",
          seeds: 457,
          peers: 120,
          size: "1.14 GB",
          size_bytes: 1224065679,
          date_uploaded: "2019-11-20 20:35:11",
          date_uploaded_unix: 1574278511
        },
        {
          url:
            "https://yts.lt/torrent/download/F1CCCF472267091FC89B01EBBE75FC1996604E7D",
          hash: "F1CCCF472267091FC89B01EBBE75FC1996604E7D",
          quality: "1080p",
          type: "web",
          seeds: 326,
          peers: 77,
          size: "2.04 GB",
          size_bytes: 2190433321,
          date_uploaded: "2019-11-20 22:35:51",
          date_uploaded_unix: 1574285751
        }
      ],
      date_uploaded: "2019-11-20 20:35:11",
      date_uploaded_unix: 1574278511
    },
    {
      id: 14309,
      url: "https://yts.lt/movie/killerman-2019",
      imdb_code: "tt7420342",
      title: "Killerman",
      title_english: "Killerman",
      title_long: "Killerman (2019)",
      slug: "killerman-2019",
      year: 2019,
      rating: 5.5,
      runtime: 112,
      genres: ["Action", "Crime", "Drama", "Mystery", "Thriller"],
      summary:
        "Moe Diamond is a New York City money launderer who wakes up with no memory and millions of dollars in stolen cash and drugs. He must soon scour the streets in search of answers while trying to dodge a crew of violent and crooked cops.",
      description_full:
        "Moe Diamond is a New York City money launderer who wakes up with no memory and millions of dollars in stolen cash and drugs. He must soon scour the streets in search of answers while trying to dodge a crew of violent and crooked cops.",
      synopsis:
        "Moe Diamond is a New York City money launderer who wakes up with no memory and millions of dollars in stolen cash and drugs. He must soon scour the streets in search of answers while trying to dodge a crew of violent and crooked cops.",
      yt_trailer_code: "xTSuC0zhJzw",
      language: "English",
      mpa_rating: "R",
      background_image:
        "https://yts.lt/assets/images/movies/killerman_2019/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/killerman_2019/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/killerman_2019/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/killerman_2019/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/killerman_2019/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/551AF9917AAB282E21C95EC3011505CD85AC31B7",
          hash: "551AF9917AAB282E21C95EC3011505CD85AC31B7",
          quality: "720p",
          type: "web",
          seeds: 447,
          peers: 140,
          size: "999 MB",
          size_bytes: 1047527424,
          date_uploaded: "2019-11-20 12:12:37",
          date_uploaded_unix: 1574248357
        },
        {
          url:
            "https://yts.lt/torrent/download/C0EF1A20A49F65DE2CE90CFE2BEDC32ADD77360F",
          hash: "C0EF1A20A49F65DE2CE90CFE2BEDC32ADD77360F",
          quality: "1080p",
          type: "web",
          seeds: 302,
          peers: 67,
          size: "1.76 GB",
          size_bytes: 1889785610,
          date_uploaded: "2019-11-20 14:01:03",
          date_uploaded_unix: 1574254863
        }
      ],
      date_uploaded: "2019-11-20 12:12:37",
      date_uploaded_unix: 1574248357
    }
  ],
  originals: [
    {
      id: 14501,
      url: "https://yts.lt/movie/the-mummy-rebirth-2019",
      imdb_code: "tt10378798",
      title: "The Mummy Rebirth",
      title_english: "The Mummy Rebirth",
      title_long: "The Mummy Rebirth (2019)",
      slug: "the-mummy-rebirth-2019",
      year: 2019,
      rating: 4.6,
      runtime: 80,
      genres: ["Action", "Horror"],
      summary:
        "Two treasure hunters uncover a sealed tomb and awaken a mummy that has waited years to come back and wipe humanity from the face of the Earth. It's a race against time as they try to stop the Mummy from wreaking havoc on the modern world.",
      description_full:
        "Two treasure hunters uncover a sealed tomb and awaken a mummy that has waited years to come back and wipe humanity from the face of the Earth. It's a race against time as they try to stop the Mummy from wreaking havoc on the modern world.",
      synopsis:
        "Two treasure hunters uncover a sealed tomb and awaken a mummy that has waited years to come back and wipe humanity from the face of the Earth. It's a race against time as they try to stop the Mummy from wreaking havoc on the modern world.",
      yt_trailer_code: "_n1HJgPXABw",
      language: "English",
      mpa_rating: "",
      background_image:
        "https://yts.lt/assets/images/movies/the_mummy_rebirth_2019/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/the_mummy_rebirth_2019/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/the_mummy_rebirth_2019/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/the_mummy_rebirth_2019/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/the_mummy_rebirth_2019/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/BDB7B86A1099FE63B2575DAB4DAF6E7F5B4BA1FB",
          hash: "BDB7B86A1099FE63B2575DAB4DAF6E7F5B4BA1FB",
          quality: "720p",
          type: "web",
          seeds: 0,
          peers: 0,
          size: "720.9 MB",
          size_bytes: 755918438,
          date_uploaded: "2019-12-06 14:04:22",
          date_uploaded_unix: 1575637462
        }
      ],
      date_uploaded: "2019-12-06 14:04:22",
      date_uploaded_unix: 1575637462
    },
    {
      id: 14496,
      url: "https://yts.lt/movie/little-monsters-2019",
      imdb_code: "tt7390588",
      title: "Little Monsters",
      title_english: "Little Monsters",
      title_long: "Little Monsters (2019)",
      slug: "little-monsters-2019",
      year: 2019,
      rating: 6.3,
      runtime: 93,
      genres: ["Comedy", "Horror"],
      summary:
        "Dave has decided to get over his recent breakup by seeking refuge in his nephew Felix, accompanying him on a school trip, among other things, to be able to get closer to one of the teachers, Miss Caroline. Everything seems normal, at least until a zombie invasion breaks out that will threaten Dave's plans. New horror movie icon Lupita Nyong'o nails it in this blend of comedy and gore.",
      description_full:
        "Dave has decided to get over his recent breakup by seeking refuge in his nephew Felix, accompanying him on a school trip, among other things, to be able to get closer to one of the teachers, Miss Caroline. Everything seems normal, at least until a zombie invasion breaks out that will threaten Dave's plans. New horror movie icon Lupita Nyong'o nails it in this blend of comedy and gore.",
      synopsis:
        "Dave has decided to get over his recent breakup by seeking refuge in his nephew Felix, accompanying him on a school trip, among other things, to be able to get closer to one of the teachers, Miss Caroline. Everything seems normal, at least until a zombie invasion breaks out that will threaten Dave's plans. New horror movie icon Lupita Nyong'o nails it in this blend of comedy and gore.",
      yt_trailer_code: "8d1KP-OhBP4",
      language: "English",
      mpa_rating: "R",
      background_image:
        "https://yts.lt/assets/images/movies/little_monsters_2019/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/little_monsters_2019/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/little_monsters_2019/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/little_monsters_2019/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/little_monsters_2019/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/59EDBD648EAF4607E4558FB6D4F4505B77BC0308",
          hash: "59EDBD648EAF4607E4558FB6D4F4505B77BC0308",
          quality: "720p",
          type: "web",
          seeds: 4,
          peers: 42,
          size: "823.49 MB",
          size_bytes: 863491850,
          date_uploaded: "2019-12-06 13:41:25",
          date_uploaded_unix: 1575636085
        }
      ],
      date_uploaded: "2019-12-06 13:41:25",
      date_uploaded_unix: 1575636085
    },
    {
      id: 14493,
      url: "https://yts.lt/movie/the-cottage-2008",
      imdb_code: "tt0465430",
      title: "The Cottage",
      title_english: "The Cottage",
      title_long: "The Cottage (2008)",
      slug: "the-cottage-2008",
      year: 2008,
      rating: 6.1,
      runtime: 92,
      genres: ["Comedy", "Crime", "Horror", "Thriller"],
      summary:
        "In a remote part of the countryside, a bungled kidnapping turns into a living nightmare for four central characters when they cross paths with a psychopathic farmer and all hell breaks loose.",
      description_full:
        "In a remote part of the countryside, a bungled kidnapping turns into a living nightmare for four central characters when they cross paths with a psychopathic farmer and all hell breaks loose.",
      synopsis:
        "In a remote part of the countryside, a bungled kidnapping turns into a living nightmare for four central characters when they cross paths with a psychopathic farmer and all hell breaks loose.",
      yt_trailer_code: "q1DIFtBcozI",
      language: "English",
      mpa_rating: "",
      background_image:
        "https://yts.lt/assets/images/movies/the_cottage_2008/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/the_cottage_2008/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/the_cottage_2008/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/the_cottage_2008/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/the_cottage_2008/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/467B2837F7C058BF19B2F2A771E3FB92C7DE5047",
          hash: "467B2837F7C058BF19B2F2A771E3FB92C7DE5047",
          quality: "720p",
          type: "web",
          seeds: 72,
          peers: 56,
          size: "800.74 MB",
          size_bytes: 839636746,
          date_uploaded: "2019-12-06 08:27:27",
          date_uploaded_unix: 1575617247
        },
        {
          url:
            "https://yts.lt/torrent/download/38D406609F6F2D8A6779074EAB463EF2DA9211DF",
          hash: "38D406609F6F2D8A6779074EAB463EF2DA9211DF",
          quality: "1080p",
          type: "web",
          seeds: 2,
          peers: 6,
          size: "1.42 GB",
          size_bytes: 1524713390,
          date_uploaded: "2019-12-06 09:52:42",
          date_uploaded_unix: 1575622362
        }
      ],
      date_uploaded: "2019-12-06 08:27:27",
      date_uploaded_unix: 1575617247
    },
    {
      id: 14488,
      url: "https://yts.lt/movie/this-is-our-home-2019",
      imdb_code: "tt8179944",
      title: "This Is Our Home",
      title_english: "This Is Our Home",
      title_long: "This Is Our Home (2019)",
      slug: "this-is-our-home-2019",
      year: 2019,
      rating: 7.8,
      runtime: 73,
      genres: ["Horror", "Romance"],
      summary:
        "A struggling couple's weekend getaway goes awry when a child arrives in the middle of the night claiming to be their son.",
      description_full:
        "A struggling couple's weekend getaway goes awry when a child arrives in the middle of the night claiming to be their son.",
      synopsis:
        "A struggling couple's weekend getaway goes awry when a child arrives in the middle of the night claiming to be their son.",
      yt_trailer_code: "",
      language: "English",
      mpa_rating: "",
      background_image:
        "https://yts.lt/assets/images/movies/this_is_our_home_2019/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/this_is_our_home_2019/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/this_is_our_home_2019/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/this_is_our_home_2019/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/this_is_our_home_2019/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/2878B17DD0D7880C394E81219D005B5F5820E0C8",
          hash: "2878B17DD0D7880C394E81219D005B5F5820E0C8",
          quality: "720p",
          type: "web",
          seeds: 407,
          peers: 376,
          size: "647.35 MB",
          size_bytes: 678795674,
          date_uploaded: "2019-12-06 02:51:13",
          date_uploaded_unix: 1575597073
        },
        {
          url:
            "https://yts.lt/torrent/download/EB0A3A7C1F52468C44608A4061E2EE15EB33A02B",
          hash: "EB0A3A7C1F52468C44608A4061E2EE15EB33A02B",
          quality: "1080p",
          type: "web",
          seeds: 221,
          peers: 170,
          size: "1.14 GB",
          size_bytes: 1224065679,
          date_uploaded: "2019-12-06 04:11:35",
          date_uploaded_unix: 1575601895
        }
      ],
      date_uploaded: "2019-12-06 02:51:13",
      date_uploaded_unix: 1575597073
    },
    {
      id: 14484,
      url: "https://yts.lt/movie/hell-girl-2019",
      imdb_code: "tt5356670",
      title: "Hell Girl",
      title_english: "Hell Girl",
      title_long: "Hell Girl (2019)",
      slug: "hell-girl-2019",
      year: 2019,
      rating: 6.1,
      runtime: 81,
      genres: ["Horror"],
      summary:
        "A demonic creature not of this world impregnates a woman. 160 years later a team of ghost hunters must set aside their quick buck party mentality when they discover one of their team is the offspring of the entity haunting the place - and its true target. The offspring and her friends become uneasy allies with the ghost of the mother to destroy the demon and restore harmony.",
      description_full:
        "A demonic creature not of this world impregnates a woman. 160 years later a team of ghost hunters must set aside their quick buck party mentality when they discover one of their team is the offspring of the entity haunting the place - and its true target. The offspring and her friends become uneasy allies with the ghost of the mother to destroy the demon and restore harmony.",
      synopsis:
        "A demonic creature not of this world impregnates a woman. 160 years later a team of ghost hunters must set aside their quick buck party mentality when they discover one of their team is the offspring of the entity haunting the place - and its true target. The offspring and her friends become uneasy allies with the ghost of the mother to destroy the demon and restore harmony.",
      yt_trailer_code: "41BBHk6KpSA",
      language: "English",
      mpa_rating: "",
      background_image:
        "https://yts.lt/assets/images/movies/hell_girl_2019/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/hell_girl_2019/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/hell_girl_2019/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/hell_girl_2019/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/hell_girl_2019/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/E020B872EC6BA1503BEC8CF3B86106A4C0B21475",
          hash: "E020B872EC6BA1503BEC8CF3B86106A4C0B21475",
          quality: "720p",
          type: "bluray",
          seeds: 484,
          peers: 303,
          size: "732.38 MB",
          size_bytes: 767956091,
          date_uploaded: "2019-12-05 16:26:47",
          date_uploaded_unix: 1575559607
        },
        {
          url:
            "https://yts.lt/torrent/download/BA177E73A93ED0B0E6B3A2DF2384AF7091E50AE4",
          hash: "BA177E73A93ED0B0E6B3A2DF2384AF7091E50AE4",
          quality: "1080p",
          type: "bluray",
          seeds: 349,
          peers: 175,
          size: "1.28 GB",
          size_bytes: 1374389535,
          date_uploaded: "2019-12-05 18:30:38",
          date_uploaded_unix: 1575567038
        }
      ],
      date_uploaded: "2019-12-05 16:26:47",
      date_uploaded_unix: 1575559607
    },
    {
      id: 14482,
      url: "https://yts.lt/movie/godzilla-1954",
      imdb_code: "tt0047034",
      title: "Godzilla",
      title_english: "Godzilla",
      title_long: "Godzilla (1954)",
      slug: "godzilla-1954",
      year: 1954,
      rating: 7.6,
      runtime: 96,
      genres: ["Drama", "Horror", "Sci-Fi", "Thriller"],
      summary:
        "When seventeen vessels blow-up and sink nearby Odo Island, Professor Kyohei Yamane, his daughter Emiko Yamane and the marine Hideto Ogata head to the island to investigate. Soon they witness a giant monster called Gojira by the locals destroying the spot. Meanwhile Emiko meets her boyfriend, the secluded scientist Serizawa, and he makes she promise to keep a secret about his research with oxygen. She agrees and he discloses the lethal weapon Oxygen Destroyer that he had developed. When Gojira threatens Tokyo and other Japanese cities and the army and the navy are incapable to stop the monster, Emiko discloses Serizawa's secret to her lover Ogata. Now they want to convince Serizawa to use the Oxygen Destroyer to stop Gojira.",
      description_full:
        "When seventeen vessels blow-up and sink nearby Odo Island, Professor Kyohei Yamane, his daughter Emiko Yamane and the marine Hideto Ogata head to the island to investigate. Soon they witness a giant monster called Gojira by the locals destroying the spot. Meanwhile Emiko meets her boyfriend, the secluded scientist Serizawa, and he makes she promise to keep a secret about his research with oxygen. She agrees and he discloses the lethal weapon Oxygen Destroyer that he had developed. When Gojira threatens Tokyo and other Japanese cities and the army and the navy are incapable to stop the monster, Emiko discloses Serizawa's secret to her lover Ogata. Now they want to convince Serizawa to use the Oxygen Destroyer to stop Gojira.",
      synopsis:
        "When seventeen vessels blow-up and sink nearby Odo Island, Professor Kyohei Yamane, his daughter Emiko Yamane and the marine Hideto Ogata head to the island to investigate. Soon they witness a giant monster called Gojira by the locals destroying the spot. Meanwhile Emiko meets her boyfriend, the secluded scientist Serizawa, and he makes she promise to keep a secret about his research with oxygen. She agrees and he discloses the lethal weapon Oxygen Destroyer that he had developed. When Gojira threatens Tokyo and other Japanese cities and the army and the navy are incapable to stop the monster, Emiko discloses Serizawa's secret to her lover Ogata. Now they want to convince Serizawa to use the Oxygen Destroyer to stop Gojira.",
      yt_trailer_code: "VKrj1ymJzmo",
      language: "English",
      mpa_rating: "",
      background_image:
        "https://yts.lt/assets/images/movies/godzilla_1954/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/godzilla_1954/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/godzilla_1954/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/godzilla_1954/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/godzilla_1954/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/147878C144180736D33FEC5EB117462809F4D42E",
          hash: "147878C144180736D33FEC5EB117462809F4D42E",
          quality: "720p",
          type: "bluray",
          seeds: 91,
          peers: 23,
          size: "818.19 MB",
          size_bytes: 857934397,
          date_uploaded: "2019-12-05 13:58:28",
          date_uploaded_unix: 1575550708
        },
        {
          url:
            "https://yts.lt/torrent/download/81AAC92362CE8FCD69177DB89AD98E5B1679B756",
          hash: "81AAC92362CE8FCD69177DB89AD98E5B1679B756",
          quality: "1080p",
          type: "bluray",
          seeds: 172,
          peers: 51,
          size: "1.47 GB",
          size_bytes: 1578400481,
          date_uploaded: "2019-12-05 15:41:28",
          date_uploaded_unix: 1575556888
        }
      ],
      date_uploaded: "2019-12-05 13:58:28",
      date_uploaded_unix: 1575550708
    },
    {
      id: 14461,
      url: "https://yts.lt/movie/one-must-fall-2018",
      imdb_code: "tt8332808",
      title: "One Must Fall",
      title_english: "One Must Fall",
      title_long: "One Must Fall (2018)",
      slug: "one-must-fall-2018",
      year: 2018,
      rating: 8,
      runtime: 96,
      genres: ["Comedy", "Horror"],
      summary:
        "A horror-comedy slasher set in the 80's about a woman wrongfully fired from her office job and forced to take on a temporary job on a crime scene cleanup crew. With a maniacal serial killer on the loose leaving them lots of work, did he ever leave the scene of the crime?",
      description_full:
        "A horror-comedy slasher set in the 80's about a woman wrongfully fired from her office job and forced to take on a temporary job on a crime scene cleanup crew. With a maniacal serial killer on the loose leaving them lots of work, did he ever leave the scene of the crime?",
      synopsis:
        "A horror-comedy slasher set in the 80's about a woman wrongfully fired from her office job and forced to take on a temporary job on a crime scene cleanup crew. With a maniacal serial killer on the loose leaving them lots of work, did he ever leave the scene of the crime?",
      yt_trailer_code: "",
      language: "English",
      mpa_rating: "",
      background_image:
        "https://yts.lt/assets/images/movies/one_must_fall_2018/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/one_must_fall_2018/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/one_must_fall_2018/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/one_must_fall_2018/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/one_must_fall_2018/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/3C49CD7B7F26291EAC80238F02968EFE6AF42814",
          hash: "3C49CD7B7F26291EAC80238F02968EFE6AF42814",
          quality: "720p",
          type: "web",
          seeds: 272,
          peers: 59,
          size: "764.28 MB",
          size_bytes: 801405665,
          date_uploaded: "2019-12-03 19:21:37",
          date_uploaded_unix: 1575397297
        },
        {
          url:
            "https://yts.lt/torrent/download/1633838433769142747EA783AA16A05D8EBECBDA",
          hash: "1633838433769142747EA783AA16A05D8EBECBDA",
          quality: "1080p",
          type: "web",
          seeds: 239,
          peers: 91,
          size: "1.34 GB",
          size_bytes: 1438814044,
          date_uploaded: "2019-12-03 20:40:55",
          date_uploaded_unix: 1575402055
        }
      ],
      date_uploaded: "2019-12-03 19:21:37",
      date_uploaded_unix: 1575397297
    },
    {
      id: 14454,
      url: "https://yts.lt/movie/the-shasta-triangle-2019",
      imdb_code: "tt5153588",
      title: "The Shasta Triangle",
      title_english: "The Shasta Triangle",
      title_long: "The Shasta Triangle (2019)",
      slug: "the-shasta-triangle-2019",
      year: 2019,
      rating: 6.8,
      runtime: 0,
      genres: ["Fantasy", "Horror", "Sci-Fi", "Thriller"],
      summary:
        "A young woman returns to her hometown to uncover the truth about her father's disappearance. Deep in the woods, she and her childhood friends battle ancient and terrifying forces controlling the town.",
      description_full:
        "A young woman returns to her hometown to uncover the truth about her father's disappearance. Deep in the woods, she and her childhood friends battle ancient and terrifying forces controlling the town.",
      synopsis:
        "A young woman returns to her hometown to uncover the truth about her father's disappearance. Deep in the woods, she and her childhood friends battle ancient and terrifying forces controlling the town.",
      yt_trailer_code: "",
      language: "English",
      mpa_rating: "",
      background_image:
        "https://yts.lt/assets/images/movies/the_shasta_triangle_2019/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/the_shasta_triangle_2019/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/the_shasta_triangle_2019/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/the_shasta_triangle_2019/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/the_shasta_triangle_2019/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/2C19A8B1D28A233AAC892C4E0BA63039CC5A5A41",
          hash: "2C19A8B1D28A233AAC892C4E0BA63039CC5A5A41",
          quality: "720p",
          type: "web",
          seeds: 281,
          peers: 123,
          size: "657 MB",
          size_bytes: 688914432,
          date_uploaded: "2019-12-03 12:34:03",
          date_uploaded_unix: 1575372843
        },
        {
          url:
            "https://yts.lt/torrent/download/9BC118B7DF788E135931160DFABB5CE05780B1E1",
          hash: "9BC118B7DF788E135931160DFABB5CE05780B1E1",
          quality: "1080p",
          type: "web",
          seeds: 240,
          peers: 103,
          size: "1.16 GB",
          size_bytes: 1245540516,
          date_uploaded: "2019-12-03 13:38:08",
          date_uploaded_unix: 1575376688
        }
      ],
      date_uploaded: "2019-12-03 12:34:03",
      date_uploaded_unix: 1575372843
    },
    {
      id: 14453,
      url: "https://yts.lt/movie/creep-2004",
      imdb_code: "tt0381966",
      title: "Creep",
      title_english: "Creep",
      title_long: "Creep (2004)",
      slug: "creep-2004",
      year: 2004,
      rating: 5.6,
      runtime: 85,
      genres: ["Horror", "Mystery", "Thriller"],
      summary:
        "Heading home late one night after a party, Kate falls asleep while waiting for her train. She awakens to find herself trapped in the London underground, with all the doors locked for the evening. While being attacked by a co-worker who has followed her, a mysterious unseen creature drags him away and kills him. This begins a terrifying ordeal, as Kate and a young homeless couple are stalked through the dark tunnels by something dangerous with payback on its mind.",
      description_full:
        "Heading home late one night after a party, Kate falls asleep while waiting for her train. She awakens to find herself trapped in the London underground, with all the doors locked for the evening. While being attacked by a co-worker who has followed her, a mysterious unseen creature drags him away and kills him. This begins a terrifying ordeal, as Kate and a young homeless couple are stalked through the dark tunnels by something dangerous with payback on its mind.",
      synopsis:
        "Heading home late one night after a party, Kate falls asleep while waiting for her train. She awakens to find herself trapped in the London underground, with all the doors locked for the evening. While being attacked by a co-worker who has followed her, a mysterious unseen creature drags him away and kills him. This begins a terrifying ordeal, as Kate and a young homeless couple are stalked through the dark tunnels by something dangerous with payback on its mind.",
      yt_trailer_code: "QZUzM_p6a1k",
      language: "English",
      mpa_rating: "R",
      background_image:
        "https://yts.lt/assets/images/movies/creep_2004/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/creep_2004/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/creep_2004/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/creep_2004/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/creep_2004/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/A016EE298895487DFDB1D189B566703F726B597A",
          hash: "A016EE298895487DFDB1D189B566703F726B597A",
          quality: "720p",
          type: "web",
          seeds: 161,
          peers: 47,
          size: "738.94 MB",
          size_bytes: 774834749,
          date_uploaded: "2019-12-03 10:22:06",
          date_uploaded_unix: 1575364926
        },
        {
          url:
            "https://yts.lt/torrent/download/7E3F56AC80C100B474EB55324FDDA934A5A4394E",
          hash: "7E3F56AC80C100B474EB55324FDDA934A5A4394E",
          quality: "1080p",
          type: "web",
          seeds: 129,
          peers: 32,
          size: "1.32 GB",
          size_bytes: 1417339208,
          date_uploaded: "2019-12-03 11:59:13",
          date_uploaded_unix: 1575370753
        }
      ],
      date_uploaded: "2019-12-03 10:22:06",
      date_uploaded_unix: 1575364926
    },
    {
      id: 14447,
      url: "https://yts.lt/movie/baby-blood-1990",
      imdb_code: "tt0096871",
      title: "Baby Blood",
      title_english: "Baby Blood",
      title_long: "Baby Blood (1990)",
      slug: "baby-blood-1990",
      year: 1990,
      rating: 5.9,
      runtime: 88,
      genres: ["Horror"],
      summary:
        "A cruel circus owner beats and abuses his pregnant wife. One day the circus receives a leopard newly captured in Africa, but the animal soon dies. However, an evil creature that was inside the leopard bursts out of the animal's body, burrows into the wife's body and takes over her fetus. It soon starts demanding blood, and the woman goes searching for victims for her new \"baby.\"",
      description_full:
        "A cruel circus owner beats and abuses his pregnant wife. One day the circus receives a leopard newly captured in Africa, but the animal soon dies. However, an evil creature that was inside the leopard bursts out of the animal's body, burrows into the wife's body and takes over her fetus. It soon starts demanding blood, and the woman goes searching for victims for her new \"baby.\"",
      synopsis:
        "A cruel circus owner beats and abuses his pregnant wife. One day the circus receives a leopard newly captured in Africa, but the animal soon dies. However, an evil creature that was inside the leopard bursts out of the animal's body, burrows into the wife's body and takes over her fetus. It soon starts demanding blood, and the woman goes searching for victims for her new \"baby.\"",
      yt_trailer_code: "Um0zC5qnlbI",
      language: "English",
      mpa_rating: "R",
      background_image:
        "https://yts.lt/assets/images/movies/baby_blood_1990/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/baby_blood_1990/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/baby_blood_1990/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/baby_blood_1990/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/baby_blood_1990/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/F218F7BCC76F26CC6731F7AF3EE5FFD4200168C6",
          hash: "F218F7BCC76F26CC6731F7AF3EE5FFD4200168C6",
          quality: "720p",
          type: "bluray",
          seeds: 31,
          peers: 19,
          size: "807.53 MB",
          size_bytes: 846756577,
          date_uploaded: "2019-12-02 23:12:45",
          date_uploaded_unix: 1575324765
        },
        {
          url:
            "https://yts.lt/torrent/download/F9A3E41C85BFE6BCB6AD4171B7DAEBDEC634F7BD",
          hash: "F9A3E41C85BFE6BCB6AD4171B7DAEBDEC634F7BD",
          quality: "1080p",
          type: "bluray",
          seeds: 29,
          peers: 9,
          size: "1.4 GB",
          size_bytes: 1503238554,
          date_uploaded: "2019-12-03 01:18:57",
          date_uploaded_unix: 1575332337
        }
      ],
      date_uploaded: "2019-12-02 23:12:45",
      date_uploaded_unix: 1575324765
    },
    {
      id: 14438,
      url: "https://yts.lt/movie/the-golem-1920",
      imdb_code: "tt0011237",
      title: "The Golem",
      title_english: "The Golem",
      title_long: "The Golem (1920)",
      slug: "the-golem-1920",
      year: 1920,
      rating: 7.2,
      runtime: 85,
      genres: ["Fantasy", "Horror"],
      summary:
        "In 16th-century Prague, a rabbi creates the Golem - a giant creature made of clay. Using sorcery, he brings the creature to life in order to protect the Jews of Prague from persecution.",
      description_full:
        "In 16th-century Prague, a rabbi creates the Golem - a giant creature made of clay. Using sorcery, he brings the creature to life in order to protect the Jews of Prague from persecution.",
      synopsis:
        "In 16th-century Prague, a rabbi creates the Golem - a giant creature made of clay. Using sorcery, he brings the creature to life in order to protect the Jews of Prague from persecution.",
      yt_trailer_code: "",
      language: "English",
      mpa_rating: "",
      background_image:
        "https://yts.lt/assets/images/movies/the_golem_1920/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/the_golem_1920/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/the_golem_1920/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/the_golem_1920/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/the_golem_1920/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/6486B811C109632AEE3B421E4349B91B320088AD",
          hash: "6486B811C109632AEE3B421E4349B91B320088AD",
          quality: "720p",
          type: "bluray",
          seeds: 62,
          peers: 14,
          size: "678.64 MB",
          size_bytes: 711605617,
          date_uploaded: "2019-12-01 13:26:36",
          date_uploaded_unix: 1575203196
        },
        {
          url:
            "https://yts.lt/torrent/download/DA1A6E45014A212ABF703BAED08FC2CCBD0781FA",
          hash: "DA1A6E45014A212ABF703BAED08FC2CCBD0781FA",
          quality: "1080p",
          type: "bluray",
          seeds: 92,
          peers: 12,
          size: "1.19 GB",
          size_bytes: 1277752771,
          date_uploaded: "2019-12-01 14:33:14",
          date_uploaded_unix: 1575207194
        }
      ],
      date_uploaded: "2019-12-01 13:26:36",
      date_uploaded_unix: 1575203196
    },
    {
      id: 14424,
      url: "https://yts.lt/movie/ghost-story-1974",
      imdb_code: "tt0071791",
      title: "Ghost Story",
      title_english: "Ghost Story",
      title_long: "Ghost Story (1974)",
      slug: "ghost-story-1974",
      year: 1974,
      rating: 4.9,
      runtime: 89,
      genres: ["Horror"],
      summary:
        "Several old college friends converge at a mansion, ostensibly for a pleasant reunion. Larry Dann, the most easygoing of the bunch, comes to the conclusion that all is not well in the old dark house. For one thing, he's run across several people whom he's never met. For another, they all seem to be of a different time and place.",
      description_full:
        "Several old college friends converge at a mansion, ostensibly for a pleasant reunion. Larry Dann, the most easygoing of the bunch, comes to the conclusion that all is not well in the old dark house. For one thing, he's run across several people whom he's never met. For another, they all seem to be of a different time and place.",
      synopsis:
        "Several old college friends converge at a mansion, ostensibly for a pleasant reunion. Larry Dann, the most easygoing of the bunch, comes to the conclusion that all is not well in the old dark house. For one thing, he's run across several people whom he's never met. For another, they all seem to be of a different time and place.",
      yt_trailer_code: "ONxNYcSeyPE",
      language: "English",
      mpa_rating: "",
      background_image:
        "https://yts.lt/assets/images/movies/ghost_story_1974/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/ghost_story_1974/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/ghost_story_1974/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/ghost_story_1974/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/ghost_story_1974/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/55409DAA50D77F9A48AEB4695100308009C0B0BE",
          hash: "55409DAA50D77F9A48AEB4695100308009C0B0BE",
          quality: "720p",
          type: "bluray",
          seeds: 31,
          peers: 5,
          size: "749.39 MB",
          size_bytes: 785792369,
          date_uploaded: "2019-12-01 01:43:16",
          date_uploaded_unix: 1575160996
        },
        {
          url:
            "https://yts.lt/torrent/download/AC33A00146BB22E65D930218AF6BA0F172E96AD6",
          hash: "AC33A00146BB22E65D930218AF6BA0F172E96AD6",
          quality: "1080p",
          type: "bluray",
          seeds: 21,
          peers: 4,
          size: "1.34 GB",
          size_bytes: 1438814044,
          date_uploaded: "2019-12-01 03:19:12",
          date_uploaded_unix: 1575166752
        }
      ],
      date_uploaded: "2019-12-01 01:43:16",
      date_uploaded_unix: 1575160996
    },
    {
      id: 14419,
      url: "https://yts.lt/movie/demon-hole-2017",
      imdb_code: "tt4653818",
      title: "Demon Hole",
      title_english: "Demon Hole",
      title_long: "Demon Hole (2017)",
      slug: "demon-hole-2017",
      year: 2017,
      rating: 3.6,
      runtime: 81,
      genres: ["Comedy", "Horror"],
      summary:
        "A fracking crew drills on sacred Native American land unleashing an ancient demon. Six teens have to serve community service in the remote forest where the demon is lurking. They find themselves trapped in a realm of illusions with plenty of marijuana, an abandoned cabin, dark caves, endless woods, and temptation. There are only two ways out of these woods - succumb to the demon or die!",
      description_full:
        "A fracking crew drills on sacred Native American land unleashing an ancient demon. Six teens have to serve community service in the remote forest where the demon is lurking. They find themselves trapped in a realm of illusions with plenty of marijuana, an abandoned cabin, dark caves, endless woods, and temptation. There are only two ways out of these woods - succumb to the demon or die!",
      synopsis:
        "A fracking crew drills on sacred Native American land unleashing an ancient demon. Six teens have to serve community service in the remote forest where the demon is lurking. They find themselves trapped in a realm of illusions with plenty of marijuana, an abandoned cabin, dark caves, endless woods, and temptation. There are only two ways out of these woods - succumb to the demon or die!",
      yt_trailer_code: "",
      language: "English",
      mpa_rating: "",
      background_image:
        "https://yts.lt/assets/images/movies/demon_hole_2017/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/demon_hole_2017/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/demon_hole_2017/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/demon_hole_2017/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/demon_hole_2017/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/EE99562178FAC5C11FC9AF714DCFB04DDBE8F8FE",
          hash: "EE99562178FAC5C11FC9AF714DCFB04DDBE8F8FE",
          quality: "720p",
          type: "bluray",
          seeds: 63,
          peers: 20,
          size: "691.39 MB",
          size_bytes: 724974961,
          date_uploaded: "2019-11-29 20:28:45",
          date_uploaded_unix: 1575055725
        },
        {
          url:
            "https://yts.lt/torrent/download/1681277B384AB9A0BD5DB7C6E7A05596B6D2AD27",
          hash: "1681277B384AB9A0BD5DB7C6E7A05596B6D2AD27",
          quality: "1080p",
          type: "bluray",
          seeds: 57,
          peers: 17,
          size: "1.22 GB",
          size_bytes: 1309965025,
          date_uploaded: "2019-11-29 21:47:54",
          date_uploaded_unix: 1575060474
        }
      ],
      date_uploaded: "2019-11-29 20:28:45",
      date_uploaded_unix: 1575055725
    },
    {
      id: 14418,
      url: "https://yts.lt/movie/darlin-2019",
      imdb_code: "tt8396294",
      title: "Darlin'",
      title_english: "Darlin'",
      title_long: "Darlin' (2019)",
      slug: "darlin-2019",
      year: 2019,
      rating: 4.9,
      runtime: 100,
      genres: ["Horror", "Thriller"],
      summary:
        "Found at a Catholic hospital filthy and ferocious, feral teenager Darlin' is whisked off to a care home run by The Bishop and his obedient nuns, where she's to be rehabilitated into a \"good girl\" as an example of the miraculous work of the church. But Darlin' holds a secret darker than the \"sins\" she is threatened with, and she is not traveling alone. The Woman who raised her, equally fierce and feral, is ever present in the shadows of Darlin's psyche and is determined to come for her no matter who tries to get in her way.",
      description_full:
        "Found at a Catholic hospital filthy and ferocious, feral teenager Darlin' is whisked off to a care home run by The Bishop and his obedient nuns, where she's to be rehabilitated into a \"good girl\" as an example of the miraculous work of the church. But Darlin' holds a secret darker than the \"sins\" she is threatened with, and she is not traveling alone. The Woman who raised her, equally fierce and feral, is ever present in the shadows of Darlin's psyche and is determined to come for her no matter who tries to get in her way.",
      synopsis:
        "Found at a Catholic hospital filthy and ferocious, feral teenager Darlin' is whisked off to a care home run by The Bishop and his obedient nuns, where she's to be rehabilitated into a \"good girl\" as an example of the miraculous work of the church. But Darlin' holds a secret darker than the \"sins\" she is threatened with, and she is not traveling alone. The Woman who raised her, equally fierce and feral, is ever present in the shadows of Darlin's psyche and is determined to come for her no matter who tries to get in her way.",
      yt_trailer_code: "5pA8hd9WhLI",
      language: "English",
      mpa_rating: "",
      background_image:
        "https://yts.lt/assets/images/movies/darlin_2019/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/darlin_2019/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/darlin_2019/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/darlin_2019/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/darlin_2019/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/8A6E9CEF704542CDAB9CA6479AEFEC3DE77AB311",
          hash: "8A6E9CEF704542CDAB9CA6479AEFEC3DE77AB311",
          quality: "720p",
          type: "bluray",
          seeds: 134,
          peers: 63,
          size: "897.86 MB",
          size_bytes: 941474447,
          date_uploaded: "2019-11-29 17:39:25",
          date_uploaded_unix: 1575045565
        },
        {
          url:
            "https://yts.lt/torrent/download/7531D2BD871053DA913F7B9A25F4B6F088EF6A33",
          hash: "7531D2BD871053DA913F7B9A25F4B6F088EF6A33",
          quality: "1080p",
          type: "bluray",
          seeds: 75,
          peers: 49,
          size: "1.58 GB",
          size_bytes: 1696512082,
          date_uploaded: "2019-11-29 19:47:08",
          date_uploaded_unix: 1575053228
        }
      ],
      date_uploaded: "2019-11-29 17:39:25",
      date_uploaded_unix: 1575045565
    },
    {
      id: 14406,
      url: "https://yts.lt/movie/leaving-d-c-2012",
      imdb_code: "tt2647078",
      title: "Leaving D.C.",
      title_english: "Leaving D.C.",
      title_long: "Leaving D.C. (2012)",
      slug: "leaving-d-c-2012",
      year: 2012,
      rating: 6.1,
      runtime: 77,
      genres: ["Horror", "Mystery"],
      summary:
        "After 20 years of living in Washington, D.C., Mark Klein seeks much-needed solace by moving to the remote wilds of West Virginia. To ease his loneliness, he sends regular video updates to members of his OCD-support group back in the city. But Mark gradually realizes that despite his new, isolated setting, he may not be alone. From the endless woods surrounding his home, something else is watching.",
      description_full:
        "After 20 years of living in Washington, D.C., Mark Klein seeks much-needed solace by moving to the remote wilds of West Virginia. To ease his loneliness, he sends regular video updates to members of his OCD-support group back in the city. But Mark gradually realizes that despite his new, isolated setting, he may not be alone. From the endless woods surrounding his home, something else is watching.",
      synopsis:
        "After 20 years of living in Washington, D.C., Mark Klein seeks much-needed solace by moving to the remote wilds of West Virginia. To ease his loneliness, he sends regular video updates to members of his OCD-support group back in the city. But Mark gradually realizes that despite his new, isolated setting, he may not be alone. From the endless woods surrounding his home, something else is watching.",
      yt_trailer_code: "",
      language: "English",
      mpa_rating: "",
      background_image:
        "https://yts.lt/assets/images/movies/leaving_d_c_2012/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/leaving_d_c_2012/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/leaving_d_c_2012/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/leaving_d_c_2012/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/leaving_d_c_2012/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/2D9DD5DBC487192C7F2F5438124FCE0E38A4AA97",
          hash: "2D9DD5DBC487192C7F2F5438124FCE0E38A4AA97",
          quality: "720p",
          type: "web",
          seeds: 35,
          peers: 8,
          size: "683.18 MB",
          size_bytes: 716366152,
          date_uploaded: "2019-11-28 09:28:27",
          date_uploaded_unix: 1574929707
        },
        {
          url:
            "https://yts.lt/torrent/download/776A76C1934AF397D85173AD403B1CE22873AAF8",
          hash: "776A76C1934AF397D85173AD403B1CE22873AAF8",
          quality: "1080p",
          type: "web",
          seeds: 39,
          peers: 9,
          size: "1.2 GB",
          size_bytes: 1288490189,
          date_uploaded: "2019-11-28 10:46:06",
          date_uploaded_unix: 1574934366
        }
      ],
      date_uploaded: "2019-11-28 09:28:27",
      date_uploaded_unix: 1574929707
    },
    {
      id: 14399,
      url: "https://yts.lt/movie/the-kaos-brief-2017",
      imdb_code: "tt5575258",
      title: "The KAOS Brief",
      title_english: "The KAOS Brief",
      title_long: "The KAOS Brief (2017)",
      slug: "the-kaos-brief-2017",
      year: 2017,
      rating: 4.5,
      runtime: 75,
      genres: ["Horror", "Sci-Fi"],
      summary:
        "A secretive hacktivist group named KAOS seemingly hacks whatever program the viewer has been watching. The KAOS representative is dressed in a hip suit and is wearing a skull mask, it feels like the nightly news broadcast with a dark twist. The audience is told that what they are about to view is top secret video footage found hidden in the Edward Snowden files. As the footage begins, the audience is introduced to four high school seniors, twin brother and sister, Skylar and Dakota, and Skylar's boyfriend Corey and Dakota's boyfriend Tren. They are heading to the mountains to go camping for a long weekend. Skylar, being an aspiring vlogger with his own YouTube Channel, has enlisted his sister and their boyfriends to record the entire weekend on their mobile devices. After they notice strange lights in the sky, unexplainable events begin to unfold. From markings on their bodies, lost time, and mysterious visitations from sinister men in black suits. The tensions rise as they struggle ...",
      description_full:
        "A secretive hacktivist group named KAOS seemingly hacks whatever program the viewer has been watching. The KAOS representative is dressed in a hip suit and is wearing a skull mask, it feels like the nightly news broadcast with a dark twist. The audience is told that what they are about to view is top secret video footage found hidden in the Edward Snowden files. As the footage begins, the audience is introduced to four high school seniors, twin brother and sister, Skylar and Dakota, and Skylar's boyfriend Corey and Dakota's boyfriend Tren. They are heading to the mountains to go camping for a long weekend. Skylar, being an aspiring vlogger with his own YouTube Channel, has enlisted his sister and their boyfriends to record the entire weekend on their mobile devices. After they notice strange lights in the sky, unexplainable events begin to unfold. From markings on their bodies, lost time, and mysterious visitations from sinister men in black suits. The tensions rise as they struggle ...",
      synopsis:
        "A secretive hacktivist group named KAOS seemingly hacks whatever program the viewer has been watching. The KAOS representative is dressed in a hip suit and is wearing a skull mask, it feels like the nightly news broadcast with a dark twist. The audience is told that what they are about to view is top secret video footage found hidden in the Edward Snowden files. As the footage begins, the audience is introduced to four high school seniors, twin brother and sister, Skylar and Dakota, and Skylar's boyfriend Corey and Dakota's boyfriend Tren. They are heading to the mountains to go camping for a long weekend. Skylar, being an aspiring vlogger with his own YouTube Channel, has enlisted his sister and their boyfriends to record the entire weekend on their mobile devices. After they notice strange lights in the sky, unexplainable events begin to unfold. From markings on their bodies, lost time, and mysterious visitations from sinister men in black suits. The tensions rise as they struggle ...",
      yt_trailer_code: "YLAdRGBY39c",
      language: "English",
      mpa_rating: "",
      background_image:
        "https://yts.lt/assets/images/movies/the_kaos_brief_2017/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/the_kaos_brief_2017/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/the_kaos_brief_2017/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/the_kaos_brief_2017/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/the_kaos_brief_2017/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/47793C366BF3625305658E77923B5F2B1352145C",
          hash: "47793C366BF3625305658E77923B5F2B1352145C",
          quality: "720p",
          type: "web",
          seeds: 27,
          peers: 8,
          size: "667.37 MB",
          size_bytes: 699788165,
          date_uploaded: "2019-11-29 12:03:49",
          date_uploaded_unix: 1575025429
        },
        {
          url:
            "https://yts.lt/torrent/download/95EBB2047C322E0512F1951BE88F0388BF944937",
          hash: "95EBB2047C322E0512F1951BE88F0388BF944937",
          quality: "1080p",
          type: "web",
          seeds: 22,
          peers: 5,
          size: "1.18 GB",
          size_bytes: 1267015352,
          date_uploaded: "2019-11-29 13:30:39",
          date_uploaded_unix: 1575030639
        }
      ],
      date_uploaded: "2019-11-29 12:03:49",
      date_uploaded_unix: 1575025429
    },
    {
      id: 14398,
      url: "https://yts.lt/movie/anacondas-trail-of-blood-2009",
      imdb_code: "tt1150934",
      title: "Anacondas: Trail of Blood",
      title_english: "Anacondas: Trail of Blood",
      title_long: "Anacondas: Trail of Blood (2009)",
      slug: "anacondas-trail-of-blood-2009",
      year: 2009,
      rating: 3,
      runtime: 89,
      genres: ["Action", "Adventure", "Horror", "Sci-Fi", "Thriller"],
      summary:
        "Picking up immediately where Anaconda 3 left off, herpetologist Amanda Hayes finally learns her employer Murdoch's true colors when he hires a doctor to harvest a fresh supply of blood orchids to experiment with the regenerative nectar on a baby snake in order to seek treatment for his own terminal illness. Amanda is forced to secretly bring together another team of scientists whom face off against a heavily armed squad of Murdoch's men to steal the coveted orchids before the killer Anaconda hunts both parties down.",
      description_full:
        "Picking up immediately where Anaconda 3 left off, herpetologist Amanda Hayes finally learns her employer Murdoch's true colors when he hires a doctor to harvest a fresh supply of blood orchids to experiment with the regenerative nectar on a baby snake in order to seek treatment for his own terminal illness. Amanda is forced to secretly bring together another team of scientists whom face off against a heavily armed squad of Murdoch's men to steal the coveted orchids before the killer Anaconda hunts both parties down.",
      synopsis:
        "Picking up immediately where Anaconda 3 left off, herpetologist Amanda Hayes finally learns her employer Murdoch's true colors when he hires a doctor to harvest a fresh supply of blood orchids to experiment with the regenerative nectar on a baby snake in order to seek treatment for his own terminal illness. Amanda is forced to secretly bring together another team of scientists whom face off against a heavily armed squad of Murdoch's men to steal the coveted orchids before the killer Anaconda hunts both parties down.",
      yt_trailer_code: "QeNnOMn80K4",
      language: "English",
      mpa_rating: "R",
      background_image:
        "https://yts.lt/assets/images/movies/anacondas_trail_of_blood_2009/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/anacondas_trail_of_blood_2009/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/anacondas_trail_of_blood_2009/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/anacondas_trail_of_blood_2009/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/anacondas_trail_of_blood_2009/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/EEB23C9C3EDB7BDF6EF1A1C6361E890E4EC088BF",
          hash: "EEB23C9C3EDB7BDF6EF1A1C6361E890E4EC088BF",
          quality: "720p",
          type: "bluray",
          seeds: 92,
          peers: 22,
          size: "797.77 MB",
          size_bytes: 836522476,
          date_uploaded: "2019-11-29 09:36:36",
          date_uploaded_unix: 1575016596
        },
        {
          url:
            "https://yts.lt/torrent/download/4508A80BBE7445508A2807C2AC52B89C875B96AD",
          hash: "4508A80BBE7445508A2807C2AC52B89C875B96AD",
          quality: "1080p",
          type: "bluray",
          seeds: 94,
          peers: 35,
          size: "1.4 GB",
          size_bytes: 1503238554,
          date_uploaded: "2019-11-29 11:17:04",
          date_uploaded_unix: 1575022624
        }
      ],
      date_uploaded: "2019-11-29 09:36:36",
      date_uploaded_unix: 1575016596
    },
    {
      id: 14397,
      url: "https://yts.lt/movie/anaconda-3-offspring-2008",
      imdb_code: "tt1137996",
      title: "Anaconda 3: Offspring",
      title_english: "Anaconda 3: Offspring",
      title_long: "Anaconda 3: Offspring (2008)",
      slug: "anaconda-3-offspring-2008",
      year: 2008,
      rating: 2.7,
      runtime: 91,
      genres: ["Action", "Adventure", "Horror", "Sci-Fi", "Thriller"],
      summary:
        "Cancer-terminal tycoon Peter Murdoch's secret Wexel Hall Pharmaceuticals lab has developed a blood orchid extract cure. To examine why it works optimally in snakes, they also bread a super-anaconda strain. But the original pair escapes, leaving a bloody trail of corpses. Murdoch runs, instructing his staff to clean up. They keep failing and being eaten like unsuspecting locals, some alive, even after enlisting ruthless big game hunter Hammett. The fast-growing pregnant monster sheds its skin, thus disabling the only tracking device.",
      description_full:
        "Cancer-terminal tycoon Peter Murdoch's secret Wexel Hall Pharmaceuticals lab has developed a blood orchid extract cure. To examine why it works optimally in snakes, they also bread a super-anaconda strain. But the original pair escapes, leaving a bloody trail of corpses. Murdoch runs, instructing his staff to clean up. They keep failing and being eaten like unsuspecting locals, some alive, even after enlisting ruthless big game hunter Hammett. The fast-growing pregnant monster sheds its skin, thus disabling the only tracking device.",
      synopsis:
        "Cancer-terminal tycoon Peter Murdoch's secret Wexel Hall Pharmaceuticals lab has developed a blood orchid extract cure. To examine why it works optimally in snakes, they also bread a super-anaconda strain. But the original pair escapes, leaving a bloody trail of corpses. Murdoch runs, instructing his staff to clean up. They keep failing and being eaten like unsuspecting locals, some alive, even after enlisting ruthless big game hunter Hammett. The fast-growing pregnant monster sheds its skin, thus disabling the only tracking device.",
      yt_trailer_code: "56v3LxpSZK0",
      language: "English",
      mpa_rating: "R",
      background_image:
        "https://yts.lt/assets/images/movies/anaconda_3_offspring_2008/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/anaconda_3_offspring_2008/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/anaconda_3_offspring_2008/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/anaconda_3_offspring_2008/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/anaconda_3_offspring_2008/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/5631747A70CC8323530E562C265E19F955BC97E2",
          hash: "5631747A70CC8323530E562C265E19F955BC97E2",
          quality: "720p",
          type: "bluray",
          seeds: 83,
          peers: 21,
          size: "816.15 MB",
          size_bytes: 855795302,
          date_uploaded: "2019-11-28 06:34:33",
          date_uploaded_unix: 1574919273
        },
        {
          url:
            "https://yts.lt/torrent/download/AEAA9FE7531AF9BD3CCAD205F7B730447C556DBC",
          hash: "AEAA9FE7531AF9BD3CCAD205F7B730447C556DBC",
          quality: "1080p",
          type: "bluray",
          seeds: 88,
          peers: 21,
          size: "1.43 GB",
          size_bytes: 1535450808,
          date_uploaded: "2019-11-28 08:22:57",
          date_uploaded_unix: 1574925777
        }
      ],
      date_uploaded: "2019-11-28 06:34:33",
      date_uploaded_unix: 1574919273
    },
    {
      id: 14392,
      url: "https://yts.lt/movie/midnighters-2017",
      imdb_code: "tt5737582",
      title: "Midnighters",
      title_english: "Midnighters",
      title_long: "Midnighters (2017)",
      slug: "midnighters-2017",
      year: 2017,
      rating: 5.3,
      runtime: 94,
      genres: ["Horror", "Thriller"],
      summary:
        "Midnight, New Year's Eve: when all the hopes of new beginnings come to life - except for Lindsey and Jeff Pittman, whose strained marriage faces the ultimate test after they cover up a terrible crime and find themselves entangled in a Hitchcockian web of deceit and madness.",
      description_full:
        "Midnight, New Year's Eve: when all the hopes of new beginnings come to life - except for Lindsey and Jeff Pittman, whose strained marriage faces the ultimate test after they cover up a terrible crime and find themselves entangled in a Hitchcockian web of deceit and madness.",
      synopsis:
        "Midnight, New Year's Eve: when all the hopes of new beginnings come to life - except for Lindsey and Jeff Pittman, whose strained marriage faces the ultimate test after they cover up a terrible crime and find themselves entangled in a Hitchcockian web of deceit and madness.",
      yt_trailer_code: "L9vMvpn9P40",
      language: "English",
      mpa_rating: "",
      background_image:
        "https://yts.lt/assets/images/movies/midnighters_2017/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/midnighters_2017/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/midnighters_2017/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/midnighters_2017/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/midnighters_2017/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/D17BD3CBDE5F38F26125D91DBA48BE77B5AD620E",
          hash: "D17BD3CBDE5F38F26125D91DBA48BE77B5AD620E",
          quality: "720p",
          type: "bluray",
          seeds: 85,
          peers: 17,
          size: "848.94 MB",
          size_bytes: 890178109,
          date_uploaded: "2019-11-27 14:52:02",
          date_uploaded_unix: 1574862722
        },
        {
          url:
            "https://yts.lt/torrent/download/F6D2F05ED2BB9C667FD90879C4311F16212602EF",
          hash: "F6D2F05ED2BB9C667FD90879C4311F16212602EF",
          quality: "1080p",
          type: "bluray",
          seeds: 68,
          peers: 15,
          size: "1.48 GB",
          size_bytes: 1589137900,
          date_uploaded: "2019-11-27 16:33:22",
          date_uploaded_unix: 1574868802
        }
      ],
      date_uploaded: "2019-11-27 14:52:02",
      date_uploaded_unix: 1574862722
    },
    {
      id: 14387,
      url: "https://yts.lt/movie/the-necromancer-2018",
      imdb_code: "tt7240478",
      title: "The Necromancer",
      title_english: "The Necromancer",
      title_long: "The Necromancer (2018)",
      slug: "the-necromancer-2018",
      year: 2018,
      rating: 2.6,
      runtime: 88,
      genres: ["Horror"],
      summary:
        "When a group of soldiers decide to flee from the Napoleonic Wars, their journey home takes them through the Black Forest, leading them to a an ancient evil and a fight for their lives.",
      description_full:
        "When a group of soldiers decide to flee from the Napoleonic Wars, their journey home takes them through the Black Forest, leading them to a an ancient evil and a fight for their lives.",
      synopsis:
        "When a group of soldiers decide to flee from the Napoleonic Wars, their journey home takes them through the Black Forest, leading them to a an ancient evil and a fight for their lives.",
      yt_trailer_code: "V_ndR_gR_Og",
      language: "English",
      mpa_rating: "",
      background_image:
        "https://yts.lt/assets/images/movies/the_necromancer_2018/background.jpg",
      background_image_original:
        "https://yts.lt/assets/images/movies/the_necromancer_2018/background.jpg",
      small_cover_image:
        "https://yts.lt/assets/images/movies/the_necromancer_2018/small-cover.jpg",
      medium_cover_image:
        "https://yts.lt/assets/images/movies/the_necromancer_2018/medium-cover.jpg",
      large_cover_image:
        "https://yts.lt/assets/images/movies/the_necromancer_2018/large-cover.jpg",
      state: "ok",
      source:
        "https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      torrents: [
        {
          url:
            "https://yts.lt/torrent/download/D5BA9D741A25ADCA49DCDD085F75F353FFF0129B",
          hash: "D5BA9D741A25ADCA49DCDD085F75F353FFF0129B",
          quality: "720p",
          type: "web",
          seeds: 43,
          peers: 17,
          size: "785.6 MB",
          size_bytes: 823761306,
          date_uploaded: "2019-11-27 18:08:24",
          date_uploaded_unix: 1574874504
        },
        {
          url:
            "https://yts.lt/torrent/download/597F2E9F5CBDC3585A1EC0268ECC5E9EC366C82D",
          hash: "597F2E9F5CBDC3585A1EC0268ECC5E9EC366C82D",
          quality: "1080p",
          type: "web",
          seeds: 43,
          peers: 8,
          size: "1.38 GB",
          size_bytes: 1481763717,
          date_uploaded: "2019-11-27 19:42:09",
          date_uploaded_unix: 1574880129
        }
      ],
      date_uploaded: "2019-11-27 18:08:24",
      date_uploaded_unix: 1574874504
    }
  ]
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("app")
);
