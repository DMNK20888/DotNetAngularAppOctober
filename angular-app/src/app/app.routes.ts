import { Routes } from '@angular/router';
import {HomeComponent} from './components/home-component/home-component';
import { Component } from '@angular/core';
import {App} from './app';

export const routes: Routes = [
    {
        path: '',
        component: App,
        title: 'App page default',
    },
    {
        path: 'home',
        component: HomeComponent,
        title: 'Home page',
    },
    {
        path: 'login',
        component: HomeComponent, //Place Holder
        title: 'Home page',
    },
    {
        path: 'about',
        component: HomeComponent, //Place Holder
        title: 'Home page',
    }
];


