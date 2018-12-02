<template>
  <div>
    <!-- <label>
      AutoComplete
      <GmapAutocomplete @place_changed="setPlace" ref="map" :draggable="true">
      </GmapAutocomplete>
      <button @click="usePlace">Add</button>
    </label>
    <br/> -->

    <GmapMap style="width: 700px; height: 500px;" :zoom="12" :center="{lat: 7.996769, lng: 98.302661}">
      <!-- <GmapMarker v-for="(marker, index) in markers"
        :key="index"
        :position="marker.position"
        /> -->
      <GmapMarker
        :position="{
          lat: 7.996769,
          lng: 98.302661,
        }"/>
    </GmapMap>
  </div>
</template>

<script>

export default {
  data() {
    return {
      markers: [],
      place: null,
    }
  },
  description: 'Autocomplete Example (#164)',
  methods: {
    setDescription(description) {
      this.description = description;
    },
    setPlace(place) {
      this.place = place
    },
    usePlace(place) {
      if (this.place) {
        this.markers.push({
          position: {
            lat: this.place.geometry.location.lat(),
            lng: this.place.geometry.location.lng(),
          }
        })
        this.place = null;
      }
    }
  }
}
</script>