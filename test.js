import React, {useCallback, useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import RangeSlider from 'rn-range-slider';

const CommonRangePriceSlider = ({
  minPrice,
  maxPrice,
  steps,
  onSlidingComplete,
}) => {
  const [low, setLow] = useState(minPrice);
  const [high, setHigh] = useState(maxPrice);

  const renderThumb = useCallback(
    () => <TouchableOpacity style={styles.thumbStyle} />,
    [],
  );
  const renderRail = useCallback(() => <View style={styles.railStyle} />, []);
  const renderRailSelected = useCallback(
    () => <View style={styles.selectedRailStyle} />,
    [],
  );
  const renderLabel = useCallback(
    value => <Text style={styles.labelStyle}>{value}</Text>,
    [],
  );
  const renderNotch = useCallback(() => <View style={styles.notchStyle} />, []);
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
    onSlidingComplete(low, high);
  }, []);

  return (
    <View style={{alignItems: 'center'}}>
      {/* <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Text style={styles.priceRangeText}>{minPrice}</Text>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Text style={styles.priceRangeText}>{maxPrice}</Text>
        </View>
      </View> */}
      <RangeSlider
        style={{
          width: '100%',
          marginTop: 20,
          marginBottom: 12,
        }}
        min={minPrice}
        max={maxPrice}
        step={steps}
        floatingLabel
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderLabel={renderLabel}
        renderNotch={renderNotch}
        onValueChanged={handleValueChange}
        // high={maxValue}
        // low={minValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  priceRangeText: {
    fontSize: 10,
    color: "grey",
  },
  thumbStyle: {
    height: 28,
    width: 28,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 90,
  },
  railStyle: {
    height: 4,
    width: '100%',
    backgroundColor: "grey",
  },
  selectedRailStyle: {
    height: 4,
    width: '100%',
    backgroundColor: "red",
  },
  labelStyle: {
    color: "grey",
    fontSize: 10,
  },
  notchStyle: {},
});

export default CommonRangePriceSlider;
