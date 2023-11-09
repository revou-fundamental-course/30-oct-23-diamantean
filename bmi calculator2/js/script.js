// menambahkan elemen yang diperlukan
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const resultDiv = document.getElementById("result");
const descriptionDiv = document.getElementById("description-result");
const calculateBtn = document.getElementById("btn");
const description = document.getElementById("description");

// menambahkan event listener ke button hitung bmi
calculateBtn.addEventListener("click", () => {
    // mengambil input user untuk tb dan bb
    const height = parseFloat(heightInput.value) / 100;
    const weight = parseFloat(weightInput.value);
    // mengecek apakah input valid
    if (isNaN(height) || isNaN(weight)) {
        resultDiv.innerText = "Harap isi dengan benar";
        return;
    }
    // mengkalkulasi bmi
    const bmi = weight / (height * height);
    let descriptionResult = "";
    if (bmi < 18.5) {
        descriptionResult = "kekurangan berat badan. Anda mungkin perlu menambah berat badan agar sehat. Konsultasi dengan dokter Anda atau ahli gizi tentang cara mencapai berat badan yang sehat";
    } else if (bmi > 18.5 < 24.9) {
        descriptionResult = "memiliki berat badan normal (ideal). Makan makanan yang seimbang dan tetap aktif dapat membantu Anda mempertahankan berat badan yang sehat.";
    } else if (bmi > 25.0 < 30.0) {
        descriptionResult = "kelebihan berat badan. Anda mungkin perlu menurunkan berat badan agar sehat. Konsultasi dengan dokter Anda atau ahli diet tentang cara mencapai berat badan yang sehat.";
    } else {
        descriptionResult = "memiliki berat badan yang sangat berlebih. Anda perlu menurunkan berat badan agar sehat. Konsultasi dengan dokter Anda atau ahli diet tentang cara mencapai berat badan yang sehat.";
    }

    // men-display hasil bmi dan deskripsi
    resultDiv.innerText = `BMI anda adalah ${bmi.toFixed(2)}`;
    descriptionDiv.innerText = `Anda ${descriptionResult}`;
    description.style.display = "none";

    //men-display button reset
    const resetBtn = document.createElement("button");
    resetBtn.innerText = "Reset";
    resetBtn.addEventListener("click", () => {
        document.getElementById("height").value = "";
        document.getElementById("weight").value = "";
        resultDiv.innerHTML = "";
        descriptionDiv.innerHTML = "";
        resetBtn.remove();
        description.style.display = "block";
    });
    resultDiv.appendChild(resetBtn);

});