import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { useDispatch, useSelector } from 'react-redux';
import { addClip, deleteClip } from '../store/actions/user';
import ClipButton from '../components/ClipButton';
import Loading from '../components/Loading';

export default function ArticleScreen({ route }) {
    const { articles } = route.params;
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const { clips } = user;

    const isClipped = () => {
        return clips.some((clip) => clip.url === articles.url);
    };

    const toggleClip = () => {
        if (isClipped()) {
            dispatch(deleteClip({ clip: articles }));
        } else {
            dispatch(addClip({ clip: articles }));
        }
    };

    return (
        <>
            <ClipButton onPress={toggleClip} enabled={isClipped()} />
            <WebView
                source={{ uri: articles.url }}
                startInLoadingState={true}
                renderLoading={() => <Loading />}
            />
        </>
    );
}
