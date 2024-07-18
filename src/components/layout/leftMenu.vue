<template>
  <div id="leftMenu">
    <ul class="leftMenu-list">
      <li
        class="leftMenu-item"
        :class="{
          active: `${currentRoute}` == item.route,
        }"
        v-for="item in menuList"
        :key="item.route"
        @click="jummp(item.route)"
      >
        <div class="leftMenu-icon">
          <i class="asw-icon" :class="item.icon"></i>
        </div>
        <div class="leftMenu-text">{{ item.name }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { toRefs, ref, watch } from 'vue';
import { useI18n } from "vue-i18n"

const props = defineProps({
  test: {
    type: String,
  },
});

const { t } = useI18n()

const router = useRouter();

const currentRoute = ref('');
watch(
  () => router.currentRoute.value,
  (value) => {
    currentRoute.value = value.path;
  },
  { immediate: true }
);

const jummp = (path) => {
  router.push({
    path: path,
  });
};

const menuList = ref([
  {
    name: 'Workbooks',
    route: '/workbooks',
    icon: 'icon-Workbooks',
  },
  {
    name: 'Applications',
    route: '/applications',
    icon: 'icon-Applications',
  },
  {
    name: 'Signatures',
    route: '/signatures',
    icon: 'icon-Signatures',
  },
  {
    name: 'Pcaps',
    route: '/pcaps',
    icon: 'icon-Pcaps',
  },
  {
    name: 'Packages',
    route: '/packages',
    icon: 'icon-Packages',
  },
  {
    name: 'Jobs',
    route: '/jobs',
    icon: 'icon-Jobs',
  },
  {
    name: 'Playbooks',
    route: '/playbooks',
    icon: 'icon-Playbooks',
  },
  {
    name: 'Runners',
    route: '/runners',
    icon: 'icon-Runners',
  },
]);
</script>

<style lang="scss" scoped>
#leftMenu {
  z-index: 10;
  position: absolute;
  left: 0;
  top: 0;
  width: 64px;
  height: calc(100vh - 70px);
  padding: 24px 0;
  transition: width 0.2s ease-in;
  background-color: var(--background_secondary);
  &:hover {
    width: 240px;
    .leftMenu-list .leftMenu-item .leftMenu-text {
      display: block;
      width: 100%;
    }
  }
  .leftMenu-list {
    display: flex;
    flex-direction: column;
    gap: 12px 0;
    width: 100%;
    .leftMenu-item {
      width: 100%;
      height: 56px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      &:hover {
        .leftMenu-icon {
          color: var(--primary);
        }
        .leftMenu-text {
          color: var(--primary);
        }
      }
      &.active {
        background-color: var(--primary_inactive);
        .leftMenu-icon {
          color: var(--primary);
        }
        .leftMenu-text {
          color: var(--primary);
        }
      }
      .leftMenu-icon {
        flex-shrink: 0;
        width: 64px;
        height: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        color: var(--text_secondary);
        i{
          font-size: inherit;
        }
      }
      .leftMenu-text {
        display: none;
        width: 0;
        transition: width 0.2s ease-in;
        padding: 0 5px;
        font-size: 18px;
        font-weight: 600;
        max-height: 56px;
        overflow: hidden;
        white-space: nowrap;
        color: var(--text_secondary);
      }
    }
  }
}
</style>
