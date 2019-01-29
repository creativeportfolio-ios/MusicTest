package com.musictest;

import android.media.AudioManager;
import android.media.MediaPlayer;
import android.os.Handler;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.IOException;

public class MusicModule extends ReactContextBaseJavaModule {

  private MediaPlayer mediaPlayer;

  public MusicModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "MusicExample";
  }

  @ReactMethod
  public void showTest(String message) {
    Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_SHORT).show();
  }

  @ReactMethod
  public void onInitPlayer(String url, Callback callback) {
    mediaPlayer = new MediaPlayer();
    mediaPlayer.setAudioStreamType(AudioManager.STREAM_MUSIC);
    try {
      mediaPlayer.setDataSource(url);
      mediaPlayer.prepare();
    } catch (IOException e) {
      e.printStackTrace();
    }
    mediaPlayer.setOnCompletionListener(new MediaPlayer.OnCompletionListener() {
      @Override
      public void onCompletion(MediaPlayer mediaPlayer) {
        mediaPlayer.stop();
        mediaPlayer.reset();
      }
    });
    callback.invoke(mediaPlayer.getCurrentPosition());
  }

  @ReactMethod
  public void onPlay() {
    if(!mediaPlayer.isPlaying()){
      mediaPlayer.start();
      showTest("Play");
    }
  }

  @ReactMethod
  public void onPause() {
    if(mediaPlayer.isPlaying()){
      mediaPlayer.pause();
      showTest("Pause");
    }
  }
}