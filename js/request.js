"use strict";

function request(method, url) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.onreadystatechange = function(event) {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    resolve(this.response);
                } else {
                    reject(this.status);
                }
            }
        };
        req.open(method, url, true);
        req.send(null);
    });
}

export { request };
