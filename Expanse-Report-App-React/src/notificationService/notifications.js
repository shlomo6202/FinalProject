/*********************************************************\
 *                                                        *
 *      This is a function to create notifications        *
 *                                                        *
\*********************************************************/


export function createNotification(type, message){
    document.dispatchEvent(new CustomEvent('openSnakeBar', { detail: {type: type, message: message}}));
  }