import React, { useEffect } from "react";

function GoogleMap() {
    useEffect(() => {
        const iframeData = document.getElementById("iframeId")
        const lat = 35.246680;
        const lon = -80.798200;
        iframeData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    })
    return (
        <div>
            <iframe title="Map" id="iframeId" height="800vh" width="1000vw"></iframe>
        </div>
    );
}
export default GoogleMap;