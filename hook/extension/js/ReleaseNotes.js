var releaseNotes = [{
    version: '3.10.1',
    notes: [
        "Fix HR info in other athlete's activities don't make sense with user max/min HR.",
    ]
}, {
    version: '3.10.0',
    notes: [
        "Added Hidden/Beta feature section.",
        "Added Relive.cc as Hidden/Beta feature.",
    ]
}, {
    version: '3.9.1',
    notes: [
        "Fix pace display glitch in athlete summary",
    ]
}, {
    version: '3.9.0',
    notes: [
        "Now up to 50 zones can be defined in zones settings for each data type: speed, pace, cadence, heartrate, power, grade, ...",
        "Added full time average speed based on elapsed time.",
        "Extended stats charts refresh ! Migration to  Chart.js 2.0 done :)"
    ]
}, {
    version: '3.8.1',
    notes: [
        "HotFixing best splits",
    ]
}, {
    version: '3.8.0',
    notes: [
        "Added cycling/running distance target graph into year progression graph. Go to Common Settings and search for Year progression targets for 2016 to setup your targets.",
        "Added Weighted Avg Power field in activity summary panel",
        "Added Watts Per Kilograms field in activity summary panel",
        "Fixed a rare case where extended stats couldn't open themselve",
        "Various improvements",
    ]
}, {
    version: '3.7.0',
    notes: [
        "Strongly improved estimated ",
        "weighted / normalized power for non power sensor users. Estimated weighted power is now accurate for moneyless cyclists :p.",
        "Re-highlight best split feature. Some of the users were not aware this key feature ;)",
        "Various improvements",
        "Fixed some of display gitches segments list on cycling activity pages: columns could exceed the size of the segments list table.",
        "Fixed weighted / normalized power for some users having power sensor. An element of calculation of the method specified by Andy R. Coggan was well considered but partially previously.",
    ]
}, {
    version: '3.6.0',
    notes: [
        "Added  %rank next to rank labels in segments list on cycling activity pages. Quick view on where you're ranked!",
        "Added back jonathanokeeffe segment details on segment pages",
        "Added back veloviewer segment details on segment pages",
        "Fixed weather maps initialised with no maps. (Available on cycling activities",
        "Fixed Last 30 days comparaison chart in year progression stats to get the end of each day, rather than the beginning. This avoids the issue where activities from today are not included in the graph",
        "Fixed not displayed Distance last year comparaison chart in year progression stats for some people",

    ]
}, {
    version: '3.5.1',
    notes: [
        "HotFixed disappearance of 'My year progressions to current month / day' (My Profile page)",
    ]
}, {
    version: '3.5.0',
    notes: [
        "Globally improved segment time comparaison for cycling activities.",
        "Fixed segment time comparaison '-0s' when activity beats year's record on a segment",
        "Fixed segment time comparaison '-0s' when the year record beats global previous record",
        "Removed useless stravistix highlight feature. It's not a feature... it's not a bug... it's remove ;)",
        "Invisible project improvements (such as gulp task runner Implementation)",
    ]
}, {
    version: '3.4.0',
    notes: [
        "Updated colored  rank position in segments efforts list (on a cycling activity page)",
        "Fixed rank percentage display problem on segment pages",
        "Fixed nearby segments vanished on segment pages",
        "Fixed time comparaison flickering in segments efforts list (on a cycling activity page)",
        "Option page technical improvements",
    ]
}, {
    version: '3.3.1',
    notes: [
        "Introducing new year progressions charts: Distance last year and Distance last 30d (Go to My Profile)",
        "Fix cadence time on segments efforts (global activity value was shown).",
        "Integrating new logo design by paulinevial.fr",
        "Minors fixes",
    ]
}, {
    version: '3.2.3',
    notes: [
        "Disable stravistix on new strava store",
        "Minors improvements",
    ]
}, {
    version: '3.2.2',
    notes: [
        "Hotfix Wrong running climbing pace on extended panel",
    ]
}, {
    version: '3.2.1',
    notes: [
        "Hotfix Hide activities under distance errors on others languages than EN/FR",
        "Hotfix Wrong climbing pace running on summary panel",
    ]
}, {
    version: '3.2.0',
    notes: [
        "Improved performance on extended activity stats processing. The page should load faster since computation is now done through a separate thread/webworker.",
        "Added extended stats for runners: climbing/descending distance (inside grade section of extended stats panel). Cyclists already have this...",
        "Added option to hide the Pos. column on the segments table (in activities).",
        "Added option to activate temperature by default on running activities.",
        "Added option to mute small distance activities in dashboard feed: Just enter cycling/running distance at which activities are displayed",
        "Fixed miles/km ratio not applied in activities summary (My profile page)",
    ]
}, {
    version: '3.1.1',
    notes: [
        "Added climb, flat & downhill distance for cyclists in extended stats (grade panel)",
        "Added average W/Kg in power extended stats",
        "Added option to get running cadence graph automatically enabled in running activity",
        "Improved W/KG computations: bike weight has been removed from KG. Only rider weight is considered.",
        "Fixed performance issues on segment time comparison. The feature has been re-enable by default.",
        "Fixed Ascent speed stats VAM mismatch with strava. Note that sscent speed stats are no longer displayed on segment efforts stats",
        "Hot fixed weighted power all same on efforts stats. Only cyclists having a power meter were touched by this bug.",
    ]
}, {
    version: '3.0.1',
    notes: [
        "HotFix: Running cadence were mutiplied twice in graph/table on every segment effort stats button click (with both legs option enabled)",
    ]
}, {
    version: '3.0.0',
    notes: [
        "Extended stats on segment efforts added !! Go to an cycling/running activity, click on a segment effort, then click show extended stats button",
        "Extended stats panel relooking",
    ]
}, {
    version: '2.2.2',
    notes: [
        "FIX: Javascript syntax error while processing activities extended stats.",
    ]
}, {
    version: '2.2.1',
    notes: [
        "Added option to count Virtual Rides (e.g. Zwift rides) into athlete yearly progression.",
        "Improving altitude smoothness for elevation and ascent speed extended stats, also in best splits",
        "FIX: Yearly Progression: wrong counting of activities",
        "FIX: Extended stats may not displayed on some activities: Error in local storage cache management.",
        "FIX: Extended stats may not displayed on some trainer rides",
    ]
}, {
    version: '2.1.1',
    notes: [
        "FIX: Not getting extension stats on big ride (>300km)",
    ]
}, {
    version: '2.1.0',
    notes: [
        "Added new extended statistics for cyclists: Ascent speed.",
        "Best splits can be highlighted from the higher elevation gain or drop",
        "Best splits can be highlighted from the higher heartrate rise or drop",
        "Best splits can be also user defined on seconds from now",
        "Performance enhanced on best splits computation. A caching system has been implemented to reduce computation when cache exist.",
        "Improved elevation data accuracy while computing extended statistics. Elevation data smoothed using low pass filter.",
        "Heart rate extended statitics are now computed while moving from now.",
        "Display now weather with units preferences. Set your temperature and wind speed unit in settings.",
        "Quartiles and median are now computed on weighted percentiles: This will better highlight your efforts at those values.",
        "FIX: All best splits averages were computed on sample counts. May cause problems if sampling was smart. It's now computed using using time or distance.",
        "FIX: Highlighted power best splits map points might be wrong.",
        "FIX: Extended stats display button on turbos activities may not appear",
    ]
}, {
    version: '2.0.1',
    notes: [
        "HotFix: Null powers are computed in power best splits. They were removed from computation before.",
    ]
}, {
    version: '2.0.0',
    notes: [
        "Best splits on cycling activities. Load a cycling activities. Under elevation chart click Best Splits (Thanks Tomasz Terlecki for the feature)",
        "Fix Pressing multiple times on the current tab adds ",
        "View in Google Maps multiple times.",
    ]
}, {
    version: '1.2.1',
    notes: [
        "Fix Year progression chart icon which may invisible",
    ]
}, {
    version: '1.2.0',
    notes: [
        "Added Year progression chart on Distance, Activity count, Elevation and Time (credit https://github.com/tazmanska)",
    ]
}, {
    version: '1.1.0',
    notes: [
        "User preference for default Google Maps layer type",
        "Search for options in common settings",
        "Fix undefined errors in year progression",
    ]
}, {
    version: '1.0.2',
    notes: [
        "Fix map display problem while cropping ride. Google maps API was loaded twice.",
    ]
}, {
    version: '1.0.1',
    notes: [
        "Google Maps revived inside activities pages",
        "Add on/off extension settings for the segment time comparison on activities pages",
        "Segment time comparison for QOM (Womens) on activities pages",
        "Fix when segment time comparison may no be displayed",
        "Fix when No longer seeing extended stats on turbo activities",
        "Fix when Move ratio not being displayed (eg: Running race)",
    ]
}, {
    version: '0.8.0',
    notes: [
        "Add Ascent speed statistics to extended elevation data stats: Average, first quartile, median and third quartile ascent speed",
        "Fixing bug when exporting another riders segment as a virtual partner.",
    ]
}, {
    version: '0.7.9',
    notes: [
        "Fixing standard deviation cadence computed and displayed for cycling.",
        "Add standard deviation cadence to extended data popup panel",
    ]
}, {
    version: '0.7.8',
    notes: [
        "Add Pedaling time to summary panel",
        "Add median cadence to summary panel",
        "Various bug fixes",
    ]
}, {
    version: '0.7.7',
    notes: [
        "Remove OSM remotes maps links on activities",
        "Add flyby link in dashboard feed",
        "Fix extended data compute error on Workouts",
    ]
}, {
    version: '0.7.6',
    notes: [
        "Fix (again) Year progress sometimes not visible if strava language is not english (tazmanska credits).",
        "Segments time comparaison with KOM and previous PR inside activity page (tazmanska credits).",
    ]
}, {
    version: '0.7.5',
    notes: [
        "Hotfix: Year progress sometimes not visible",
    ]
}, {
    version: '0.7.4',
    notes: [
        "Year progressions to current month/day panel. See your progress for each beginning of year to current month and day. Go to My profile to see feature",
        "Veloviewer Segments Comparaison remote link into activities",
    ]
}, {
    version: '0.7.3',
    notes: [
        "NEW extended data: Elevation stats, graph and table. Elevation zones customizable in settings.",
        "Bug fixes",
    ]
}, {
    version: '0.7.2',
    notes: [
        "Improve weather accuracy",
    ]
}, {
    version: '0.7.1',
    notes: [
        "Hotfix: Remove display stravistix chrome tab on update (http://thomaschampagne.github.io/stravistix)",
    ]
}, {
    version: '0.7.0',
    notes: [
        "Added weather for cycling activities. Include wind, temp, clouds and humidity. Running coming soon.",
        "Added 75% speed/pace and average climbing speed to summary panel (under 'show extended statistics' button)",
    ]
}, {
    version: '0.6.4',
    notes: [
        "Provide average speed climbing, flat, downhill for extended grade data",
        "New extended data summary panel in actitivies (below show extended statistics button)",
    ]
}, {
    version: '0.6.3',
    notes: [
        "Bug fixes and improvements",
    ]
}, {
    version: '0.6.2',
    notes: [
        "Exporting segment effort as Virtual Partner for your GPS through activity page.",
    ]
}, {
    version: '0.6.1',
    notes: [
        "OpenStreetMap flipper for activities (from Veloviewer)",
    ]
}, {
    version: '0.6.0',
    notes: [
        "Customized zones for each Xtended data",
        "Add TRIMP/Hour",
        "Change extension name from StravPlus to StravistiX",
        "Bugs fix",
    ]
}, {
    version: '0.5.5',
    notes: [
        "New extended data: Grade %",
        "Running cadence for one or two legs (option)",
        "Fixed wrong TRIMP calculation. Using 'exp' instead of 'pow'...",
        "Fixed Rank=NaN% if athlete had no time in segment",
        "Fixed activity data load on manual activities",
        "Shop menu is always shown now",
        "Extended data graph title updated: units in minutes",
    ]
}, {
    version: '0.5.4',
    notes: [
        "Runners can view avanced pace data",
        "Major bugs fixed from 0.5.3",
    ]
}, {
    version: '0.5.3',
    notes: [
        "Fix clear cache on extension update/install. This caused extension crash when using old cache with new extension.",
        "Add export of your activities as TCX.",
    ]
}, {
    version: '0.5.2',
    notes: [
        "HotFix for 0.5.1: some dependencies could not be loaded resulting in extension crash.",
    ]
}, {
    version: '0.5.1',
    notes: [
        "Add extended stats for running",
        "Extended stats now includes: Speed, Power, HR and Cadence graph distribution + table result on 15 zones",
        "New extended stats panel design for running and cycling",
    ]
}, {
    version: '0.4.10',
    notes: [
        "Add share extension links to twitter",
    ]
}, {
    version: '0.4.9',
    notes: [
        "Add Segment Details remote link on segment page",
    ]
}, {
    version: '0.4.8',
    notes: [
        "Add Surface Area of your activities (raceshape EREA)",
        "Normalized Power (TrainingPeaks trademarked term) removed. Profit to Weighted Power data now",
        "Intensity Factor (TrainingPeaks trademarked term) removed. Profit to Punch Factor data now",
        "Prepare better veloviewer.com integration (waiting for veloviewer.com side now...)",
        "Bugs fixes",
    ]
}, {
    version: '0.4.7',
    notes: [
        "Inform runners about: Running Extended Data Features(like current cycling features) will be very soon available in version 0.5.x",
    ]
}, {
    version: '0.4.6',
    notes: [
        "Activity flash code in activities for Strava mobile App",
        "Fix bug wheere miles displayed even if metrics chosen in activities",
    ]
}, {
    version: '0.4.5',
    notes: [
        "Fast fix from version 0.4.4. Sry for this...",
    ]
}, {
    version: '0.4.4',
    notes: [
        "Fix unable to remove FTP value in options page",
        "Improving code to save time later... Invisible on your screen :)",
    ]
}, {
    version: '0.4.3',
    notes: [
        "Minor fixes",
    ]
}, {
    version: '0.4.2',
    notes: [
        "Minor fixes",
    ]
}, {
    version: '0.4.1',
    notes: [
        "Options GUI look better especially on checkboxes",
        "Minor fixes",
    ]
}, {
    version: '0.4.0',
    notes: [
        "Heart Rate Reserve zones distribution now customizable",
        "New options UI made with angularjs and bootstrap",
        "Fix Unable to fetch athlete bike odo",
        "Others tiny fixes",
    ]
}, {
    version: '0.3.9',
    notes: [
        "Fix kom-map to achievement-map",
    ]
}, {
    version: '0.3.8',
    notes: [
        "Fix nearby segment icons away",
    ]
}, {
    version: '0.3.7',
    notes: [
        "Add nearby cycling+running segments added on segment page",
        "Add average pace in cycling activities",
        "Add lower quartile power, median power and upper quartile power in cycling activities",
        "Fixed: Unable to see StravistiX icon menu when highlight option is on.",
    ]
}, {
    version: '0.3.6',
    notes: [
        "Cadence/Cadence extended data is now computed while moving.",
        "Fix wrong Harmonized Power for riders with power meter.",
        "Others minor bug fixes",
    ]
}, {
    version: '0.3.2 to 0.3.5',
    notes: [
        "Fixed display text glitches on some pages",
        "StravistiX menu icon orange",
        "Others minor bug fixes",
    ]
}, {
    version: '0.3.1',
    notes: [
        "Big changes in extension core: Ext recoded from scratch in order to fix memory leaks from v0.2.0 and make new evolutions easier",
        "Bike activities extended data new look. Possibility to get the activity extended data panel hidden on load",
        "Cache management of bike Odo for bike activities, force refresh possible",
        "Fixing hide challenges and new routes which broken in new Strava.com update",
        "New StravistiX design",
        "Bug fixes",
    ]
}, {
    version: '0.2.0',
    notes: [
        "Add TRIMP (TRaining IMPulse) value to cycling activities. The old stress score has been removed, not relevant any more now.",
        "Add Heart Rate Reserve (%HRR) value to cycling activities.",
        "Add Octo zones distribution of Heart Rate Reserve (%HRR) in minutes to cycling activities.",
        "Motivation score now become Toughness Factor",
        "Standard deviation bug fix of possible square root of negative variance..."
    ]
}, {
    version: '0.1.13',
    notes: [
        "Add standard deviation speed data for cycling activities",
        "Add Cadence data for cycling activities: cadence %, cadence Time and crank revolutions. A cadence meter needed to get that",
    ]
}, {
    version: '0.1.12',
    notes: [
        "Add Lower Quartile, Median and Upper Quartile speed data for cycling activities",
        "Add helpers when click on added data in cycling activities",
        "Add cache system to store analysis data in localStorage which may are long to be computed. The cache is reused when you reload an activity which has one.",
    ]
}, {
    version: '0.1.11',
    notes: [
        "More Stable",
        "Prepare future for big features...",
    ]
}, {
    version: '0.1.10',
    notes: [
        "Add Watts/KG for cycling activities",
        "Add VeloViewer Challenges Trophy Cabinet to StravistiX menu",
    ]
}, {
    version: '0.1.9',
    notes: [
        "Bike odo on activities back",
        "Weighted Power calculation adjusted for cycling activities",
    ]
}, {
    version: '0.1.8',
    notes: [
        "Add Estimated Weighted Power for cycling activities",
        "Add Estimated Variability Index for cycling activities",
        "Add Estimated Punch Factor for cycling activities",
        "Bug fixing",
    ]
}, {
    version: '0.1.7',
    notes: [
        "Hide the challenges in dashboard feed",
        "Hide the created routes in dashboard feed",
        "Bug fixing",
        "Switch app name to 'StravistiX Developper Preview'",
    ]
}, {
    version: '0.1.6',
    notes: [
        "Add this about page",
        "StravistiX placed first in header",
        "Add icons in StravistiX menu",
        "Remove StravistiX settings page popup when extension is updated",
        "Bug fixing",
    ]
}, {
    version: '0.1.5',
    notes: [
        "Segment Rank percentage now working on all leaderboards (Clubs, following, ...)",
        "Add bike odo display or not as an option",
        "Come back to Strava Classic color style",
        "Add StravistiX features highlighted in bright orange as option (new miscellaneous section).",
    ]
}, {
    version: '0.1.4',
    notes: [
        "Display bike odo on activity page",
        "Bugs fixing",
    ]
}, {
    version: '0.1.3',
    notes: [
        "Add Motivation Score for cycling activities",
        "Add Stress Score for cycling activities",
        "Add Move ratio for cycling activities",
        "Add Segment rank percentage on full leaderboard",
        "Add default leaderboard filter",
        "Add Always enable Grade Adjusted Pace for running activities",
        "Add Always enable heart rate for running activities",
        "Add Default Google Map type in activity",
        "Add links to Flyby, Veloviewer, Raceshape in activity page",
        "Allow free accounts users to hide premium features",
        "Add StravistiX menu",
        "Add Settings page link to StravistiX menu",
        "Add Global Heat Map to StravistiX menu",
        "Add user veloviewer link to StravistiX menu",
        "Add Kom Map link to StravistiX menu",
    ]
}];