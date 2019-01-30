package com.musictest;

import android.media.AudioManager;
import android.media.MediaPlayer;
import android.os.Handler;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.io.IOException;

public class MusicModule extends ReactContextBaseJavaModule {

    private MediaPlayer mediaPlayer;
    private int duration;
    private ReactApplicationContext reactApplicationContext;
    private Handler handler;

    public MusicModule(ReactApplicationContext reactContext) {
        super(reactContext);
        reactApplicationContext = reactContext;
    }

    @Override
    public String getName() {
        return "MusicPlayers";
    }

    @ReactMethod
    public void showTest(String message) {
        Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_SHORT).show();
    }

    @ReactMethod
    public void onInitPlayer(String url) {
        mediaPlayer = new MediaPlayer();
        handler = new Handler();
        mediaPlayer.setAudioStreamType(AudioManager.STREAM_MUSIC);
        try {
            mediaPlayer.setDataSource(url);
            mediaPlayer.prepare();
        } catch (IOException e) {
            e.printStackTrace();
        }

        mediaPlayer.setOnCompletionListener(new MediaPlayer.OnCompletionListener() {
            @Override
            public void onCompletion(MediaPlayer mp) {
                mediaPlayer.stop();
                mediaPlayer.reset();
                handler.removeCallbacks(updateSeekBar);
            }
        });
        duration = getMilliSecondToSecond(mediaPlayer.getDuration());
        WritableMap params = Arguments.createMap();
        params.putInt("totalLength", duration);
        reactApplicationContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("onSongPerpare", params);
    }

    @ReactMethod
    public void onPlay() {
        if (!mediaPlayer.isPlaying()) {
            mediaPlayer.start();
            handler.post(updateSeekBar);
        }else{
            mediaPlayer.reset();
            mediaPlayer.start();
            handler.post(updateSeekBar);
        }
    }

    @ReactMethod
    public void onPause() {
        if (mediaPlayer.isPlaying()) {
            mediaPlayer.pause();
            handler.removeCallbacks(updateSeekBar);
        }
    }

    private Runnable updateSeekBar = new Runnable() {
        public void run() {
            int currentDuration = getMilliSecondToSecond(mediaPlayer.getCurrentPosition());
            WritableMap params = Arguments.createMap();
            if (currentDuration >= duration) {
                params.putInt("currentPosition", 0);
                reactApplicationContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("onSongStop", params);
                handler.removeCallbacks(updateSeekBar);
            } else {
                params.putInt("currentPosition", currentDuration);
                reactApplicationContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("onSongPlay", params);
                handler.postDelayed(this, 1000);
            }
        }
    };

    public int getMilliSecondToSecond(int milisecond) {
        return ((milisecond / 1000) % 60);
    }
}