export const UI = () => {
  const DOMstring = {
    modal: '.modal',
    modalActive: 'modal--isActive',
    exerciseName: '.exercise-name',
    exerciseDesc: '.exercise-description',
    exerciseDescItem: 'exercise-description__item',
    exerciseInput: '.input',
    exerciseOutput: '.output',
    exerciseItem: '.exercise',
    exerciseSolution: '.exercise-solution',
    exerciseSolutionCode: '.exercise-code',
    exerciseSolutionActive: 'exercise-solution--isActive',
    btnToggleSolution: '.btn--solution',
    btnCloseModal: '.btn--modal-close'
  }

  const { modal, modalActive, exerciseName, exerciseDesc, exerciseDescItem, exerciseInput, exerciseOutput, exerciseSolution, exerciseSolutionCode, exerciseSolutionActive } = DOMstring;

  const renderModal = ({ name, description, input, output, solution }) => {
    const splitDescription = description.split('.');
    let descriptionList = '';
    splitDescription.forEach((el,index) => descriptionList += `<li class=${exerciseDescItem}>${index+1}. ${el}</li>`);

    document.querySelector(exerciseName).textContent = name;
    document.querySelector(exerciseDesc).innerHTML = descriptionList;
    document.querySelector(exerciseInput).textContent = input;
    document.querySelector(exerciseOutput).textContent = output;
    document.querySelector(exerciseSolutionCode).textContent = solution;
  }

  const showModal = () => {
    const modalEl = document.querySelector(modal);
    modalEl.classList.add(modalActive);

    document.body.style.position = 'fixed';
  }
  
  const closeModal = () => {
    const modalEl = document.querySelector(modal);
    modalEl.classList.remove(modalActive);

    document.body.style.position = '';
  }

  const showOrHideSolution = () => {
    const solution = document.querySelector(exerciseSolution);
    solution.classList.toggle(exerciseSolutionActive);
  }


  return {
    showModal,
    closeModal,
    renderModal,
    showOrHideSolution,
    getSelectors: DOMstring
  }
}