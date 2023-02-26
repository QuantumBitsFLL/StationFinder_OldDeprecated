import React from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import colors from '../../assets/color';
import FontText from '../../Components/common/FontText';
import Logo from '../../Components/common/logo';
import {hp, wp, normalize, isX} from '../../styles/responsiveScreen';
// import SvgIcons from '../../assets/SvgIcons';
import BigButton from '../../Components/BigButton';
import { onBoardingData } from '../../Utils/data';

import CheckMark from '../../assets/svgs/Login/done.svg';

export const routeName = 'Onboarding';

const DoneSvg = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z" fill="#FD8839"/>
</svg>

const RadioSvg = () => <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="17" height="17" rx="8.5" fill="white" stroke="#FD8839"/>
<rect x="4.5" y="4.5" width="9" height="9" rx="4.5" fill="#FD8839"/>
</svg>



const Onboarding = ({navigation}) => {
  const _renderItems = (item, index) => {
    return (
      <View style={styles.rowview}>
        <View style={styles.square}>
        <DoneSvg></DoneSvg>
          {/* <SvgIcons.Vector width={hp(5)} height={hp(5)} /> */}
        </View>
        <View>
          <FontText
            size={normalize(18)}
            name={'poppins-medium'}
            color="black"
            pLeft={wp(4)}
            textAlign="left">
            {item.name}
          </FontText>
          <FontText
            size={normalize(14)}
            name={'poppins-regular'}
            color="lightViolet"
            pLeft={wp(4)}
            textAlign="left">
            {item.sub}
          </FontText>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Logo />
      <FontText
        name={'poppins-medium'}
        size={normalize(26)}
        pTop={hp(1)}
        color={'Violet'}>
        {'WELCOME'}
      </FontText>
      {/* <SvgIcons.Combers style={{marginLeft: 3}} /> */}
      <FontText
        name={'poppins-regular'}
        size={normalize(14)}
        pTop={hp(2)}
        pRight={isX ? wp(12) : wp(8)}
        color={'lightViolet'}>
        {'CE VRETI AICI'}
      </FontText>
      <FlatList
        scrollEnabled={false}
        data={onBoardingData}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => _renderItems(item)}
      />
      
      <DoneSvg></DoneSvg>

      <RadioSvg></RadioSvg>

      <BigButton title ={"CONTINUE"}  onClick = {() => navigation.navigate('Map')} style ={{marginBottom:hp(4)}}  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: isX ? hp(7.5) : hp(5.5),
    paddingHorizontal: wp(4.5),
    backgroundColor: colors.white,
  },
  square: {
    height: wp(15),
    width: wp(15),
    backgroundColor: colors.lightOrange1,
    borderRadius: wp(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(2.5),
  },
});

export default Onboarding;
