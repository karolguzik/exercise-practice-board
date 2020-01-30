import { exercisesData } from './js/data';
import { UI } from './js/ui';

const ui = UI();
const uiSelectors = ui.getSelectors;

const btnCloseModal = document.querySelector(uiSelectors.btnCloseModal);
const btnCheckSolution = document.querySelector(uiSelectors.btnCheckSolution);
const exercisesList = document.querySelectorAll(uiSelectors.exerciseItem);


const openModal = e => {
  let currentExercise = e.target.textContent;

  exercisesData.forEach(el => {
    if(el.name === currentExercise) {
      ui.renderModal(el);
      ui.showModal();
      return;
    }
  })
}

const closeModal = () => {
  ui.closeModal();
  document.querySelector(uiSelectors.exerciseSolution).classList.remove(uiSelectors.exerciseSolutionActive)
}

const showOrHideSolution = () => {
  ui.showOrHideSolution();
}

exercisesList.forEach(el => el.addEventListener('click', openModal))
btnCloseModal.addEventListener('click', closeModal);
btnCheckSolution.addEventListener('click', showOrHideSolution);