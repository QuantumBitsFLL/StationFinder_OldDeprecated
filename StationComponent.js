import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export const getStations = ( baseUrl ) => {
    const [ stations, setStations ] = useState( [] ); 
    useEffect( () => {
        fetch( `${ baseUrl }/stations`, stations )
        .then( response => response.json() )  
        .then( data => setStations( data ) )
    }, [] );

    return stations;
}

const Stations = () => {
    const stations = getStations( "localhost:8080" );
    return ( 
        <View>
                { 
                    stations.map( station => {
                        <View>
                            <Text key = { station.id }>{ station.name }</Text>
                        </View>
                    } 
                ) }
        </View>
    )
}

export default Stations;
