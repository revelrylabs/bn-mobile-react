import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, TextInput, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import FormStyles from '../styles/shared/formStyles'
import SlideShowStyles from '../styles/shared/slideshowStyles'
import EventStyles from '../styles/shared/eventStyles'

const styles = SharedStyles.createStyles()
const formStyles = FormStyles.createStyles()
const slideshowStyles = SlideShowStyles.createStyles()
const eventStyles = EventStyles.createStyles()

function EventItemView({
  bgImage,
  avatarImages,
  priceDollars,
  titleText,
  scheduleText,
  onPress,
}) {
  return (
    <TouchableHighlight underlayColor="#fff" onPress={onPress}>
      <View style={eventStyles.eventContainer}>
        <Image
          style={eventStyles.eventImage}
          source={bgImage}
        />

        <View style={eventStyles.detailsContainer}>
          <View style={eventStyles.sectionTop}>
            <View style={eventStyles.iconLinkStarContainerSmall}>
              <Icon style={eventStyles.iconLinkStarSmall} name="star" />
            </View>
            <View style={styles.avatarContainer}>
              {avatarImages.map((source, key) => <Image style={styles.avatarSmall} source={source} key={key} />)}
            </View>
          </View>
          <View style={eventStyles.sectionBottom}>
            <View style={styles.priceTagContainer}>
              <Text style={styles.priceTag}>${priceDollars}</Text>
            </View>
          </View>
        </View>

        <View style={eventStyles.detailsContainerBottom}>
          <Text style={eventStyles.header}>{titleText}</Text>
          <Text style={eventStyles.details}>{scheduleText}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default function EventsIndex(props) {
  const { navigation: { navigate } } = props

  return (
    <ScrollView style={styles.container}>

      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.header}>Explore</Text>
        <View style={styles.iconLinkContainer}>
          <Image
            style={styles.iconImageSmall}
            source={require('../../assets/heart-small.png')}
          />
          <Text style={styles.iconLinkText}>NYC</Text>
          <Icon style={styles.iconLink} name="keyboard-arrow-down" />
        </View>
      </View>

      <View style={formStyles.searchContainer}>
        <Icon style={formStyles.searchIcon} name="search" />
        <TextInput
          style={formStyles.searchInput}
          placeholder="Search artists, shows, venues..."
          searchIcon={{ size: 24 }}
          disabled
        />
      </View>

      <Text style={styles.sectionHeader}>Hot This Week</Text>

      <View style={slideshowStyles.slideshowContainer}>
        <Image
          style={slideshowStyles.slideShowImage}
          source={require('../../assets/featured-1.png')}
        />

        <View style={slideshowStyles.detailsContainer}>
          <View style={slideshowStyles.sectionTop}>
            <View style={styles.iconLinkStarContainer}>
              <Icon style={styles.iconLinkStar} name="star" />
            </View>
            <View style={styles.avatarContainer}>
              <Image
                style={styles.avatar}
                source={require('../../assets/avatar-male.png')}
              />
              <Image
                style={styles.avatar}
                source={require('../../assets/avatar-female.png')}
              />
            </View>
          </View>

          <View style={slideshowStyles.sectionMiddle}>
            <Icon style={slideshowStyles.slideShowIconLinkLeft} name="keyboard-arrow-left" />
            <Icon style={slideshowStyles.slideShowIconLinkRight} name="keyboard-arrow-right" />
          </View>

          <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => navigate('EventsShow', {name: 'Childish Gambino'})}>
            <View style={slideshowStyles.sectionBottom}>
              <View style={styles.priceTagContainer}>
                <Text style={styles.priceTag}>$30</Text>
              </View>
              <Text style={slideshowStyles.header}>Childish Gambino</Text>
              <Text style={slideshowStyles.details}>Fri, July 20 - 8:50 pm - The Warfield</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>

      <Text style={styles.sectionHeader}>Upcoming</Text>

      <EventItemView
        onPress={() => navigate('EventsShow', {name: 'River Whyless'})}
        bgImage={require('../../assets/event-smaller-1.png')}
        avatarImages={[
          require('../../assets/avatar-male.png'),
          require('../../assets/avatar-female.png'),
          require('../../assets/avatar-female.png'),
        ]}
        priceDollars={30}
        titleText="River Whyless"
        scheduleText="Fri, July 20 - 8:50 pm - The Warfield"
      />
      <EventItemView
        onPress={() => navigate('EventsShow', {name: 'Beyonce'})}
        bgImage={require('../../assets/event-smaller-2.png')}
        avatarImages={[
          require('../../assets/avatar-female.png'),
          require('../../assets/avatar-male.png'),
          require('../../assets/avatar-female.png'),
        ]}
        priceDollars={30}
        titleText="Beyonce"
        scheduleText="Fri, July 20 - 8:50 pm - The Warfield"
      />
      <EventItemView
        onPress={() => navigate('EventsShow', {name: 'Drake'})}
        bgImage={require('../../assets/event-smaller-3.png')}
        avatarImages={[
          require('../../assets/avatar-male.png'),
          require('../../assets/avatar-female.png'),
          require('../../assets/avatar-female.png'),
        ]}
        priceDollars={30}
        titleText="Drake"
        scheduleText="Fri, July 20 - 8:50 pm - The Warfield"
      />
      <EventItemView
        onPress={() => navigate('EventsShow', {name: 'Ed Sheeran'})}
        bgImage={require('../../assets/event-smaller-4.png')}
        avatarImages={[
          require('../../assets/avatar-male.png'),
          require('../../assets/avatar-female.png'),
          require('../../assets/avatar-female.png'),
        ]}
        priceDollars={30}
        titleText="Ed Sheeran"
        scheduleText="Fri, July 20 - 8:50 pm - The Warfield"
      />
    </ScrollView>
  );
}
