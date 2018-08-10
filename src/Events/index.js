import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import FormStyles from '../styles/shared/formStyles'
import SlideShowStyles from '../styles/shared/slideshowStyles'
import EventStyles from '../styles/shared/eventStyles'

const styles = SharedStyles.createStyles()
const formStyles = FormStyles.createStyles()
const slideshowStyles = SlideShowStyles.createStyles()
const eventStyles = EventStyles.createStyles()

export default function EventsIndex(props) {
  const {navigation: {navigate}} = props

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

      <TextInput
        style={formStyles.input}
        placeholder="Search Artists, Shows, Venues"
        disabled
      />

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

          <View style={slideshowStyles.sectionBottom}>
            <View style={styles.priceTagContainer}>
              <Text style={styles.priceTag}>$30</Text>
            </View>
            <Text style={slideshowStyles.header}>Childish Gambino</Text>
            <Text style={slideshowStyles.details}>Fri, July 20 - 8:50 pm - The Warfield</Text>
          </View>
        </View>
      </View>



      <Text style={styles.sectionHeader}>Upcoming</Text>

      <View style={eventStyles.eventContainer}>
        <Image
          style={eventStyles.eventImage}
          source={require('../../assets/event-smaller-1.png')}
        />

        <View style={eventStyles.detailsContainer}>
          <View style={eventStyles.sectionTop}>
            <View style={eventStyles.iconLinkStarContainerSmall}>
              <Icon style={eventStyles.iconLinkStarSmall} name="star" />
            </View>
            <View style={styles.avatarContainer}>
              <Image
                style={styles.avatarSmall}
                source={require('../../assets/avatar-male.png')}
              />
              <Image
                style={styles.avatarSmall}
                source={require('../../assets/avatar-female.png')}
              />
              <Image
                style={styles.avatarSmall}
                source={require('../../assets/avatar-female.png')}
              />
            </View>
          </View>
          <View style={eventStyles.sectionBottom}>
            <View style={styles.priceTagContainer}>
              <Text style={styles.priceTag}>$30</Text>
            </View>
          </View>
        </View>

        <View style={eventStyles.detailsContainerBottom}>
          <Text style={eventStyles.header}>River Whyless</Text>
          <Text style={eventStyles.details}>Fri, July 20 - 8:50 pm - The Warfield</Text>
        </View>
      </View>


      <View style={eventStyles.eventContainer}>
        <Image
          style={eventStyles.eventImage}
          source={require('../../assets/event-smaller-2.png')}
        />

        <View style={eventStyles.detailsContainer}>
          <View style={eventStyles.sectionTop}>
            <View style={eventStyles.iconLinkStarContainerSmall}>
              <Icon style={eventStyles.iconLinkStarSmall} name="star" />
            </View>
            <View style={styles.avatarContainer}>
              <Image
                style={styles.avatarSmall}
                source={require('../../assets/avatar-female.png')}
              />
              <Image
                style={styles.avatarSmall}
                source={require('../../assets/avatar-male.png')}
              />
              <Image
                style={styles.avatarSmall}
                source={require('../../assets/avatar-female.png')}
              />
            </View>
          </View>
          <View style={eventStyles.sectionBottom}>
            <View style={styles.priceTagContainer}>
              <Text style={styles.priceTag}>$30</Text>
            </View>
          </View>
        </View>

        <View style={eventStyles.detailsContainerBottom}>
          <Text style={eventStyles.header}>Beyonce</Text>
          <Text style={eventStyles.details}>Fri, July 20 - 8:50 pm - The Warfield</Text>
        </View>
      </View>


      <View style={eventStyles.eventContainer}>
        <Image
          style={eventStyles.eventImage}
          source={require('../../assets/event-smaller-3.png')}
        />

        <View style={eventStyles.detailsContainer}>
          <View style={eventStyles.sectionTop}>
            <View style={eventStyles.iconLinkStarContainerSmall}>
              <Icon style={eventStyles.iconLinkStarSmall} name="star" />
            </View>
            <View style={styles.avatarContainer}>
              <Image
                style={styles.avatarSmall}
                source={require('../../assets/avatar-male.png')}
              />
              <Image
                style={styles.avatarSmall}
                source={require('../../assets/avatar-female.png')}
              />
              <Image
                style={styles.avatarSmall}
                source={require('../../assets/avatar-female.png')}
              />
            </View>
          </View>
          <View style={eventStyles.sectionBottom}>
            <View style={styles.priceTagContainer}>
              <Text style={styles.priceTag}>$30</Text>
            </View>
          </View>
        </View>

        <View style={eventStyles.detailsContainerBottom}>
          <Text style={eventStyles.header}>Drake</Text>
          <Text style={eventStyles.details}>Fri, July 20 - 8:50 pm - The Warfield</Text>
        </View>
      </View>


      <View style={eventStyles.eventContainer}>
        <Image
          style={eventStyles.eventImage}
          source={require('../../assets/event-smaller-4.png')}
        />

        <View style={eventStyles.detailsContainer}>
          <View style={eventStyles.sectionTop}>
            <View style={eventStyles.iconLinkStarContainerSmall}>
              <Icon style={eventStyles.iconLinkStarSmall} name="star" />
            </View>
            <View style={styles.avatarContainer}>
              <Image
                style={styles.avatarSmall}
                source={require('../../assets/avatar-male.png')}
              />
              <Image
                style={styles.avatarSmall}
                source={require('../../assets/avatar-female.png')}
              />
              <Image
                style={styles.avatarSmall}
                source={require('../../assets/avatar-female.png')}
              />
            </View>
          </View>
          <View style={eventStyles.sectionBottom}>
            <View style={styles.priceTagContainer}>
              <Text style={styles.priceTag}>$30</Text>
            </View>
          </View>
        </View>

        <View style={eventStyles.detailsContainerBottom}>
          <Text style={eventStyles.header}>Ed Sheeran</Text>
          <Text style={eventStyles.details}>Fri, July 20 - 8:50 pm - The Warfield</Text>
        </View>
      </View>

    </ScrollView>
  );
}
