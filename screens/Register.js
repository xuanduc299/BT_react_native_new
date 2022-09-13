import * as React from 'react';
import { View, Button } from 'react-native';
import { TextInput } from 'react-native-paper';

const Register = () => {
    const [text, setText] = React.useState("");

    return (
        <View>
            <h1>Create new account</h1>

            <TextInput
                label="Full Name"
                value={text}
                onChangeText={text => setText(text)}
            />
            <hr />

            <TextInput
                label="Phone Number"
                value={text}
                onChangeText={text => setText(text)}
            />
            <hr />

            <TextInput
                label="Email"
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
        </View>

    );
};

export default Register;