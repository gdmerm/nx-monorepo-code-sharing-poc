import React, {useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesStart, selectCategories } from '@betsson-sportsbook-monorepo/data-access-categories';

export function RNHighScores({ scores }: {scores: any}) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCategoriesStart())
  }, [])

  const categories = useSelector(selectCategories)

  return (
    <View>
      {categories.map((categ: {slug: string, label: string}) => (
        <TouchableOpacity key={categ.slug}>
          <Text>{categ.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
