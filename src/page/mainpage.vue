<template>
  <div class="hello">
    <h1 style="text-align:center">{{ msg }}</h1>
    <a-tabs default-active-key="3" style="text-align:center">
      <a-tab-pane key="1" tab="Tab 1">
        Content of tab 1
      </a-tab-pane>
      <a-tab-pane key="2" tab="介绍">2 </a-tab-pane>
      <a-tab-pane key="3" tab="主题">
        <themeChanger></themeChanger>
        <div class="components">
          <a-card title="Button & Link">
            <a-space>
              <a-button type="primary">
                Primary
              </a-button>
              <a-button>Default</a-button>
              <a-button type="dashed">
                Dashed
              </a-button>
              <a-button type="danger">
                Danger
              </a-button>
              <a-config-provider :auto-insert-space-in-button="false">
                <a-button type="primary">
                  按钮
                </a-button>
              </a-config-provider>
              <a-button type="primary">
                按钮
              </a-button>
              <a-button type="link">
                Link
              </a-button>
            </a-space>
          </a-card>
          <a-card title="Breadcrumb">
            <a-space>
              <a-breadcrumb>
                <a-breadcrumb-item>Home</a-breadcrumb-item>
                <a-breadcrumb-item
                  ><a href="">Application Center</a></a-breadcrumb-item
                >
                <a-breadcrumb-item
                  ><a href="">Application List</a></a-breadcrumb-item
                >
                <a-breadcrumb-item>An Application</a-breadcrumb-item>
              </a-breadcrumb>
            </a-space>
          </a-card>
          <a-card title="Dropdown">
            <a-space>
              <a-dropdown>
                <a-menu slot="overlay" @click="handleMenuClick">
                  <a-menu-item key="1">
                    <a-icon type="user" />1st menu item
                  </a-menu-item>
                  <a-menu-item key="2">
                    <a-icon type="user" />2nd menu item
                  </a-menu-item>
                  <a-menu-item key="3">
                    <a-icon type="user" />3rd item
                  </a-menu-item>
                </a-menu>
                <a-button style="margin-left: 8px">
                  Button <a-icon type="down" />
                </a-button>
              </a-dropdown>
              <a-dropdown-button @click="handleButtonClick">
                Dropdown
                <a-menu slot="overlay" @click="handleMenuClick">
                  <a-menu-item key="1">
                    <a-icon type="user" />1st menu item
                  </a-menu-item>
                  <a-menu-item key="2">
                    <a-icon type="user" />2nd menu item
                  </a-menu-item>
                  <a-menu-item key="3">
                    <a-icon type="user" />3rd item
                  </a-menu-item>
                </a-menu>
              </a-dropdown-button>
              <a-dropdown-button>
                Dropdown
                <a-menu slot="overlay" @click="handleMenuClick">
                  <a-menu-item key="1">
                    <a-icon type="user" />1st menu item
                  </a-menu-item>
                  <a-menu-item key="2">
                    <a-icon type="user" />2nd menu item
                  </a-menu-item>
                  <a-menu-item key="3">
                    <a-icon type="user" />3rd item
                  </a-menu-item>
                </a-menu>
                <a-icon slot="icon" type="user" />
              </a-dropdown-button>

              <a-dropdown-button
                disabled
                style="margin-left: 8px"
                @click="handleButtonClick"
              >
                Dropdown
                <a-menu slot="overlay" @click="handleMenuClick">
                  <a-menu-item key="1">
                    <a-icon type="user" />1st menu item
                  </a-menu-item>
                  <a-menu-item key="2">
                    <a-icon type="user" />2nd menu item
                  </a-menu-item>
                  <a-menu-item key="3">
                    <a-icon type="user" />3rd item
                  </a-menu-item>
                </a-menu>
              </a-dropdown-button>
            </a-space>
          </a-card>
          <a-card title="Pagination">
            <a-pagination :default-current="6" :total="500" />
          </a-card>
          <a-card title="Collapse">
            <a-collapse v-model="activeKey">
              <a-collapse-panel key="1" header="This is panel header 1">
                <p>{{ text }}</p>
              </a-collapse-panel>
              <a-collapse-panel
                key="2"
                header="This is panel header 2"
                :disabled="false"
              >
                <p>{{ text }}</p>
              </a-collapse-panel>
              <a-collapse-panel
                key="3"
                header="This is panel header 3"
                disabled
              >
                <p>{{ text }}</p>
              </a-collapse-panel>
            </a-collapse>
          </a-card>
          <a-card title="Steps">
            <a-steps :current="1">
              <a-step>
                <!-- <span slot="title">Finished</span> -->
                <template slot="title">
                  Finished
                </template>
                <span slot="description">This is a description.</span>
              </a-step>
              <a-step
                title="In Progress"
                sub-title="Left 00:00:08"
                description="This is a description."
              />
              <a-step title="Waiting" description="This is a description." />
            </a-steps>
          </a-card>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import themeChanger from "@/components/themechanger.vue";
export default {
  name: "Mainpage",
  data() {
    return {
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      activeKey: ["1"],
    };
  },
  props: {
    msg: String,
  },
  watch: {
    activeKey(key) {
      console.log(key);
    },
  },
  methods: {
    handleButtonClick(e) {
      console.log("click left button", e);
    },
    handleMenuClick(e) {
      console.log("click", e);
    },
  },
  components: {
    themeChanger,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.hello {
  width: 800px;
  margin: auto;
}
.ant-card {
  margin-bottom: 10px;
}

.components {
  text-align: left;
}
</style>
