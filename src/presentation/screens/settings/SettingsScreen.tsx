import { globalStyle } from '@/config/app-theme';
import { useCounterStore } from '@/presentation/store/counter-store';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';

export const SettingsScreen = () => {

    const count = useCounterStore(s => s.count);
    const incrementBy = useCounterStore(s => s.incrementBy);
    const reset = useCounterStore(s => s.resetCount);

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
           title: `Count: ${count}`
        })
    }, [count])


    return (
        <View style={globalStyle.container}>
            <Text
                style={globalStyle.title}
            >Count: {count}</Text>

            <Pressable
                onPress={() => incrementBy(1)}
                style={globalStyle.primaryButton}
                onLongPress={()=>reset()}
            >
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}
                >+</Text>
            </Pressable>
            <Pressable
                onPress={() => incrementBy(-1)}
                style={globalStyle.primaryButton}
                onLongPress={()=>reset()}
            >
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}
                >-</Text>
            </Pressable>

        </View>
    )
};