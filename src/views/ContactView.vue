<script >
import contactPicture from "../assets/contact.png";
export default {
  data() {
    return {
      title: "Let's get in touch",
      width: 200,
      aspectRatio: 16 / 9,
      contactPic: contactPicture,
      loading: false,

      valid: false,
      firstname: "",
      message: "",
      messageRules: [
        (v) => !!v || "Message is required",
        (v) => v.length >= 10 || "Messsage must be grater than 10 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    navigate(path) {
      this.$router.push(path);
    },
    async submit() {
      const { valid } = await this.$refs.form.validate();
      if (valid) {
        this.loading = true;
      }
    },
  },
};
</script>
<template>
  <div class="contact">
    <v-avatar size="100" color="primary" class="avatar">
      <v-img
        :aspect-ratio="aspectRatio"
        :width="width"
        :src="contactPic"
        cover
      />
    </v-avatar>
    <div class="subTitle">{{ title }}</div>
    <p>You can reach me using following option below.</p>
    <p>Here, check out my social links</p>
    <div class="socials">
      <a href=""><font-awesome-icon icon="fa-brands fa-github" size="lg" /></a>
      <a href=""
        ><font-awesome-icon icon="fa-brands fa-linkedin-in" size="lg"
      /></a>
      <a href=""
        ><font-awesome-icon icon="fa-solid fa-envelope " size="lg"
      /></a>
    </div>
    <p class="mt-3 mb-1">OR</p>
    <v-form ref="form" v-model="valid" lazy-validation class="form">
      <v-container>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
          variant="outlined"
          :disabled="loading"
          
        ></v-text-field>
        <v-textarea
          class="mt-2 mb-6"
          label="Yor message..."
          v-model="message"
          :rules="messageRules"
          variant="outlined"
          :disabled="loading"
        ></v-textarea>
        <div class="submit">
          <v-btn icon @click="submit" :loading="loading">
            <font-awesome-icon icon="fa-solid fa-paper-plane" />
          </v-btn>
        </div>
      </v-container>
    </v-form>
  </div>
</template>

<style lang="scss" >
@media (min-width: 1024px) {
  .contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    .submit {
      display: flex;
      justify-content: center;
      width: 100%;
    }
    .form {
      width: 100%;
    }
    .socials {
      display: flex;
      gap: 0.5rem;
      margin-top: 0.5rem;
    }
    .subTitle {
      font-size: 24px;
      color: #fff;
      font-weight: 100;
      margin-bottom: 0.5rem;
    }
    p {
      a {
        background: transparent;
        border: none;
        border-radius: 0;
        text-decoration: underline;

        cursor: pointer;
      }
    }
  }
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
