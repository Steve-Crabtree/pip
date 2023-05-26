const videoElement = document.getElementById('video');
const btnElement = document.getElementById('button');

// Prompt user to select media stream, pass to video element, then play
async function selectMeadiaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
    } catch (error) {
        console.log('whoops, error', error);
    }
}

btnElement.addEventListener('click', async () => {
    btnElement.disabled = true;
    await videoElement.requestPictureInPicture();
    // Reset button
    btnElement.disabled = false;
});

selectMeadiaStream();
