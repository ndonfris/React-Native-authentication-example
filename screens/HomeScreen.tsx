import React, {useState} from "react";
import { BottomNavigation } from "react-native-paper";
import { StyleSheet, View } from "react-native";


export default function HomeScreen() {
    const [index, setIndex] = useState(0);
    /* useState hook, defines values for it's inner items */
    const [routes] = useState([
        {key: "search", title: "Search",icon: "golf-cart",color: "blue"},
        {key: "saved", title: "Saved", icon: "golf", color: "pink" },
        {key: "account", title: "Browse",icon: "account",color: "yellow"},
    ]);

  /* maps the state to the actual page route */
    const renderScene = BottomNavigation.SceneMap({
        search: SearchStack,
        saved: SavedStack,
        account: AccoutStack,
    });

  /* return the bottom tabbar component and render the active page (initializes to Search)  */
  return (
    <View style={styles.container}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        shifting={true}
        barStyle={{
          backgroundColor: "blue",
          height: 70,
        }}
        inactiveColor={"lightGrey"}
        activeColor={"white"}
      />
    </View>
  );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

