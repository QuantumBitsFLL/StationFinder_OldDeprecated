import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
const baseUrl = "http://localhost:8080";
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
    //const stations = getStations( "http://localhost:8080" );
    const [ stations, setStations ] = useState( [] ); 
    useEffect( () => {
        fetch( `${ baseUrl }/stations`, stations )
        .then( response => response.json() )  
        .then( data => setStations( data ) )
    }, [] );
    return ( 
        <View>
            {/* <div>{stations.map(s => <div>{s.name}</div>)}</div> */}
                { 
                    stations.map( station => {
                        return <View>
                            <Text key = { station.id }>{ station.name }</Text>
                        </View>
                    } 
                ) }
        </View>
    )
}

export default Stations;
