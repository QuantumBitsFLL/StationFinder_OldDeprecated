//import liraries
import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, Platform} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import colors from '../../../assets/color';
// import SvgIcons from '../../../assets/SvgIcons';
import {hp, wp, normalize, isIOS, isX} from '../../../styles/responsiveScreen';

const {width, height} = Dimensions.get('screen');

// create a component
const Logo = props => {
  return (
    <View>
      <div>Change me in Components/common/logo/index.js</div>
      {/* <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[colors.darkorange, colors.darkred]}
        style={[styles.linearGradient, props.style]}>
        <SvgIcons.Vector style={{height: width * 0.4, width: width * 0.5}} />
      </LinearGradient> */}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    height: hp(10),
    width: hp(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(5),
    marginTop: Platform.OS == 'ios' ? 0 : height * 0.015,
  },
});

export default Logo;
