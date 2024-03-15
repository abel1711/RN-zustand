import { globalStyle } from '@/config/app-theme';
import { useProfileStore } from '@/presentation/store/profile-store';
import { Text, View } from 'react-native';

export const ProfileScreen = () => {

    const name = useProfileStore(state => state.name);
    const email = useProfileStore(state => state.email);

    return (
        <View style={globalStyle.container}>
            <Text
                style={globalStyle.title}
            >ProfileScreen</Text>
            <Text>Name: {name}</Text>
            <Text>Email: {email}</Text>

        </View>
    )
};