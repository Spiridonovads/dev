const app = Vue.createApp({
  data() {
    return {
      isLoading: true,
      showPopup: false,
      formData: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
  methods: {
    submitForm() {
      alert(
        `Имя: ${this.formData.name}\nEmail: ${this.formData.email}\nПароль: ${this.formData.password}`
      );
      this.showPopup = false;
      this.formData = { name: "", email: "", password: "" };
    },
  },
});

app.mount("#app");
