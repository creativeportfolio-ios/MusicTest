//
//  MusicPlayers.h
//  MusicTest
//
//  Created by techflitter on 1/29/19.
//  Copyright © 2019 Facebook. All rights reserved.
//
#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

#import <AVFoundation/AVFoundation.h>
#import <AudioToolbox/AudioToolbox.h>
NS_ASSUME_NONNULL_BEGIN

@interface MusicPlayers : RCTEventEmitter <RCTBridgeModule,AVAudioPlayerDelegate>
{
  NSTimer *timers;
  NSInteger currentPosition;
  NSInteger totalduration;
  NSInteger intcheck;
  
  
}

@property (nonatomic, strong) AVAudioPlayer *audioPlayer;
@end

NS_ASSUME_NONNULL_END

