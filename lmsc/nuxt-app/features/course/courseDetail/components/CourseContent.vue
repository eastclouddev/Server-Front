<template>
  <v-card :flat="true" :style="cardStyles">
    <v-card-title v-if="!smAndDown" class="text-h6 font-weight-bold">
      コースの内容
    </v-card-title>
    <v-card-text>
      <v-list :style="{ backgroundColor: 'transparent' }">
        <div
          v-for="(section, sectionIndex) in props.sections"
          :key="section.section_id"
        >
          <v-list-item
            @click="toggleSection(sectionIndex)"
            :style="{
              marginBottom:
                !smAndDown && isSectionExpanded(sectionIndex) ? '0px' : '10px',
              'background-color': '#fff7ec',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }"
          >
            <v-list-item-title>
              <strong>{{ section.title }}</strong>
            </v-list-item-title>
            <template v-slot:append>
              <v-icon icon="mdi-clock-outline" class="mr-2" color="#FF5A36" />
              <strong>8分</strong>
              <v-icon
                :icon="
                  isSectionExpanded(sectionIndex)
                    ? 'mdi-chevron-up'
                    : 'mdi-chevron-down'
                "
                class="ml-2"
              />
            </template>
          </v-list-item>

          <v-expand-transition>
            <div v-show="isSectionExpanded(sectionIndex)">
              <v-list-item
                v-for="(curriculum, index) in section.curriculums"
                :key="curriculum.curriculum_id"
                :class="{ 'mb-2': smAndDown }"
                :style="{
                  backgroundColor: 'white',
                  padding: '0px',
                  borderBottom:
                    !smAndDown && index !== section.curriculums.length - 1
                      ? '1px solid #FFF7EC'
                      : 'none',
                }"
              >
                <template v-slot:prepend>
                  <v-checkbox
                    :style="{
                      alignSelf: 'center',
                      color: '#FF5A36',
                      marginBottom: '5px',
                    }"
                  />
                </template>
                <v-list-item-title :style="{ alignSelf: 'center' }">
                  {{ curriculum.title }}
                </v-list-item-title>
                <v-list-item-subtitle
                  :style="{
                    opacity: 1,
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '10px',
                  }"
                >
                  <img src="/assets/video-icon.svg" />
                  <span class="ml-2">5:30</span>
                </v-list-item-subtitle>
              </v-list-item>
            </div>
          </v-expand-transition>
        </div>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useDisplay } from "vuetify";

const { smAndDown } = useDisplay();

export type Curriculum = {
  curriculum_id: number;
  title: string;
  description: string | null;
};

export type Section = {
  section_id: number;
  title: string;
  description: string | null;
  curriculums: Curriculum[];
};

const props = defineProps<{
  sections: Section[];
}>();

const expandedSections = ref<number[]>([]);

const toggleSection = (sectionIndex: number) => {
  const index = expandedSections.value.indexOf(sectionIndex);
  if (index === -1) {
    expandedSections.value.push(sectionIndex);
  } else {
    expandedSections.value.splice(index, 1);
  }
};

const isSectionExpanded = (sectionIndex: number) => {
  return expandedSections.value.includes(sectionIndex);
};

const cardStyles = computed(() => {
  if (smAndDown.value) {
    return {
      backgroundColor: `rgb(var(--v-theme-background))`,
      "padding-top": "30px",
    };
  } else {
    return {};
  }
});
</script>
