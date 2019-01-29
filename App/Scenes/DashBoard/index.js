import * as React from "react";
import Layout from "MusicTest/App/Components/Layout";
import { ActivityIndicator, FlatList, TouchableOpacity, View } from 'react-native';
import MusicCellBig from './MusicCellBig';

const ENDPOINT = 'https://raw.githubusercontent.com/Learnfield-GmbH/CodingChallange/master/data/manifest.json';

class DashBoard extends React.PureComponent<{}> {

    static navigationOptions = {
        title: "Music"
    }

    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    componentDidMount() {
        this.onGetAPIData()
    }

    onGetAPIData() {
        return fetch(ENDPOINT)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("mytag" + JSON.stringify(responseJson))
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.data,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _render2 = ({ item }) => {
        const { navigate } = this.props.navigation;
        return <TouchableOpacity onPress={() => navigate('MusicDetails', { selectedItem: item, })}>
                <MusicCellBig item={item} />
                </TouchableOpacity>
    };

    render(): React.Node {

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        return (
            <Layout.Scroll>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={this._render2}
                    style={{ marginLeft: 4, marginRight: 4, borderRadius: 10 }} />
            </Layout.Scroll>
        )
    }
}

export default DashBoard;