# reactorhub.github.io
Youtube Reactor web page :

Purpose: Allow youtube reactors to react to videos without (significantly less?) fear of copyright strikes.

Definitions:
  reactor: the person creating a video reacting to a target videos
  talent: the subject of the video being reacted to by the reactor

The workflow provided is for reactors to react to videos, so it supports control and timing of the target 'talent' video by the current location of the 'reactor's' video. It supports videos recorded in the following fashion:

1 - reactor introduces the video; Talent video starts playing when the reactor video reaches a specified timecode
2 - reactor can provide the timecodes where the talent video should pause/play/pause/play where the reactor

The two videos are then loaded into separate 'frames' in a webpage. The viewer starts the reactor video, and thereafter the talent video plays and pauses where appropriate (as specified by the reactor in the url they provide to theie viewers)

 https://reactorhub.github.io/reactorhub/index.html?reactor:[url of reactor's video]&talent:[url of the video being reacted to]&play;[xx:xx],pause;[xx:xx],play;[xx:xx]

 sample:
 https://reactorhub.github.io/reactorhub/index.html?reactor:https://youtu.be/ErCxPH7HQyI&talent:https://youtu.be/9TkHpvaO09c&play;3:08,pause;3:20,play;3:30

 Loads the reactor's video at https://youtu.be/ErCxPH7HQyI&talent in one 'frame'
 Loads the talent video at https://youtu.be/9TkHpvaO09c in another frame (current to the right, or under the reactor's video, but that will eventually be adjustable)
 When the viewer plays the reactor's video, the talent video will:
   1 - start playing at 3:08 of the reactor's videos
   2 - pause when the reactor's reaches 3:20
   3 - start playing again then the reactor's video reaches 3:30


What it is not designed to support:
  videos that have the target video chopped up with pieces missing to avoid copyright strikes.
  videos that have been sped up or slowed down in order to avoid copyright strikes
  (Presumably, this tool will eliminate the need to cut out parts and/or speed/slow videos)

  Existing video's with the talent video included and having audio included, will still work, but at this point the viewer will need to adjust the sound manually in each video (not always possible on smartphones)


TODO

1 - provide initial volume settings on start (ie. reactor at 75% full vol, talent at 50%) (ie &StartVol:75/50)
2 - provide ability to adjust vol at timecodes (ie. &ReactorVol0;2:02;TalentVol8;2:02,ReactorVol8;2:30,TalentVol4;2:30) (ie. mute the reactor until they start to comment on something at 2:30, when you up the reactor's vol and reduce the talen's vol so you can make out what the reactor is saying)
3 - Provide several layouts for the two videos.
  * reactor to the left, talent to the right
  * talent to the left, reactor to the copyright
  * one video full screen with other video taking 1/9th or 1/4 size position in any of the 9/4 blocks
  * switch what video is full screen and which video is overlayed on top the full screen videos
4 - eventually provide a tool for building the url and coding (ie. a GUI where they can enter the two video's urls, select what they want done, and enter the time in the reactor's video where that should get done, and the tool will provide the url to provide the viewers.)
5 - long term: some kind of database of reactor videos where viewers can search for videos by the same reactor, or same talent, or category (this will probably need a part of the command line that provides info like 'reactor's name, channel, talent's name, channel, a list of reactor provided category tags.)
