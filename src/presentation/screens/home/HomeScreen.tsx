import { globalStyle } from '@/config/app-theme';
import { useCounterStore } from '@/presentation/store/counter-store';
import { useProfileStore } from '@/presentation/store/profile-store';
import { Text, View } from 'react-native';

export const HomeScreen = () => {

    const name = useProfileStore(state => state.name);
    const email = useProfileStore(state => state.email);
    const count = useCounterStore(s => s.count);

    return (
        <View style={globalStyle.container}>
            <Text
                style={globalStyle.title}
            >HomeScreen</Text>

            <Text>Name: {name}</Text>
            <Text>Email: {email}</Text>
            <Text>Count: {count}</Text>
        </View>
    )
};