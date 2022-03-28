import burger from './blocks/burger';
import modal from './blocks/modal';
import subnav from './blocks/subnav';
import autoResize from './blocks/autoresize';

window.addEventListener('DOMContentLoaded', () => {
  burger('.burger');

  modal('#contactModal', '[data-modal="team-modal"]');
  modal('#calendarModal', '[data-modal="calendar-modal"]');
  modal('#statModal', '[data-modal="stat-modal"]');
  modal('#share-modal', '[data-modal="share-modal"]');

  subnav('.nav--mobile');

  autoResize('[data-textarea]');
});