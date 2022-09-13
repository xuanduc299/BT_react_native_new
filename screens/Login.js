import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { TextInput } from 'react-native-paper';

const Login = () => {
    const [text, setText] = React.useState("");

    return (
        <View>
            <h1>Sgin In</h1>

            <TextInput
                label="Email or Phone Number"
                value={text}
                onChangeText={text => setText(text)}
            />
            <hr />
            <TextInput
                label="Password"
                value={text}
                onChangeText={text => setText(text)}
            />


            <Button
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <hr />
            <Text>OR</Text>
            <hr />
            <Button
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />


        </View>

    );
};

export default Login;