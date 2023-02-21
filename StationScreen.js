import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const StationScreen = () => {

    // Get the stations from the local json-server
    const [ stations, setStations ] = useState( [] );
    useEffect( () => {
        fetch( 'http://localhost:8080/stations/', stations )
        .then( response => response.json() )  
        .then( data => setStations( data ) )
    }, [] );

    return (
        <View>
            {
                stations.map( station => (
                        <View key = { station.id }>
                            <Text>{ station.name }</Text>
                        </View>
                    )
                )
            }
        </View>
    )
}

export default StationScreen;