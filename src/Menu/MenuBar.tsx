import * as React from "react";
import { Button, View} from "react-native";
import {Authentification, Home} from "../pages";

function MenuBar({ navigation }) {
    return (
        <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
            <Button
                onPress={() => navigation.navigate("Home")}
                title="Menu"
            />
        </View>
    );
}

function NotificationScreen({ navigation }) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button onPress={() => navigation.navigate("Authentification")} title={"Auth"}/>
        </View>
    );
}

export default MenuBar

