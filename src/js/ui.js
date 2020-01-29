export const UI = () => {
  const DOMstring = {
    modal: '.modal',
    modalActive: 'modal-isActive',
    exerciseName: '.exercise-name',
    exerciseDesc: '.exercise-description',
    exerciseDescItem: 'exercise-description__item',
    exerciseInput: '.input',
    exerciseOutput: '.output',
    exerciseItem: '.exercise',
    btnCloseModal: '.modal-close'
  }

  const { modal, modalActive, exerciseName, exerciseDesc, exerciseDescItem, exerciseInput, exerciseOutput } = DOMstring;

  const openModal = () => {
    const modalEl = document.querySelector(modal);
    modalEl.classList.add(modalActive);
  }
  
  const closeModal = () => {
    const modalEl = document.querySelector(modal);
    modalEl.classList.remove(modalActive);
  }

  const renderModal = ({ name, description, input, output, solution }) => {
    const splitDescription = description.split('.');
    let descriptionList = '';
    splitDescription.forEach((el,index) => descriptionList += `<li class=${exerciseDescItem}>${index+1}. ${el}</li>`);

    document.querySelector(exerciseName).textContent = name;
    document.querySelector(exerciseDesc).innerHTML = descriptionList;
    document.querySelector(exerciseInput).textContent = input;
    document.querySelector(exerciseOutput).textContent = output;
  }

  return {
    openModal,
    closeModal,
    renderModal,
    getSelectors: DOMstring
  }
}