import { useState } from "react";
import { View } from "react-native";

const Login = () => {
    const [error, setError] = useState('')
    return (
        <View>
            <form>
                <input type='email' placeholder='email'/>
            </form>
        </View>
    )
}

export default Login;