<template>
<nav class="navbar navbar-default navbar-static-top">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand">Vue Router Example</a>
        </div>
    </div>
</nav>
</template>

<script>
export default {
  name: "navBar",
  data() {
    return {
      AnArray: ["herro", "to", "you"],
      question: ""
    };
  },
  methods: {
    nameOfAFunction: function(input) {
      console.log("funkyy");
    }
  },
  created: function() {}
};
</script>
