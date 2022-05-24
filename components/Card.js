import React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';

export default function Card(props) {
    return (
        <View style={styles.component}>
            <View>
                <Text
                    style={styles.title}>
                    {props.object.original_title}
                </Text>
                <Image
                    style={styles.poster}
                    resizeMode = 'center'
                    source={{
                        uri:'https://image.tmdb.org/t/p/w500'+props.object.poster_path,
                    }}
                />
                <Text style={{color:'gray'}}>{'\n'}{props.object.overview}{'\n'}</Text>
                <Text style={{color:'black'}}> Release Date: {props.object.release_date}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    component: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        flexWrap: 'wrap'
    },
    title: {
        paddingLeft: 10,
        fontSize: 25,
        fontStyle: 'italic',
        alignSelf:'center',
    },
    poster: {
        width: 200,
        height: 200,
        alignSelf:'center',
    },
});
