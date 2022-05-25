import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {fetchCategoriesStart} from '@betsson-sportsbook-monorepo/data-access-categories'

export function RNHighScores({ scores }: {scores: any}) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCategoriesStart())
  }, [])

  const categories = useSelector((state: Record<'categories', Array<any>>) => state.categories)

  return (
    <View>
      {categories.map(categ => <TouchableOpacity key={categ.slug}><Text>{categ.label}</Text></TouchableOpacity>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  highScoresTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  scores: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
