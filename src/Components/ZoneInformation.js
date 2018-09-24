import React from 'react';
import classes from './ZoneInformation.css';
import Zoom from 'react-reveal/Zoom';

const ZoneInformation = () => {

  return(
    <div className={classes.zoneInfoSectionWrapper}>
    <div className={classes.zoneInfoSectionSmallWrapper}>
      <div>
        <h1 className={classes.sectionHeader}>Training Zones</h1>
      </div>
      <hr noshade="noshade"/>
      <Zoom>
      <div className={classes.row}>
        <div className={classes.column}>
          <h2 className={classes.titleForEachZone}>Zone 1: Active Recovery</h2>
          <p className={classes.ZoneParagraph}>"Easy spinning" or "light pedal pressure", i.e., very low level exercise, too low in and of itself to induce significant physiological adaptations. Minimal sensation of leg effort/fatigue. Requires no concentration to maintain pace, and continuous conversation possible. Typically used for active recovery after strenuous training days (or races), between interval efforts, or for socializing.</p>
        </div>
        <div className={classes.column}>
          <h2 className={classes.titleForEachZone}>Zone 2: Endurance</h2>
          <p className={classes.ZoneParagraph}>"All day" pace, or classic long slow distance (LSD) training. Sensation of leg effort/fatigue generally low, but may rise periodically to higher levels (e.g., when climbing). Concentration generally required to maintain effort only at highest end of range and/or during longer training sessions. Breathing is more regular than at level 1, but continuous conversation still possible. Frequent (daily) training sessions of moderate duration (e.g., 2 h) at level 2 possible (provided dietary carbohydrate intake is adequate), but complete recovery from very long workouts may take more than 24 hs.
        </p>
        </div>
        <div className={classes.column}>
          <h2 className={classes.titleForEachZone}>Zone 3: Tempo</h2>
          <p className={classes.ZoneParagraph}>Typical intensity of fartlek workout, 'spirited' group ride, or briskly moving paceline. More frequent/greater sensation of leg effort/fatigue than at level 2. Requires concentration to maintain alone, especially at upper end of range, to prevent effort from falling back to level 2. Breathing deeper and more rhythmic than level 2, such that any conversation must be somewhat halting, but not as difficult as at level 4. Recovery from level 3 training sessions more difficult than after level 2 workouts, but consecutive days of level 3 training still possible if duration is not excessive and dietary carbohydrate intake is adequate.</p>
        </div>
        <div className={classes.column}>
          <h2 className={classes.titleForEachZone}>Zone 4: Active Recovery</h2>
          <p className={classes.ZoneParagraph}>"Easy spinning" or "light pedal pressure", i.e., very low level exercise, too low in and of itself to induce significant physiological adaptations. Minimal sensation of leg effort/fatigue. Requires no concentration to maintain pace, and continuous conversation possible. Typically used for active recovery after strenuous training days (or races), between interval efforts, or for socializing.</p>
        </div>
        <div className={classes.column}>
          <h2 className={classes.titleForEachZone}>Zone 5: Endurance</h2>
          <p className={classes.ZoneParagraph}>"All day" pace, or classic long slow distance (LSD) training. Sensation of leg effort/fatigue generally low, but may rise periodically to higher levels (e.g., when climbing). Concentration generally required to maintain effort only at highest end of range and/or during longer training sessions. Breathing is more regular than at level 1, but continuous conversation still possible. Frequent (daily) training sessions of moderate duration (e.g., 2 h) at level 2 possible (provided dietary carbohydrate intake is adequate), but complete recovery from very long workouts may take more than 24 hs.
        </p>
        </div>
        <div className={classes.column}>
          <h2 className={classes.titleForEachZone}>Zone 6: Tempo</h2>
          <p className={classes.ZoneParagraph}>Typical intensity of fartlek workout, 'spirited' group ride, or briskly moving paceline. More frequent/greater sensation of leg effort/fatigue than at level 2. Requires concentration to maintain alone, especially at upper end of range, to prevent effort from falling back to level 2. Breathing deeper and more rhythmic than level 2, such that any conversation must be somewhat halting, but not as difficult as at level 4. Recovery from level 3 training sessions more difficult than after level 2 workouts, but consecutive days of level 3 training still possible if duration is not excessive and dietary carbohydrate intake is adequate.</p>
        </div>
      </div>
      </Zoom>
    </div>
  </div>
  )
}

export default ZoneInformation;