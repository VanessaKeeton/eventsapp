<template>
  <ev-header :semanticLevel="1" displayAs="heading1">Events</ev-header>
  <ul :class="$style.eventList">
    <li :class="$style.eventListItem" v-for="event in events" :key="event.id">
      <h2 :class="$style.eventDate">{{ prettyDate(event.start.local) }}</h2>
      <img :src="event.logo.url" alt="">
      <ev-header :semanticLevel="3" displayAs="heading2">{{ event.name.text }}</ev-header>
      <p :class="$style.eventDescription">{{ event.description.text }}</p>
      <address :class="$style.eventAddress">
        <span>{{ event.venue.name }}</span><br>
        <span v-if="event.venue.address.address_1">{{ event.venue.address.address_1 }}</span><br>
        <span v-if="event.venue.address.address_2">{{ event.venue.address.address_2 }}</span>
      </address>
      <div :class="$style.purchaseLinkContainer"><ev-link :href="`${event.url}?aff=website`" target="_blank" asButton>Purchase Tickets</ev-link></div>
    </li>
    <li v-if="loading">loading...</li>
  </ul>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import EvHeader from './header'
import EvLink from './link'
import prettyDate from '../filters/prettyDate'

export default {
  name: `eventbrightFeed`,
  components: {
    EvHeader,
    EvLink
  },
  setup() {
    const events = ref(null);
    const loading = ref(true);
    const token = `S7R32KSQEZUKBJS4O4HI`;
    const organizationId = `260888089976`;

    const eventsToRequest = () => {
      return new Promise((resolve, reject) => {
      axios({
        method: `get`,
        params: {
          status:`live`,
          time_filter:`current_future`,
          token:token,
          page_size:`50`
        },
        url: `https://www.eventbriteapi.com/v3/organizations/${organizationId}/events/`,
      }).then(data => {
            const events = data.data.events.map(event=>event.id)
            resolve(events)
          }
        ).catch((err)=> {
          reject(err)
        })
    })
    }

    const getEvents = async ()=> {
      loading.value = true;
      const getList = await eventsToRequest();
      axios({
          method: `get`,
          url: `https://www.eventbriteapi.com/v3/events/`,
          params: {
            token: token,
            event_ids: getList.join(`,`),
            expand:"venue"
          }
        }).then(data => {
          const sortedEvents = data.data.events.sort((a, b) => (new Date(a.start.local) - new Date(b.start.local)))
          events.value = sortedEvents
          console.log(data.data)
          loading.value = false
        })
    }

    getEvents();

    return {
      events,
      loading,
      prettyDate
    }
  },
}
</script>

<style lang="scss" module>
.eventListItem:not(last) {
  margin-bottom: 1.66em;
  border-bottom: 1px solid #ccc;
  padding-bottom: 16px;
}
.eventDescription {
  line-height: 1.25;
  margin-bottom: 1em;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: .25pt;
}
.eventDate {
  margin-bottom: .5em;
  font-size: 14px;
  color: var(--primary-branding-color);
  font-weight: 400;
  letter-spacing: .25pt;
}
.purchaseLinkContainer {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.eventAddress {
    font-size: 12px;
    color: var(--primary-branding-color);
}
</style>