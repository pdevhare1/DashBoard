<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-oblue">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <div class="flex">
            <q-btn round dense flat color="white" icon="notifications">
              <q-badge color="red" text-color="white" floating></q-badge>
            </q-btn>
            <q-btn round dense flat color="white" icon="comment">
              <q-badge color="red" text-color="white" floating> 5 </q-badge>
              <q-menu>
                <q-list style="min-width: 100px">
                  <messages></messages>
                  <q-card class="text-center no-shadow no-border">
                    <q-btn
                      label="View All"
                      style="max-width: 120px !important"
                      flat
                      dense
                      class="text-indigo-8"
                    ></q-btn>
                  </q-card>
                </q-list>
              </q-menu>
            </q-btn>
            <q-btn
              round
              dense
              flat
              color="white"
              icon="search"
              @click="toggleSearchInput"
            />
            <q-input
              v-if="showSearchInput"
              dense
              outlined
              placeholder="Search"
              class="q-mr-md"
            ></q-input>
          </div>
        </q-toolbar-title>

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn
            round
            dense
            flat
            color="white"
            :icon="fullscreenIcon"
            @click="toggleFullscreen"
            v-if="shouldDisplayFullscreenButton"
          >
          </q-btn>

          <q-btn round flat>
            <q-avatar size="35px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      class="bg-dark text-white"
      show-if-above
      bordered
    >
      <q-item-label header class="text-weight-bolder text-white"
        >Authentication</q-item-label
      >
      <q-expansion-item icon="account_circle" label="Authentication">
        <q-list class="q-pl-lg">
          <q-item to="/login" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="account_circle" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Login 1</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/login2" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="account_circle" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Login 2</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/register" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="person_add" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Register 1</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/register2" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="person_add" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Register 2</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/lookscreen" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="lock_outline" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Lockscreen</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/Rp" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="lock_open" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Recover Password</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>

      <q-item-label header class="text-weight-bolder text-white"
        >FORMS</q-item-label
      >
      <q-expansion-item icon="receipt" label=" Form Elements">
        <q-list class="q-pl-lg">
          <q-item to="/ac" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="format_indent_increase" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Autocomplete</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/cb" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="check_circle" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Checkboxes</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/cp" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="collections_bookmark" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Chips</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/ps" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="colorize" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Pickers</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/rb" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="album" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Radio Buttons</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/rg" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="compare" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Range</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/st" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="check_box" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Select</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/sh" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="confirmation_number" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Switch</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/ti" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="flash_auto" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Text Input</q-item-label>
            </q-item-section>
          </q-item>
          <!-- <q-item active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="call_to_action" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Form Inputs</q-item-label>
            </q-item-section>
          </q-item> -->
        </q-list>
      </q-expansion-item>
      <q-expansion-item icon="layers" label="Form Pages">
        <q-list class="q-pl-lg">
          <q-item to="/fm" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="filter_none" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Form Mask & Typehead</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/fl" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="filter_b_and_w" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Form Layout</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/ig" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="border_inner" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Form Input Grid</q-item-label>
            </q-item-section>
          </q-item>
          <!-- <q-item active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="border_style" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Form Hidden Label</q-item-label>
            </q-item-section>
          </q-item> -->
          <q-item to="/fh" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="art_track" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Form Horizontal</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/fwb" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="filter_frames" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Form with Border</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/frs" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="chrome_reader_mode" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Form Row Separator</q-item-label>
            </q-item-section>
          </q-item>
          <!-- <q-item active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="assignment" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Form Row Striped</q-item-label>
            </q-item-section>
          </q-item> -->
          <!-- <q-item active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="border_horizontal" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Form Label Striped</q-item-label>
            </q-item-section>
          </q-item> -->
          <q-item to="/fr" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="photo_filter" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Form Repeater</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>
      <q-item to="/fv" active-class="q-item-no-link-highlighting">
        <q-item-section avatar>
          <q-icon name="assignment_late" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Form Validation</q-item-label>
        </q-item-section>
      </q-item>
      <q-item-label header class="text-weight-bolder text-white"
        >Tables</q-item-label
      >
      <q-item to="/bt" active-class="q-item-no-link-highlighting">
        <q-item-section avatar>
          <q-icon name="apps" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Basic Table</q-item-label>
        </q-item-section>
      </q-item>
      <q-item to="/et" active-class="q-item-no-link-highlighting">
        <q-item-section avatar>
          <q-icon name="graphic_eq" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Editable Table</q-item-label>
        </q-item-section>
      </q-item>
      <q-item to="/gt" active-class="q-item-no-link-highlighting">
        <q-item-section avatar>
          <q-icon name="grain" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Jsgrid Table</q-item-label>
        </q-item-section>
      </q-item>
      <q-item to="/ft" active-class="q-item-no-link-highlighting">
        <q-item-section avatar>
          <q-icon name="gamepad" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Footable Table </q-item-label>
        </q-item-section>
      </q-item>
      <q-expansion-item icon="blur_linear" label="Datatables">
        <q-list class="q-pl-lg">
          <q-item to="/bit" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="border_vertical" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Basic Initialisation</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/tt" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="border_outer" />
            </q-item-section>
            <q-item-section>
              <q-item-label>API</q-item-label>
            </q-item-section>
          </q-item>
          <q-item active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="border_style" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Advanced Initialisation</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
