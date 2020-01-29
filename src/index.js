import { exercisesData } from './js/data';
import { UI } from './js/ui';

const ui = UI();
const uiSelectors = ui.getSelectors;

const btnCloseModal = document.querySelector(uiSelectors.btnCloseModal);
const exercisesList = document.querySelectorAll(uiSelectors.exerciseItem);

const startModal = e => {
  let currentExercise = e.target.textContent;

  exercisesData.forEach(el => {
    if(el.name === currentExercise) {
      ui.renderModal(el);
      ui.openModal();
      return;
    }
  })
}

const closeModal = () => {
  ui.closeModal();
}

exercisesList.forEach(el => el.addEventListener('click', startModal))
btnCloseModal.addEventListener('click', closeModal);
