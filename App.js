import * as React from 'react';
import {View, ActivityIndicator, SafeAreaView, FlatList} from 'react-native';

import Header from './components/Header.js'
import Card from './components/Card.js'
import {useEffect} from "react";


export default function App() {
  const [page,setPage]= React.useState(1);
  const [movies, setMovies] = React.useState([]);
  const [rerender,setRerender]=React.useState(true);
  const fetchApiCall = () => {
      setRerender(true);
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=08799be9aacb2dcaf355c9426c2f4899&page="+page, {
      "method": "GET"
    })
        .then(response => response.json())
        .then(response => {
            setRerender(false);
            setPage(page+1);
            setMovies([...movies,...response.results])

        })
        .catch(err => {
          console.log(err);
        });
  }
  const renderItem = ({ item }) => (
      <Card object={item}/>
  );
  useEffect(()=>{
      if(!rerender)
          return;
      fetchApiCall()
  });
  return (
      <View style={{flex:1}}>
        <Header/>
        <View style={{flex:1}}>
          <SafeAreaView
              forceInset={{ bottom: 'never' }}>
            <FlatList
                data={movies}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                onEndReached={fetchApiCall}
                onEndReachedThreshold={0.7}
            />
              {
                  rerender &&
                  <View style={{flex:1,justifyContent: "center"}}>
                    <ActivityIndicator size="large" />
                  </View>
              }
          </SafeAreaView>
      </View>
      </View>
  );
}
