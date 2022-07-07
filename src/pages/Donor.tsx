import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import TopDrawerNavigation from '../Menu/TopDrawerNavigation'
import Carousel, {Pagination} from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../components/molecules/CarouselCardItem'
import data from '../components/molecules/DataCardDonateurs'

const Donor = () => {
  const isCarousel = React.useRef(null)
  const [index, setIndex]= React.useState(0)
  return (
    <View style={styles.container}>
      <TopDrawerNavigation/>
      <View style={styles.cardStyle}>
        <Carousel
          layout="stack"
          layoutCardOffset={20}
          ref={isCarousel}
          data={data}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          onSnapToItem={(index) => setIndex(index)}
          useScrollView={true}       
        />
        <Pagination
          dotsLength={data.length}
          activeDotIndex={index}
          //carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.92)'
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={false}
        />
      </View>
    </View>
  )
}


export default Donor

const styles = StyleSheet.create({
  cardStyle: {
    flex : 1,
    alignItems : "center"
    },
  container:{
    padding: 16,
    paddingTop: 40,
    flex: 1,
    backgroundColor : "#ECEBE1",
  },
})