<template>
  <div class="index container">
    <div class="card" v-for="recipe in recipes" :key="recipe.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteRecipe(recipe.id)">delete</i>
        <h2 class="indigo-text">{{ recipe.title }}</h2>
        <ul class="ingridients">
          <li v-for="(ing, index) in recipe.ingredients" :key="index">
            <span class="chip">{{ ing }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "Index",
  data() {
    return {
      recipes: []
    };
  },
  methods: {
    deleteRecipe(id) {
      db.collection("recipes")
        .doc(id)
        .delete()
        .then(() => {
          this.recipes = this.recipes.filter(recipe => {
            return recipe.id != id;
          });
        });
    }
  },
  created() {
    // fetch data from the firestore
    db.collection("recipes")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let recipe = doc.data();
          recipe.id = doc.id;
          this.recipes.push(recipe);
        });
      });
  }
};
</script>


<style >
.index {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}
.index h2 {
  font-size: 1.8em;
  text-align: center;
  margin-top: 0px;
}

.index .ingridients {
  margin: 20px auto;
}

.index li {
  display: inline-block;
}

.index .delete {
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.4em;
}
</style>
