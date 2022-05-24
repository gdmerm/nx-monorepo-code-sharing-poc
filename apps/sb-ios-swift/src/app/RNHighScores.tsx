import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const CATEGORIES_API_LOCATOR = '/api/sb/v1/widgets/categories/v1?includeBadge=false';

export function RNHighScores({ scores }) {
  const [categs, setCategories] = useState([])

  useEffect(() => {
    const url = `http://localhost:3001${CATEGORIES_API_LOCATOR}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCategories(data.data.items)
      })
  }, [])

  const contents = scores.map((score) => (
    <Text key={score.name}>
      {score.name}:{score.value}
      {'\n'}
    </Text>
  ));

  const categories = categs.map(categ => (
    <TouchableOpacity key={categ.slug}><Text>{categ.label}</Text></TouchableOpacity>
  ))

  return (
    <View style={styles.container}>
      <Text style={styles.highScoresTitle}>
        2048 High Scores!
      </Text>
      <Text style={styles.scores}>{contents}</Text>
      <View>{categories}</View>
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
