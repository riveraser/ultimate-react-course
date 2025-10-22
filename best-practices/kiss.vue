<script setup lang="ts">
import { ref, computed } from 'vue';

const message = ref<string>('Hello Vue 3 + TypeScript!');

// Mocks for demonstration purposes
const project = ref({
    id: 1,
    title: 'No Title',
    createTs: new Date().toISOString(),
    updateTs: new Date().toISOString()
});
const jobVersionsService = {
    jobVersions: [
        {
            id: 1,
            createTs: new Date().toISOString(),
            updateTs: new Date().toISOString(),
            version: '1.0.0'
        }
    ]
};


// Check if this is a new project by verifying if all conditions are true:
// 1. There are no job versions (new job)
// 2. The project's update timestamp is very close to its creation timestamp (indicating no actual updates)
// 3. The project has no title or has the default "No Title"
const isNewProjectOptimized = computed(() => {
  if (!project.value) return false;
  const createTime = new Date(project.value.createTs || 0).getTime();
  const versions = jobVersionsService.jobVersions;
  const title = (project.value.title || '').trim().toLowerCase();
  return Math.abs(new Date(project.value.updateTs || 0).getTime() - createTime) / 1000 <= 5
    && (versions.length === 0 || (versions.length === 1
    && Math.abs(new Date(versions[0].createTs).getTime() - createTime) / 1000 <= 5))
    && (!title || title === 'no title');
});

// Refactored version for improved readability and maintainability
// this is a KISS (Keep It Simple, Stupid) principle example
// even if the `isNewProjectOptimized` is more concise, the following version is easier 
// to understand at a glance   
const isNewProject = computed(() => {
  if (!project.value) return false;

  const updateTime = new Date(project.value.updateTs || 0).getTime();
  const createTime = new Date(project.value.createTs || 0).getTime();
  const timeDifferenceInSeconds = Math.abs(updateTime - createTime) / 1000;
  const isRecentlyCreated = timeDifferenceInSeconds <= 5;

  const noJobVersions = jobVersionsService.jobVersions.length === 0;

  // Edge case: some times the side effect creates the first version when the user lands on the form
  const isOneJobVersion = jobVersionsService.jobVersions.length === 1;
  const isRecentlyVersionCreated =
    isOneJobVersion &&
    Math.abs(new Date(jobVersionsService.jobVersions[0].createTs).getTime() - createTime) / 1000 <=
      5;

  const projectTitle = (project.value.title || '').trim().toLowerCase();
  const hasDefaultOrNoTitle = !projectTitle || projectTitle === 'no title';

  return (noJobVersions || isRecentlyVersionCreated) && isRecentlyCreated && hasDefaultOrNoTitle;
});



</script>
<template>
  <div>
    <h1>KISS Principle Example</h1>
    <div>{{ message }}</div>
    <p>
      The KISS (Keep It Simple, Stupid) principle emphasizes simplicity in
      design and implementation. This example demonstrates a straightforward Vue
      3 component using TypeScript.
    </p>
    <div v-if="isNewProject">
      <strong>This is a new project (original logic).</strong>
    </div>
    <div v-else>
        <strong>This is NOT a new project (original logic).</strong>
    </div>
  </div>
</template>
<style scoped>
h1 {
  color: #42b883;
}
</style>
