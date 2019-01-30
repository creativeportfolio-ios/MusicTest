import * as React from "react";
import Layout from "MusicTest/App/Components/Layout";
import AlbumArt from 'MusicTest/App/Components/AlbumArt';
import SeekBar from 'MusicTest/App/Components/SeekBar';
import Controls from 'MusicTest/App/Components/Controls';
import { Platform, NativeModules, NativeEventEmitter, DeviceEventEmitter, Dimensions, StyleSheet } from 'react-native';
const { MusicPlayers } = NativeModules;
const MusicPlayersEmitter = new NativeEventEmitter(MusicPlayers);

class MusicDetails extends React.PureComponent<{}> {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.state.params.selectedItem.title
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            url: this.props.navigation.state.params.selectedItem.audio,
            paused: true,
            totalLength: 0,
            currentPosition: 0
        };
    }
    componentDidMount() {
        if (Platform.OS == 'android') {
            this.listener = DeviceEventEmitter.addListener('onSongPlay', (e) => {
                this.setState({
                    paused: false,
                    currentPosition: Math.ceil(e.currentPosition)
                })
            });
            this.listener = DeviceEventEmitter.addListener('onSongStop', (e) => {
                this.setState({
                    paused: true,
                    currentPosition: Math.ceil(e.currentPosition)
                })
            });
            this.listener = DeviceEventEmitter.addListener('onSongPerpare', (e) => {
                this.setState({
                    totalLength: Math.ceil(e.totalLength)
                })
            });
        } else {
            this.listener = MusicPlayersEmitter.addListener('onSongPlay', (e) => {
                this.setState({
                    paused: false,
                    currentPosition: Math.ceil(e.currentPosition)
                })
            });
            this.listener = MusicPlayersEmitter.addListener('onSongStop', (e) => {
                this.setState({
                    paused: true,
                    currentPosition: Math.ceil(e.currentPosition)
                })
            });
            this.listener = MusicPlayersEmitter.addListener('onSongPerpare', (e) => {
                this.setState({
                    totalLength: Math.ceil(e.totalLength)
                })
            });
        }
        MusicPlayers.onInitPlayer(this.state.url)
    }

    onButtonPlay() {
        this.setState({ paused: false })
        MusicPlayers.onPlay();
    }

    onButtonPause() {
        this.setState({ paused: true })
        MusicPlayers.onPause();
    }

    render(): React.Node {
        const selectedItem = this.props.navigation.state.params.selectedItem
        return (
            <Layout.Center>
                <AlbumArt url={selectedItem.cover} onPress={this.onButtonPlay.bind(this)} />
                <SeekBar trackLength={this.state.totalLength} currentPosition={this.state.currentPosition} />
                <Controls
                    onPressPlay={this.onButtonPlay.bind(this)}
                    onPressPause={this.onButtonPause.bind(this)}
                    paused={this.state.paused} />
            </Layout.Center >
        )
    }
}

const styles = StyleSheet.create({

    main: {
        height: 240,
        width: Dimensions.get('window').width - 20,
        shadowColor: 'white',
        borderRadius: 10,
        margin: 10,
        flexDirection: 'column-reverse'
    },
});

export default MusicDetails;