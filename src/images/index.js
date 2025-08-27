import buratta from './burratta.png';
import filetmignon from  './filetmignon.png';
import mousse from './mousse.png';
import mushroompotato from './mushroompotato.png';
import sirloin from './sirloin.png';

/**This module gathers all the file paths and exports them
 * in an object for easy use.
 * 
 * Rather than importing each image individually in the menu.js module,
 * we can instead import this object. Anytime an image is added or removed,
 * only this module needs to be updated.
 */

export const foodImage = {
    buratta,
    filetmignon,
    mousse,
    mushroompotato,
    sirloin,
};