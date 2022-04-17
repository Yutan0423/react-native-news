import { StyleSheet, View, Text, FlatList, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import ListItem from '../components/ListItem';

export default function ClipScreen({ navigation }) {
    const user = useSelector((state) => state.user);
    const { clips } = user;
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={clips}
                renderItem={({ item }) => (
                    <ListItem
                        imageUrl={item.urlToImage}
                        author={item.author}
                        title={item.title}
                        onPress={() =>
                            navigation.navigate('Article', {
                                articles: item,
                            })
                        }
                        keyExtractor={(item, index) => index.toString()}
                    />
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
