<template>
  <div id="layout-header">
    <!-- left -->
    <div class="header-left">
      <div class="header-logo">
        <el-icon :size="45">
          <Loading />
        </el-icon>
        <p>
          <span>Appsketch</span>
          <span>Works</span>
        </p>
      </div>
      <el-dropdown class="workspace-dropdown" placement="bottom-start">
        <div class="workspace-dropdown-button">
          Community
          <el-icon class="el-icon--right"><arrow-down /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Community</el-dropdown-item>
            <el-dropdown-item>
              <el-icon class="primary-color" :size="16">
                <CirclePlus />
              </el-icon>
              <span>Add a Private Workspace</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <!-- search -->
      <div id="header-search">
        <el-input v-model="keyword" size="large" placeholder="Search">
          <template #prefix>
            <el-icon><Search /></el-icon>
          </template>
        </el-input>
      </div>
    </div>
    <!-- right -->
    <div class="header-right">
      <el-switch
        class="theme-switch"
        :width="56"
        size="large"
        v-model="isLight"
        inline-prompt
        :active-icon="Sunny"
        :inactive-icon="Moon"
        @change="themeChange"
      >
      </el-switch>
      <el-dropdown
        class="avatar-dropdown"
        placement="bottom-end"
        popper-class="avatar-popper"
      >
        <div class="avatar-dropdown-img">
          <img :src="avatarUrl" alt="" />
          <el-icon class="el-icon--right"><arrow-down /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <div>
                <p class="profile-text">Profile</p>
                <p class="profile-info">123456789@gmail.com</p>
              </div>
            </el-dropdown-item>
            <el-dropdown-item>
              <i class="asw-icon icon-sign-out"></i>
              <span class="profile-text">Sign Out</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <el-dropdown
        class="headerMore-dropdown"
        trigger="click"
        placement="bottom-end"
        popper-class="headerMore-popper"
      >
        <button class="headerMore-dropdown-button">
          <i class="asw-icon icon-More"></i>
        </button>
        <template #dropdown>
          <el-dropdown-menu>
            <ul class="headerMore-list">
              <li class="headerMore-item active">
                <el-icon><Setting /></el-icon>
                <span>PCAPs</span>
              </li>
              <li class="headerMore-item">
                <el-icon><Setting /></el-icon>
                <span>About</span>
              </li>
              <li class="headerMore-item">
                <el-icon><Setting /></el-icon>
                <span>company</span>
              </li>
              <li class="headerMore-item">
                <el-icon><Setting /></el-icon>
                <span>FAQ</span>
              </li>
              <li class="headerMore-item">
                <el-icon><Setting /></el-icon>
                <span>Docs</span>
              </li>
              <li class="headerMore-item">
                <el-icon><Setting /></el-icon>
                <span>Resources</span>
              </li>
              <li class="headerMore-item">
                <el-icon><Setting /></el-icon>
                <span>Contact</span>
              </li>
              <li class="headerMore-item">
                <el-icon><Setting /></el-icon>
                <span>Pricing</span>
              </li>
            </ul>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import avatarUrl from './avatar.js';
import { Sunny, Moon } from '@element-plus/icons-vue';
import { toRefs, ref } from 'vue';
import { useMainStore } from '@/store/index';
import { useTheme } from '@/hooks/useTheme';

const props = defineProps({
  test: {
    type: String,
  },
});

const mainStore = useMainStore();

const keyword = ref('');

const { themeSet } = useTheme();
const isLight = ref(mainStore.theme === 'light');
const themeChange = (val) => {
  themeSet(val ? 'light' : 'dark');
};
</script>

<style lang="scss" scoped>
#layout-header {
  width: 100%;
  height: 70px;
  background-color: var(--background_secondary);
  padding: 14px 32px;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  .header-left {
    align-items: center;
    display: flex;
    .header-logo {
      display: flex;
      align-items: center;
      gap: 15px;
      .el-icon {
        color: var(--primary);
      }
      p {
        span {
          font-size: 22px;
          font-weight: 500;
        }
        span:last-of-type {
          margin-left: 10px;
          color: var(--primary);
        }
      }
    }
    .workspace-dropdown {
      margin-left: 20px;
      .workspace-dropdown-button {
        outline: none;
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        background: #e0eaff;
        border: 1px solid var(--primary);
        border-radius: 4px;
        color: var(--primary);
        height: 27px;
        padding: 0 8px;
      }
    }
    #header-search {
      margin-left: 60px;
      .el-input {
        width: 320px;
      }
    }
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 20px;
    :deep(.theme-switch) {
      .el-icon {
        font-size: 20px !important;
        color: #fac302 !important;
      }
      .el-switch__core {
        border: none;
        background: #636363;
      }
      .el-icon {
        margin-left: 4px;
      }
      &.is-checked {
        .el-switch__core {
          background: #e8e8e8;
        }
        .el-icon {
          margin-left: 0px;
        }
      }
    }
    .avatar-dropdown {
      .avatar-dropdown-img {
        outline: none;
        cursor: default;
        align-items: center;
        display: flex;
        gap: 0 5px;
        img {
          width: 36px;
          height: 36px;
        }
      }
    }
    .headerMore-dropdown {
      .headerMore-dropdown-button {
        background: transparent;
        border: none;
        border-radius: 4px;
        box-shadow: none;
        cursor: pointer;
        outline: none;
        color: var(--text);
        width: 28px;
        height: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        i{
          font-size: 18px;
        }
        &:hover {
          color: var(--primary);
        }
        &[aria-expanded='true'] {
          background: #f0f0f0;
          color: var(--primary);
        }
      }
    }
  }
}
</style>
<style lang="scss">
.avatar-popper {
  .profile-text  {
    color: var(--text);
  }
  i{
    font-size: 18px;
    color: var(--text);
  }
  .profile-info{
    color: var(--text_secondary);
   
  }
  .el-dropdown-menu__item {
    padding: 10px 16px;
    &:last-of-type {
      border-top: 1px solid #ceced2;
    }
  }
}

.headerMore-popper {
  .el-dropdown-menu {
    padding: 0;
    .headerMore-list {
      padding: 8px;
      display: flex;
      gap: 0 8px;
      justify-content: center;
      max-width: 224px;
      flex-wrap: wrap;
      .headerMore-item {
        width: 64px;
        height: 64px;
        align-items: center;
        border-radius: 4px;
        color: var(--text);
        display: flex;
        flex-direction: column;
        gap: 4px 0;
        justify-content: center;
        transition: all 0.2s ease-in;
        cursor: pointer;
        .el-icon {
          font-size: 20px;
        }
        span {
          font-size: 14px;
        }
        &:hover {
          color: var(--primary);
        }
        &.active {
          background: #f0f0f0;
          color: var(--primary);
        }
      }
    }
  }
}
</style>
