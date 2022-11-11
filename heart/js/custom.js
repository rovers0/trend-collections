/** 
 * start when the browser has finished parsing but is still loading sub-resources (like videos)
 * not needed in JSFiddle as you can choose it in the options (onDomready)
 *
 * document.onreadystatechange = function () {
 *     if (document.readyState == "interactive") {    
 **/
    
// build up your storage for video urls here 
// leave out the file extension, we will let the browser decide which type he can play.
// also note how I left out the 'http:' part. we don't need it, the browser automatically
// decides if he needs http or https.
const openPage = (page) => {
    window.location.href = `./heart/heart${page}.html`
}
