<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['teams', 'users'],
  components: {
    UserItem,
  },
  data() {
    return {
      members: [],
      teamName: 'Test',
      // members: [
      //   { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
      //   { id: 'u2', fullName: 'Praveen Kumar', role: 'Engineer' },
      //   { id: 'u3', fullName: 'Julie Jones', role: 'Engineer' },
      //   { id: 'u4', fullName: 'Alex Blackfield', role: 'Consultant' },
      //   { id: 'u5', fullName: 'Marie Smith', role: 'Consultant' },
      // ],
      // members: [
      //   { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
      //   { id: 'u2', fullName: 'Max Schwarz', role: 'Engineer' },
      // ],
    };
  },
  methods: {
    loadTeamMembers(newRoute) {
      console.log('this.$route.path: ', newRoute.path);
      console.log(
        'this.$route.params: ',
        newRoute.params,
        newRoute.params.teamId
      );
      const teamId = newRoute.params.teamId;
      const selectedTeam = this.teams.find((team) => teamId === team.id);
      console.log('selectedTeam:', selectedTeam);

      const members = selectedTeam.members;
      const selectedMembers = [];
      for (const member of members) {
        // console.log('member: ', member);
        const selectedUser = this.users.find((user) => user.id === member);
        console.log('selectedUser: ', selectedUser);
        selectedMembers.push(selectedUser);
      }
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    },
  },
  created() {
    this.loadTeamMembers(this.$route);
  },
  watch: {
    $route(newRoute) {
      this.loadTeamMembers(newRoute);
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
