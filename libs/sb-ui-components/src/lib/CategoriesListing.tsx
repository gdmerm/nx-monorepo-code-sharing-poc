import React, {useEffect} from 'react';
import {
  Text,
  TouchableOpacity, ScrollView
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesStart, selectCategories } from '@betsson-sportsbook-monorepo/data-access-categories';

export function CategoriesListing() {
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
