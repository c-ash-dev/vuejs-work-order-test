<template>
  <div class="workorder">
    <div class="heading">
      <h3>{{ workorder.department }}</h3>
      <p>Date Submitted: {{ workorder.date }}</p>
    </div>
    <div class="info">
      <p>Description: {{ workorder.description }}</p>
      <p>Priority Level: </p>
      <form action="assign">
        <select name="priority">
          <option value="low">Low</option>
          <option value="mediu ">Medium</option>
          <option value="High">High</option>
        </select>
        <p>Assign to: </p>
        <select name="technician">
          <option value="">Jerry</option>
          <option value="">Marla</option>
          <option value="">Nancy</option>
        </select>
        <br><br>
        <input type="text" name="instructions" placeholder="Instructions for technician"/>
        <input type="button" @click.prevent="assignWO" value="Assign">
      </form>
    </div>
  </div>
</template>

<script>

export default {
  props: ['workorder'],

  methods: {
    assignWO() {

    }
  }
}

</script>

<style lang="scss">
.workorder {
  width: 100%;
  min-height: 150px;
  margin-top: 10px;
  padding: 15px;
  border: 1px solid #000;
}

.heading {

}
</style>
