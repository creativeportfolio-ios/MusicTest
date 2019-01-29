//
//  Device.m
//  MusicTest
//
//  Created by techflitter on 1/29/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "MusicPlayers.h"

#import <UIKit/UIKit.h>
#import <AVFoundation/AVFoundation.h>
#import <AudioToolbox/AudioToolbox.h>
#import <React/RCTEventEmitter.h>


@implementation MusicPlayers

RCT_EXPORT_MODULE();
- (NSArray<NSString *> *)supportedEvents {
  return @[@"onSongPlay",@"onSongStop",@"onSongPerpare"];
}

RCT_EXPORT_METHOD(onInitPlayer:(NSString *)urls) {
  NSURL *url = [NSURL URLWithString:urls];
  NSData *data = [NSData dataWithContentsOfURL:url];
  _audioPlayer = [[AVAudioPlayer alloc] initWithData:data error:nil];
  [[AVAudioSession sharedInstance] setCategory:AVAudioSessionCategoryPlayback error:nil];
  [[AVAudioSession sharedInstance] setActive: YES error: nil];
  [_audioPlayer setVolume:1.0];
  _audioPlayer.delegate = self;
  [_audioPlayer stop];
  [_audioPlayer setCurrentTime:0];
  [self sendEventWithName:@"onSongPerpare" body:@{@"totalLength": [NSString stringWithFormat:@"%0.f",self.audioPlayer.duration]}];
}

RCT_EXPORT_METHOD (onPlay) {
  [_audioPlayer play];
  [self onPlayAudio];
  timers = [NSTimer timerWithTimeInterval:1.0 target: self selector:@selector(onPlayAudio) userInfo: nil repeats:YES];
  [[NSRunLoop mainRunLoop] addTimer:self->timers forMode:NSRunLoopCommonModes];
}

- (void)onPlayAudio {
  if (self.audioPlayer.currentTime >= self.audioPlayer.duration || self.audioPlayer.currentTime == 0.0) {
    [self->timers invalidate];
    [self sendEventWithName:@"onSongStop" body:@{@"currentPosition": @"0"}];
  } else {
    [self sendEventWithName:@"onSongPlay" body:@{@"currentPosition": [NSString stringWithFormat:@"%f",self.audioPlayer.currentTime]}];
  }
}

RCT_EXPORT_METHOD (onPause) {
  [timers invalidate];
  [_audioPlayer pause];
}

@end

