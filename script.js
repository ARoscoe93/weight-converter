document.getElementById("convertBtn").addEventListener("click", () => {
    const inputWeight = parseFloat(document.getElementById("kgInput").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const result = document.getElementById("result");

    if (!isNaN(inputWeight)) {
        let convertedWeight;

        switch (fromUnit) {
            case "kg":
                convertedWeight = convertKg(inputWeight, toUnit);
                break;
            case "lb":
                convertedWeight = convertLb(inputWeight, toUnit);
                break;
            case "st":
                convertedWeight = convertSt(inputWeight, toUnit);
                break;
            case "g":
                convertedWeight = convertG(inputWeight, toUnit);
                break;
            case "oz":
                convertedWeight = convertOz(inputWeight, toUnit);
                break;
            case "tonne":
                convertedWeight = convertTonne(inputWeight, toUnit);
                break;
            case "ton":
                convertedWeight = convertTon(inputWeight, toUnit);
                break;
            case "ct":
                convertedWeight = convertCt(inputWeight, toUnit);
                break;
            case "mg":
                convertedWeight = convertMg(inputWeight, toUnit);
                break;
            default:
                result.textContent = "Please select valid weight units for conversion.";
                return;
        }

        result.textContent = `${inputWeight} ${fromUnit} is equal to ${convertedWeight.toFixed(2)} ${toUnit}.`;
    } else {
        result.textContent = "Please enter a valid weight.";
    }
});

// Conversion functions for Kilograms (kg)
const convertKg = (inputWeight, toUnit) => {
    switch (toUnit) {
        case "lb":
            return inputWeight * 2.20462;
        case "st":
            return inputWeight * 0.157473;
        case "g":
            return inputWeight * 1000;
        case "oz":
            return inputWeight * 35.274;
        case "tonne":
            return inputWeight * 0.001;
        case "ton":
            return inputWeight * 0.000984207;
        case "ct":
            return inputWeight * 5000;
        case "mg":
            return inputWeight * 1e+6;
        default:
            return inputWeight;
    }
};

// Conversion functions for Pounds (lb)
const convertLb = (inputWeight, toUnit) => {
    switch (toUnit) {
        case "kg":
            return inputWeight * 0.453592;
        case "st":
            return inputWeight * 0.0714286;
        case "g":
            return inputWeight * 453.592;
        case "oz":
            return inputWeight * 16;
        case "tonne":
            return inputWeight * 0.000453592;
        case "ton":
            return inputWeight * 0.000446429;
        case "ct":
            return inputWeight * 2267.96;
        case "mg":
            return inputWeight * 453592;
        default:
            return inputWeight;
    }
};

// Conversion functions for Stones (st)
const convertSt = (inputWeight, toUnit) => {
    switch (toUnit) {
        case "kg":
            return inputWeight * 6.35029;
        case "lb":
            return inputWeight * 14;
        case "g":
            return inputWeight * 6350.29;
        case "oz":
            return inputWeight * 224;
        case "tonne":
            return inputWeight * 0.00635029;
        case "ton":
            return inputWeight * 0.00625;
        case "ct":
            return inputWeight * 31751.5;
        case "mg":
            return inputWeight * 6350293.18;
        default:
            return inputWeight;
    }
};

// Conversion functions for Grams (g)
const convertG = (inputWeight, toUnit) => {
    switch (toUnit) {
        case "kg":
            return inputWeight * 0.001;
        case "lb":
            return inputWeight * 0.00220462;
        case "st":
            return inputWeight * 0.000157473;
        case "oz":
            return inputWeight * 0.035274;
        case "tonne":
            return inputWeight * 1e-6;
        case "ton":
            return inputWeight * 9.8421e-7;
        case "ct":
            return inputWeight * 5;
        case "mg":
            return inputWeight * 1000;
        default:
            return inputWeight;
    }
};

// Conversion functions for Ounces (oz)
const convertOz = (inputWeight, toUnit) => {
    switch (toUnit) {
        case "kg":
            return inputWeight * 0.0283495;
        case "lb":
            return inputWeight * 0.0625;
        case "st":
            return inputWeight * 0.00446429;
        case "g":
            return inputWeight * 28.3495;
        case "tonne":
            return inputWeight * 2.835e-5;
        case "ton":
            return inputWeight * 2.7902e-5;
        case "ct":
            return inputWeight * 141.748;
        case "mg":
            return inputWeight * 28349.5;
        default:
            return inputWeight;
    }
};

// Conversion functions for Metric Tons (tonne)
const convertTonne = (inputWeight, toUnit) => {
    switch (toUnit) {
        case "kg":
            return inputWeight * 1000;
        case "lb":
            return inputWeight * 2204.62;
        case "st":
            return inputWeight * 157.473;
        case "g":
            return inputWeight * 1e+6;
        case "oz":
            return inputWeight * 35274;
        case "ton":
            return inputWeight * 0.984207;
        case "ct":
            return inputWeight * 5000000;
        case "mg":
            return inputWeight * 1e+9;
        default:
            return inputWeight;
    }
};

// Conversion functions for Imperial Tons (ton)
const convertTon = (inputWeight, toUnit) => {
    switch (toUnit) {
        case "kg":
            return inputWeight * 1016.05;
        case "lb":
            return inputWeight * 2240;
        case "st":
            return inputWeight * 160;
        case "g":
            return inputWeight * 1016050;
        case "oz":
            return inputWeight * 35840;
        case "tonne":
            return inputWeight * 1.01605;
        case "ct":
            return inputWeight * 5080230.4;
        case "mg":
            return inputWeight * 1.01605e+9;
        default:
            return inputWeight;
    }
};

// Conversion functions for Carats (ct)
const convertCt = (inputWeight, toUnit) => {
    switch (toUnit) {
        case "kg":
            return inputWeight * 0.0002;
        case "lb":
            return inputWeight * 0.000440925;
        case "st":
            return inputWeight * 3.14947e-5;
        case "g":
            return inputWeight * 0.2;
        case "oz":
            return inputWeight * 0.00705479;
        case "tonne":
            return inputWeight * 2e-7;
        case "ton":
            return inputWeight * 1.96841e-7;
        case "mg":
            return inputWeight * 200;
        default:
            return inputWeight;
    }
};

// Conversion functions for Milligrams (mg)
const convertMg = (inputWeight, toUnit) => {
    switch (toUnit) {
        case "kg":
            return inputWeight * 1e-6;
        case "lb":
            return inputWeight * 2.20462e-6;
        case "st":
            return inputWeight * 1.57473e-7;
        case "g":
            return inputWeight * 0.001;
        case "oz":
            return inputWeight * 3.5274e-5;
        case "tonne":
            return inputWeight * 1e-9;
        case "ton":
            return inputWeight * 9.8421e-10;
        case "ct":
            return inputWeight * 0.005;
        default:
            return inputWeight;
    }
};

// Define conversion functions for other weight units as needed
