'use strict';

const form = document.querySelector('.auth-form');
const input = document.querySelector('.form-control');
const user = document.querySelector('#inputUser');
const password = document.querySelector('#inputPassword');
const mainPage = document.querySelector('.main');
const home = document.querySelector('.home')
const appMain = document.querySelector('.app-main');
const linkProfile = document.querySelector('.menu-link-profile');
const linkTask = document.querySelector('.menu-link-task');
const task =document.querySelector('.tasks-cus');
const overview = document.querySelector('.page-inner');


  form.addEventListener('submit', function (e) {
    let num = 123;
    if(user.value === 'Andy') {
      home.classList.add('home-none');
      mainPage.classList.add('main-show');
    }
    if(password.value === num) {
      home.classList.add('home-none');
      mainPage.classList.add('main-show');
    }

    e.preventDefault();
  });

linkProfile.addEventListener('click', function (e) {
  e.preventDefault();
  appMain.classList.add('app-main-show');
  overview.classList.remove('overview');
  task.classList.remove('task-cus-show');
});

linkTask.addEventListener('click', function (e) {
  e.preventDefault();
  appMain.classList.add('app-main-show');
  task.classList.add('task-cus-show');
  overview.classList.add('overview');
});

