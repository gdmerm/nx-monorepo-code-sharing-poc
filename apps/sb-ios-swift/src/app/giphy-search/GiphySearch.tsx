import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GiphyItem, searchGiphiesStart, selectGiphies } from '@betsson-sportsbook-monorepo/data-access-giphy';
import { TextInput, View, StyleSheet, Image } from 'react-native';


export function GiphySearch() {
  const dispatch = useDispatch()
  const giphies = useSelector(selectGiphies)
  function handleInput(text: string) {
    dispatch(searchGiphiesStart(text))
  }

  return (
    <View style={{flex: 1}}>
      <TextInput style={styles.input} onChangeText={handleInput} />
      <View style={styles.container}>
      {giphies.map((gify: GiphyItem) => (
        <View key={gify.id}>
          <Image style={styles.image} source={{uri: gify.images.fixed_height_small.url}} />
        </View>
      ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  image: {
    width: 120,
    height: 100
  },
  container: {
    flex: 1,
    flexDirection:'row',
    flexWrap: 'wrap',
    padding: 10
  }
});
