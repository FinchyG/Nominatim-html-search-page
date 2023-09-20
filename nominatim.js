function searchPostalCode() {
    let postalCode = document.getElementById("searchBox").value;
    console.log(postalCode);

    function onSuccess(data) {
        if (data.length > 0) {
            alert("Postal code latitude is " + data[0].lat + " and longitude is " + data[0].lon + ".");
        } else {
            alert("Incorrect UK postal code entered.");
        }
    }
    let nominatim_url = "https://nominatim.openstreetmap.org/search?postalcode=";
    let url = nominatim_url + postalCode + "&format=json&countrycodes=gb";
    console.log(url);
    $.ajax(url, { type: "GET", success: onSuccess });
}