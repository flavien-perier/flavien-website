"use strict";

import { request } from "./request";

export default class Controller {
    constructor(name, model, view, baliseId) {
        this.name = name;
        this.model = model;
        this.view = view;
        this.baliseId = baliseId;
    }

    load() {
        return new Promise((resolve, reject) => {
            request("GET", this.model).then(_model => {
                const parsedModel = JSON.parse(_model);
                const model = parsedModel[this.name];

                request("GET", this.view).then(_view => {
                    model.forEach(instance => {
                        let view = _view;
                        Object.keys(instance).forEach(key => {
                            const matcher = new RegExp(`{{[ ]*${key}[ ]*}}`, "g");
                            if(Array.isArray(instance[key])) {
                                view = view
                                    .replace(matcher, instance[key]
                                        .map(element => `<li>${element}</li>`)
                                        .join(""));
                            } else {
                                view = view.replace(matcher, instance[key]);
                            }
                        });
                        document.getElementById(this.baliseId).innerHTML += view;
                        resolve(parsedModel);
                    });
                });
            }).catch(reject);
        });
    }
};
