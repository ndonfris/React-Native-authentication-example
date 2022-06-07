import LottieView from 'lottie-react-native';
import {AuthContext} from "contexts/AuthContext";
import {useContext, useRef, useEffect} from "react";
import {View, StyleSheet} from "react-native";
 


export default function Splash({ showSplash }: { showSplash: boolean}) {

    const {state, dispatch} = useContext(AuthContext);
    const animation = useRef(null);

    useEffect(() => {
        // @ts-ignore
        animation.current.play();
    }, [state.isLoading]);

    return (
    ( state.isLoading || showSplash )
        ? <View style={styles.animationContainer}>
            <LottieView
                ref={animation}
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: '#fff',
                }}
                loop={false}
                onAnimationFinish={() => {
                    dispatch({type: 'setIsLoading', payload: false});
                    if (showSplash) {
                        dispatch({type: 'setIsLoggedIn', payload: true});
                    }
                }}
                source={require('../../assets/load_golfball_animation.json')}
            />
        </View>
        : <></>
    );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
