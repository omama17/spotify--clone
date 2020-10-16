import { Grid, Slider } from "@material-ui/core";
import { PlayCircleOutline, PlaylistPlay, Repeat, Shuffle, SkipNext, SkipPrevious, VolumeDown } from "@material-ui/icons";
import React, { useEffect } from "react";
import "./Footer.css";
import { useStateValue } from "./StateProvider";
function Footer({spotify}) {
   const [{ token, item, playing }, dispatch] = useStateValue();
   useEffect(() => {
      spotify.getMyCurrentPlaybackState().then((r) => {
        console.log(r);
  
        dispatch({
          type: "SET_PLAYING",
          playing: r.is_playing,
        });
  
        dispatch({
          type: "SET_ITEM",
          item: r.item,
        });
      });
    }, [spotify]);
  
    const handlePlayPause = () => {
      if (playing) {
        spotify.pause();
        dispatch({
          type: "SET_PLAYING",
          playing: false,
        });
      } else {
        spotify.play();
        dispatch({
          type: "SET_PLAYING",
          playing: true,
        });
      }
    };
  
    const skipNext = () => {
      spotify.skipToNext();
      spotify.getMyCurrentPlayingTrack().then((r) => {
        dispatch({
          type: "SET_ITEM",
          item: r.item,
        });
        dispatch({
          type: "SET_PLAYING",
          playing: true,
        });
      });
    };
  
    const skipPrevious = () => {
      spotify.skipToPrevious();
      spotify.getMyCurrentPlayingTrack().then((r) => {
        dispatch({
          type: "SET_ITEM",
          item: r.item,
        });
        dispatch({
          type: "SET_PLAYING",
          playing: true,
        });
      });
    };
   return (
    <div className="footer">
      <div className="footer__left">
         <img  className="footer__albumLogo"
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
       alt=""/>
         <div className="footer__songInfo">
         <h4>Yeah</h4>
         <p>usher</p>
         </div>
      </div>
      <div className="footer__center">
         <Shuffle className="footer__green"/>
         <SkipPrevious onClick={skipNext}
          className="footer__icon"/>
         <PlayCircleOutline   onClick={handlePlayPause}
          fontSize="large" className="footer__icon"/>
         <SkipNext onClick={skipPrevious}
         className="footer__icon"/>
         <Repeat
          className="footer__green"/>
      </div>
      <div className="footer__right">
         <Grid container spacing={2}>
            <Grid item>
                <PlaylistPlay/>
            </Grid>
            <Grid item>
                <VolumeDown/>
            </Grid>
            
            <Grid item xs>
                <Slider/>
            </Grid>
             
         </Grid>
      </div>
    </div>
  );
}

export default Footer;
