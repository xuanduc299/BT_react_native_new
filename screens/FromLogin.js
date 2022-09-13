import * as React from 'react';
import { View, Button, Text, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import img1 from '../component/image/apple-touch-icon.png'

const FromLogin = () => {
    const [text, setText] = React.useState("");

    return (
        <View>

            <h1>WelCome to your</h1>

            <h5>welcome to your app. Build your own social network in minustes</h5>



            <Button
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <hr />
            <hr />
            <Button
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />


        </View>

    );
};

export default FromLogin;