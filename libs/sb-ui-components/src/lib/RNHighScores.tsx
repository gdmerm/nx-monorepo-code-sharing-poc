import React, {useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity, ScrollView
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
    <ScrollView style={{flex: 1}}>
      {categories.map((categ: {slug: string, label: string}) => (
        <TouchableOpacity style={{ padding: 10, backgroundColor: '#f1f1f1', marginBottom: 2 }} key={categ.slug}>
          <Text>{categ.label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
