import { globalStyle } from '@/config/app-theme';
import { useProfileStore } from '@/presentation/store/profile-store';
import { Pressable, Text, View } from 'react-native';

export const ProfileScreen = () => {

    const name = useProfileStore(state => state.name);
    const email = useProfileStore(state => state.email);
    const changeProfile = useProfileStore(state => state.changeProfile);


    return (
        <View style={globalStyle.container}>
            <Text
                style={globalStyle.title}
            >ProfileScreen</Text>
            <Text>Name: {name}</Text>
            <Text>Email: {email}</Text>

            <Pressable
            style={globalStyle.primaryButton}
             onPress={()=>changeProfile('Fabiana simon', 'faby@gmail.com')}
             >
                <Text>Change state</Text>
            </Pressable>

        </View>
    )
};