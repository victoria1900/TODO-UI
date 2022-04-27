const high = document.querySelector('.high');
const low = document.querySelector('.low');
const highText = document.querySelector('.task-high__text');
const lowText = document.querySelector('.task-low__text');
const addHighTask = document.querySelector('.new-high-task-btn');
const addLowTask = document.querySelector('.new-low-task-btn');
const removeEachTaskBtn = document.querySelector('.main-task__btn');
const eachTask = document.querySelector('.main-task');

function renderHighTask() {
    if (highText.value !== '') {
        let divHigh = document.createElement('div');
        divHigh.className = 'main-task';

        let newHighText = highText.value;

        divHigh.innerHTML = `<div class="main-task__box">
                      <input type="checkbox" class="main-task__checkbox">
                      </div>
                     <p class="main-task__text">${newHighText}</p>
                    <input class="main-task__btn" type="button">`;

        high.append(divHigh);

        highText.value = '';

        const removeBtn = divHigh.querySelector('.main-task__btn');

        removeBtn.addEventListener('click', removeTask);

        function removeTask() {
            const removeBtnParent = removeBtn.closest('.main-task');
            removeBtnParent.style.display = 'none';
        }


    }
}

addHighTask.addEventListener('click', renderHighTask);


function renderLowTask() {

    if (lowText.value !== '') {
        let divLow = document.createElement('div');
        divLow.className = 'main-task';

        let newLowText = lowText.value;

        divLow.innerHTML = `<div class="main-task__box">
                      <input type="checkbox" class="main-task__checkbox">
                      </div>
                     <p class="main-task__text">${newLowText}</p>
                    <input class="main-task__btn" type="button">`;

        low.append(divLow);

        lowText.value = '';

        const removeBtn = divLow.querySelector('.main-task__btn');

        removeBtn.addEventListener('click', removeTask);

        function removeTask() {
            const removeBtnParent = removeBtn.closest('.main-task');
            removeBtnParent.style.display = 'none';
        }


    }


}

addLowTask.addEventListener('click', renderLowTask);

removeEachTaskBtn.addEventListener('click', function () {
    eachTask.style.display = 'none';
});