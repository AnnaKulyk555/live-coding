// 'use strict';

const listElem = document.querySelector('.list');

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const renderTasks = tasksList => {
  console.log('render');
  listElem.innerHTML = '';

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }, index) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');

      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', index);
      checkbox.checked = done;

      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// 1. add event to the element
// 2. create event handlers

const createBtnElement = document.querySelector('.create-task-btn');
const inputElement = document.querySelector('.task-input');
// i: obj
// o: undefined

// algo
// 1. get data
// 2. create task object, add to array
// 3. re-render
function onCreateTask(event) {
  const { value } = inputElement;

  // console.log(value);
  tasks.push({
    text: value,
    done: false,
  });

  renderTasks(tasks);
}

// WEB FLOW
// 1. get data +++
// 2. render +++
// 3. update data, don't undate DOM (!!!!)
// 4. re-render

// input: string, callback
// output: undefined
createBtnElement.addEventListener('click', onCreateTask);

// algo
// 1. check if clicked on checbox
// 2. find task where clicked
// 3. update task
// 4. re-render
function updateTaskHandler(event) {
  console.dir(event.target);
  console.log(event.target.classList);

  if (!event.target.classList.contains('list__item-checkbox')) {
    return;
  }

  console.log('checbox is clicked');
  console.log(event.target.dataset.id);
}

listElem.addEventListener('click', updateTaskHandler);
