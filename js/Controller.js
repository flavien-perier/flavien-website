"use strict";

const $ = require("jquery");

module.exports = class Controller {
    constructor(name, model, view, baliseId) {
        this.name = name;
        this.model = model;
        this.view = view;
        this.baliseId = baliseId;
    }

    load() {
        return new Promise((resolve, reject) => {
            $.get(this.model, (_model) => {
                const model = _model[this.name];
                $.get(this.view, (_view) => {
                    model.forEach(instance => {
                        let view = _view;
                        Object.keys(instance).forEach(key => {
                            const matcher = new RegExp(`{{[ ]?${key}[ ]?}}`, "g");
                            if($.isArray(instance[key])) {
                                view = view
                                    .replace(matcher, instance[key]
                                        .map(element => `<li>${element}</li>`)
                                        .join(""));
                            } else {
                                view = view.replace(matcher, instance[key]);
                            }
                        });
                        $(`#${this.baliseId}`).append(view);
                        resolve();
                    });
                }).fail(reject);
            }).fail(reject);
        });
    }
};