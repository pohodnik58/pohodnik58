import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import ReactDOM from "react-dom";

function showToast(content, { type = 'success', duration = 3000, vertical = 'top', horizontal = 'right' }) {
    const containerForModal = document.createElement('div');
    document.body.appendChild(containerForModal);

    function cleanUp() {
        ReactDOM.unmountComponentAtNode(containerForModal);
        document.body.removeChild(containerForModal);
    }

    const snackbar = <Snackbar
        open
        autoHideDuration={duration}
        onClose={cleanUp}
        anchorOrigin={{ vertical, horizontal }}
    >{content}
    </Snackbar>;

    ReactDOM.render(snackbar, containerForModal);
}

export function success(content, options) {
    showToast(content, { ...options, type: 'success' });
}

export function error(content, options) {
    showToast(content, { ...options, type: 'error' });
}

export function info(content, options) {
    showToast(content, { ...options, type: 'info' });
}
