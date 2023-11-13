function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if (weight > 0 && height > 0) {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        const result = `Your BMI is ${bmi}.`;

        let interpretation;
        if (bmi < 18.5) {
            interpretation = 'Underweight';
        } else if (bmi < 24.9) {
            interpretation = 'Normal weight';
        } else if (bmi < 29.9) {
            interpretation = 'Overweight';
        } else {
            interpretation = 'Obese';
        }

        const fullResult = `${result} You are considered ${interpretation}.`;

        document.getElementById('result').innerText = fullResult;
    } else {
        document.getElementById('result').innerText = "Please enter valid weight and height.";
    }
}
