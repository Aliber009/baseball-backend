const express = require('express');

const allstarfullRoute = require('./allstarfull.route');
const appearancesRoute = require('./appearances.route');
const awardsManagersRoute = require('./awardsManagers.route');
const awardsPlayersRoute = require('./awardsPlayers.route');
const awardsShareManagersRoute = require('./awardsShareManagers.route');
const awardsSharePlayersRoute = require('./awardsSharePlayers.route');
const battingRoute = require('./batting.route');
const battingPostRoute = require('./battingPost.route');
const collegePlayingRoute = require('./collegePlaying.route');
const fieldingRoute = require('./fielding.route');
const fieldingOFRoute = require('./fieldingOF.route');
const fieldingOFsplitRoute = require('./fieldingOFsplit.route');
const fieldingPostRoute = require('./fieldingPost.route');
const hallOfFameRoute = require('./hallOfFame.route');
const homegamesRoute = require('./homegames.route');
const managersRoute = require('./managers.route');
const managersHalfRoute = require('./managersHalf.route');
const peopleRoute = require('./people.route');
const pitchingRoute = require('./pitching.route');
const pitchingPostRoute = require('./pitchingPost.route');
const salariesRoute = require('./salaries.route');
const schoolsRoute = require('./schools.route');
const seriesPostRoute = require('./seriesPost.route');
const teamsRoute = require('./teams.route');
const teamsHalfRoute = require('./teamsHalf.route');

const router = express.Router();

const defaultRoutes = [
   {
    path: '/allstarfull',
    route: allstarfullRoute,
   },
   {
    path: '/appearances',
    route: appearancesRoute,
   },
   {
    path: '/awardsManagers',
    route: awardsManagersRoute,
   },
   {
    path: '/awardsPlayers',
    route: awardsPlayersRoute,
   },
   {
    path: '/awardsShareManagers',
    route: awardsShareManagersRoute,
   },
   {
    path: '/awardsSharePlayers',
    route: awardsSharePlayersRoute,
   },
   {
    path: '/batting',
    route: battingRoute,
   },
   {
    path: '/battingPost',
    route: battingPostRoute,
   },
   {
    path: '/collegePlaying',
    route: collegePlayingRoute,
   },
   {
    path: '/fielding',
    route: fieldingRoute,
   },
   {
    path: '/fieldingOF',
    route: fieldingOFRoute,
   }, 
   {
    path: '/fieldingOFsplit',
    route: fieldingOFsplitRoute,
   },
   {
    path: '/fieldingPost',
    route: fieldingPostRoute,
   },
   {
    path: '/hallOfFame',
    route: hallOfFameRoute,
   },   
   {
    path: '/homegames',
    route: homegamesRoute,
   },
   {
    path: '/managers',
    route: managersRoute,
   }, 
   {
    path: '/managersHalf',
    route: managersHalfRoute,
   },   
   {
    path: '/people',
    route: peopleRoute,
   },
   {
    path: '/pitching',
    route: pitchingRoute,
   },
   {
    path: '/pitchingPost',
    route: pitchingPostRoute,
   },
   {
    path: '/salaries',
    route: salariesRoute,
   },
   {
    path: '/schools',
    route: schoolsRoute,
   },
   {
    path: '/seriesPost',
    route: seriesPostRoute,
   },
   {
    path: '/teams',
    route: teamsRoute,
   },
   {
    path: '/teamsHalf',
    route: teamsHalfRoute,
   }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});



module.exports = router;
