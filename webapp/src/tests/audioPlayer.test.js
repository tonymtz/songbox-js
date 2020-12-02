import React from 'react';
import { create } from 'react-test-renderer';

import ParentTest from './ParentTest';

import AudioPlayer from '../components/AudioPlayer';
import Audio from '../components/AudioPlayer/Audio';
import AudioProgress from '../components/AudioPlayer/AudioProgress';
import Player from '../components/AudioPlayer/Player';
import Forward from '../components/AudioPlayer/PlayerButtons/Forward';
import Play from '../components/AudioPlayer/PlayerButtons/Play';
import Repeat from '../components/AudioPlayer/PlayerButtons/Repeat';
import Rewind from '../components/AudioPlayer/PlayerButtons/Rewind';
import Shuffle from '../components/AudioPlayer/PlayerButtons/Shuffle';

test('Render AudioPlayer component', () => {
  const component = create(
    <ParentTest>
      <AudioPlayer />
    </ParentTest>,
  );
});

test('Render Audio component', () => {
  const component = create(
    <ParentTest>
      <Audio
        currentSong="despacito.mp3"
        singleSong={false}
        setProgress={0}
        setIsLoading={() => false}
        setIsPlaying={() => true}
        onRepeat={false}
        nextSong={() => true}
        audioPlayer={null}
      />
    </ParentTest>,
  );
});

test('Render AudioProgress component', () => {
  const component = create(
    <ParentTest>
      <AudioProgress progress={0} />
    </ParentTest>,
  );
});

test('Render Player component', () => {
  const component = create(
    <ParentTest>
      <Player
        isPlaying
        nextSong={null}
        onRandom={false}
        play={() => true}
        previousSong={() => true}
        toggleOnRandom={() => true}
        key={1}
      />
    </ParentTest>,
  );
});

test('Render Forward component', () => {
  const component = create(
    <ParentTest>
      <Forward />
    </ParentTest>,
  );
});

test('Render Play component', () => {
  const component = create(
    <ParentTest>
      <Play />
    </ParentTest>,
  );
});

test('Render Repeat component', () => {
  const component = create(
    <ParentTest>
      <Repeat />
    </ParentTest>,
  );
});

test('Render Rewind component', () => {
  const component = create(
    <ParentTest>
      <Rewind />
    </ParentTest>,
  );
});

test('Render Shuffle component', () => {
  const component = create(
    <ParentTest>
      <Shuffle />
    </ParentTest>,
  );
});
