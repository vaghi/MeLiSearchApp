import Toaster from './toaster';

const toaster = new Toaster();

export default class Fetcher {

    handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    }

    get(url, successCallback, failureCallback) {
        fetch(url)
        .then(this.handleErrors)
        .then(res => successCallback(res))
        .catch(error => {
            toaster.error("There was an error during the request");
            console.log(error)

            if(failureCallback !== undefined) {
                failureCallback();
            }
        });
    }
}
