import header from "./modules/header";
import footer from "./modules/footer";
import hero from "./modules/hero";
import slidingInfoCards from "./modules/slidingInfoCards";
import events from "./modules/events";
import latestArticles from "./modules/latestArticles";
import numberedInfoList from "./modules/numberedInfoList";
import imageGallery from "./modules/imageGallery";
import shopSection from "./modules/shopSection";
import imageWithText from "./modules/imageWithText";
import skewedImagesWithText from "./modules/skewedImagesWithText";
import slickSlider from "./modules/slickSlider";
import instagramFeedComponent from "./modules/instagramFeedComponent";
import accordionList from "./modules/accordionList";
import projects from "./modules/projects";

const modules = [
  header,
  footer,
  hero,
  slidingInfoCards,
  events,
  latestArticles,
  numberedInfoList,
  imageGallery,
  shopSection,
  imageWithText,
  skewedImagesWithText,
  slickSlider,
  instagramFeedComponent,
  accordionList,
  projects,
];

import article from "./documents/article";
import settings from "./documents/settings";
import home from "./documents/home";
import template from "./documents/template";
import page from "./documents/page";
import event from "./documents/event";
import video from "./documents/video";
import report from "./documents/report";
import podcast from "./documents/podcast";
import advice from "./documents/advice";
import project from "./documents/project";

const documents = [
  article,
  video,
  podcast,
  report,
  advice,
  settings,
  home,
  template,
  page,
  event,
  project,
];

import buttonGroup from "./blocks/buttonGroup";
import copy from "./blocks/copy";
import title from "./blocks/title";

const blocks = [buttonGroup, copy, title];

export const schemaTypes = [...documents, ...modules, ...blocks];
