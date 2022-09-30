import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GiphyItem, searchGiphiesStart, selectGiphies } from '@betsson-sportsbook-monorepo/data-access-giphy';
import { TextInput, View, StyleSheet, Image } from 'react-native';


export function GiphySearch() {
  const dispatch = useDispatch()
  const [isEmpty, setEmpty] = useState(true)
  const giphies = useSelector(selectGiphies)

  return (
    <View style={{flex: 1}}>
      <TextInput style={styles.input} onChangeText={handleInput} />
      <View style={styles.container}>
        {!isEmpty && giphies.map((gify: GiphyItem) => (
          <View key={gify.id}>
            <Image style={styles.image} source={{uri: gify.images.fixed_height_small.url}} />
          </View>
        ))}
      </View>
    </View>
  );

  function handleInput(text: string) {
    if (text.length === 0) {
      return setEmpty(true)
    }
    setEmpty(false)
    dispatch(searchGiphiesStart(text))
  }
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
