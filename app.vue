<template>
  <body class="min-h-[100vh]">
    <div class="flex flex-col justify-between">
      <PageHeader></PageHeader>
      <main class="min-h-[100vh] w-[70vw] max-w-[1000px] flex self-center">
        <NuxtLayout>
          <NuxtPage>

          </NuxtPage>
        </NuxtLayout>
      </main>
      <PageFooter>

      </PageFooter>
    </div>
  </body>
</template>

<script lang="ts">
// Components
import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue';

export default defineComponent({
  name: 'app',
  components: { PageHeader, PageFooter },
})
</script>