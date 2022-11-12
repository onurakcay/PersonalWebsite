<script>
import vueLogo from "../assets/techs/vue.png";
import laravelLogo from "../assets/techs/laravel.png";
import awsLogo from "../assets/techs/aws.png";
import flutterLogo from "../assets/techs/flutter.png";

export default {
  data() {
    return {
      msg: "Hello 🖐️",
      logos: [
        { name: "VueJS", url: vueLogo },
        { name: "Laravel", url: laravelLogo },
        { name: "Flutter", url: flutterLogo },
        { name: "AWS", url: awsLogo },
        { name: "Docker", url: awsLogo },
        { name: "RabbitMQ", url: awsLogo },
        { name: "Drupal", url: awsLogo },
      ],
      width: 200,
      aspectRatio: 16 / 9,
    };
  },
  methods: {
    navigate(path) {
      this.$router.push(path);
    },
  },
  created() {
    console.log(this.logos[0]);
  },
};
</script>
<template>
  <div class="techStack">
    <div class="closeButton" @click="navigate('about')">Back to About</div>
    <v-row no-gutters>
      <v-col v-for="(logo, index) in logos" :key="index">
        <v-card class="ma-2 pa-2" max-width="344" variant="tonal" :key="item">
          <v-card-item>
            <div>
              <div class="text-h6 mb-1">
                <v-img
                  :aspect-ratio="aspectRatio"
                  :width="width"
                  :src="logo.url"
                  contain
                />
              </div>
              <div class="text-h6 mb-1 mt-6 techName">
                {{ logo.name }}
              </div>
            </div>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<style lang="scss" >
.techStack {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  .techName {
    text-align: center;
  }
  .closeButton {
    cursor: pointer;
    text-align: end;
    width: 100%;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
}
</style>
