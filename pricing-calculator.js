const trigger = document.querySelector('.trigger-step');
const triggerCalcFields = document.querySelector('.trigger-calc-fields');
const midpoint = document.querySelector('.calc-midpoint');
const calcFields = document.querySelector('.calc-fields');
const finalCalcFields = document.querySelector('.final-calc-fields');

trigger.addEventListener('click', function(e){
    e.preventDefault();
    midpoint.classList.add('hide-fields');
    calcFields.classList.add('hide-fields');
    triggerCalcFields.classList.remove('hide-fields');
    finalCalcFields.classList.remove('hide-fields');
});

triggerCalcFields.addEventListener('click', function(e){
    e.preventDefault();
    triggerCalcFields.classList.toggle('open');
    calcFields.classList.toggle('hide-fields');
});

const numEmployees = document.getElementById('number-of-employees');
const payFrequency = document.getElementById('pay-frequency');
const turnoverRate = document.getElementById('turnover-rate');
const benefitsBroker = document.getElementById('benefits-broker');
const email = document.getElementById('email');

const embedHrTotal = document.getElementById('hr-total');
const embedBenefitsTotal = document.getElementById('benefits-total');
const embedPayrollTotal = document.getElementById('payroll-total');
const embedTechTotal = document.getElementById('tech-total');
const embedEstimateTotal = document.getElementById('estimate-total');

let employeeRange;
let turnoverScale;
let payFreqScale;
let loaAdmin;
let compliance;
let hr2;
let hr3;
let hrTotal = 72;
let benefitsSupport;
let benefitsSupportTotal;
let benefitsBrokerCost;
let benefitsTotal = 0;
let payrollTotal = 41;
let technology = 30;
let estimate = 143;

function calculation(){
    const employeeValue = numEmployees.value;
    switch (true) {
        case (employeeValue > 0 && employeeValue < 16):
            employeeRange = 1;
            break;
        case (employeeValue > 15 && employeeValue < 36):
            employeeRange = 2;
            break;
        case (employeeValue > 35 && employeeValue < 61):
            employeeRange = 3;
            break;
        case (employeeValue > 60 && employeeValue < 91):
            employeeRange = 4;                    
            break;
        case (employeeValue > 90 && employeeValue < 126):
            employeeRange = 5;     
            break;               
        case (employeeValue > 125 && employeeValue < 176):
            employeeRange = 6;                    
            break;
        case (employeeValue > 175 && employeeValue < 251):
            employeeRange = 7;                    
            break;
        case (employeeValue > 250):
            employeeRange = 7;
            break;
        default:
            break;
    }

    const turnoverValue = turnoverRate.value;
    switch (true) {
        case (turnoverValue == "Low (Less than 5% per year)"):
            turnoverScale = 0;
            break;
        case (turnoverValue == "Average (5-10% per year)"):
            turnoverScale = 1;
            break;
        case (turnoverValue == "High (10-20% per year)"):
            turnoverScale = 2;
            break;
        case (turnoverValue == "Very High (more than 20% per year)"):
            turnoverScale = 3;
            break;
        default:
            break;
    }
    if (turnoverScale == 3 && employeeRange == 7){
        turnoverScale = 2;
    }

    const payFreqValue = payFrequency.value;
    switch (true) {
        case (payFreqValue == "Bi-Weekly or Semi-Monthly"):
            payFreqScale = 1;
            break;
        case (payFreqValue == "Weekly"):
            payFreqScale = 2;
            break;
        case (payFreqValue == "Monthly"):
            payFreqScale = 3;
            break;
        default:
            break;
    }

    // Technology
    switch (true) {
        case (employeeRange < 5):
            technology = 30;
            break;
        case (employeeRange < 6):
            technology = 26;
            break;
        case (employeeRange > 5):
            technology = 22;
            break;
        default:
            break;
    }

    // Benefits: Support
    switch (true) {
        case (employeeRange < 3):
            benefitsSupport = 20;
            break;
        case (employeeRange > 2):
            benefitsSupport = 15;
            break;
        default:
            break;
    }
    benefitsSupportTotal = benefitsSupport + turnoverScale;

    // Benefits: Broker
    switch (true) {
        case (employeeRange < 5):
            benefitsBrokerCost = 25;
            break;
        case (employeeRange < 6):
            benefitsBrokerCost = 20;
            break;
        case (employeeRange > 5):
            benefitsBrokerCost = 15;
            break;
        default:
            break;
    }

    // Benefits: Total
    if (benefitsBroker.value == "Yes"){
        benefitsTotal = benefitsSupportTotal - benefitsBrokerCost;
        if (benefitsTotal < 0) {
            benefitsTotal = 0;
        }
    } else {
        benefitsTotal = benefitsSupportTotal;
    }

    // Payroll
    switch (true) {
        // Start ER1
        case (employeeRange == 1):
            switch (true) {
                // Start ER1 Bi-Weekly
                case (payFreqScale == 1):
                    switch (true) {
                        case (turnoverScale == 0):
                            payrollTotal = 45;
                            break;
                        case (turnoverScale == 1):
                            payrollTotal = 46;
                            break;
                        case (turnoverScale == 2):
                            payrollTotal = 47;
                            break;
                        case (turnoverScale == 3):
                            payrollTotal = 47;
                            break;
                        default:
                            break;
                    }
                    break;
                // End ER1 Bi-Weekly
                // Start ER1 Weekly
                case (payFreqScale == 2):
                    switch (true) {
                        case (turnoverScale == 0):
                            payrollTotal = 57;
                            break;
                        case (turnoverScale == 1):
                            payrollTotal = 58;
                            break;
                        case (turnoverScale == 2):
                            payrollTotal = 59;
                            break;
                        case (turnoverScale == 3):
                            payrollTotal = 59;
                            break;
                        default:
                            break;
                    }
                    break;
                // End ER1 Weekly
                // Start ER1 Monthly
                case (payFreqScale == 3):
                    switch (true) {
                        case (turnoverScale == 0):
                            payrollTotal = 41;
                            break;
                        case (turnoverScale == 1):
                            payrollTotal = 42;
                            break;
                        case (turnoverScale == 2):
                            payrollTotal = 43;
                            break;
                        case (turnoverScale == 3):
                            payrollTotal = 43;
                            break;
                        default:
                            break;
                    }
                    break;
                // End ER1 Monthly
                default:
                    break;
            }
            break;
        // End ER1
        // Start ER2
        case (employeeRange == 2):
            switch (true) {
                // Start ER2 Bi-Weekly
                case (payFreqScale == 1):
                    switch (true) {
                        case (turnoverScale == 0):
                            payrollTotal = 40;
                            break;
                        case (turnoverScale == 1):
                            payrollTotal = 41;
                            break;
                        case (turnoverScale == 2):
                            payrollTotal = 41;
                            break;
                        case (turnoverScale == 3):
                            payrollTotal = 42;
                            break;
                        default:
                            break;
                    }
                    break;
                // End ER2 Bi-Weekly
                // Start ER2 Weekly
                case (payFreqScale == 2):
                    switch (true) {
                        case (turnoverScale == 0):
                            payrollTotal = 51;
                            break;
                        case (turnoverScale == 1):
                            payrollTotal = 51;
                            break;
                        case (turnoverScale == 2):
                            payrollTotal = 52;
                            break;
                        case (turnoverScale == 3):
                            payrollTotal = 53;
                            break;
                        default:
                            break;
                    }
                    break;
                // End ER2 Weekly
                // Start ER2 Monthly
                case (payFreqScale == 3):
                    switch (true) {
                        case (turnoverScale == 0):
                            payrollTotal = 37;
                            break;
                        case (turnoverScale == 1):
                            payrollTotal = 37;
                            break;
                        case (turnoverScale == 2):
                            payrollTotal = 38;
                            break;
                        case (turnoverScale == 3):
                            payrollTotal = 39;
                            break;
                        default:
                            break;
                    }
                    break;
                // End ER2 Monthly
                default:
                    break;
            }
            break;
        // End ER2
        // Start ER3
        case (employeeRange == 3):
            switch (true) {
                // Start ER3 Bi-Weekly
                case (payFreqScale == 1):
                    switch (true) {
                        case (turnoverScale == 0):
                            payrollTotal = 38;
                            break;
                        case (turnoverScale == 1):
                            payrollTotal = 39;
                            break;
                        case (turnoverScale == 2):
                            payrollTotal = 39;
                            break;
                        case (turnoverScale == 3):
                            payrollTotal = 40;
                            break;
                        default:
                            break;
                    }
                    break;
                // End ER3 Bi-Weekly
                // Start ER3 Weekly
                case (payFreqScale == 2):
                    switch (true) {
                        case (turnoverScale == 0):
                            payrollTotal = 48;
                            break;
                        case (turnoverScale == 1):
                            payrollTotal = 49;
                            break;
                        case (turnoverScale == 2):
                            payrollTotal = 49;
                            break;
                        case (turnoverScale == 3):
                            payrollTotal = 50;
                            break;
                        default:
                            break;
                    }
                    break;
                // End ER3 Weekly
                // Start ER3 Monthly
                case (payFreqScale == 3):
                    switch (true) {
                        case (turnoverScale == 0):
                            payrollTotal = 35;
                            break;
                        case (turnoverScale == 1):
                            payrollTotal = 35;
                            break;
                        case (turnoverScale == 2):
                            payrollTotal = 36;
                            break;
                        case (turnoverScale == 3):
                            payrollTotal = 37;
                            break;
                        default:
                            break;
                    }
                    break;
                // End ER3 Monthly
                default:
                    break;
            }
            break;
        // End ER3
        // Start ER4
        case (employeeRange == 4):
            switch (true) {
                // Start ER4 Bi-Weekly
                case (payFreqScale == 1):
                    switch (true) {
                        case (turnoverScale == 0):
                            payrollTotal = 35;
                            break;
                        case (turnoverScale == 1):
                            payrollTotal = 36;
                            break;
                        case (turnoverScale == 2):
                            payrollTotal = 36;
                            break;
                        case (turnoverScale == 3):
                            payrollTotal = 37;
                            break;
                        default:
                            break;
                    }
                    break;
                // End ER4 Bi-Weekly
                // Start ER4 Weekly
                case (payFreqScale == 2):
                    switch (true) {
                        case (turnoverScale == 0):
                            payrollTotal = 44;
                            break;
                        case (turnoverScale == 1):
                            payrollTotal = 45;
                            break;
                        case (turnoverScale == 2):
                            payrollTotal = 46;
                            break;
                        case (turnoverScale == 3):
                            payrollTotal = 46;
                            break;
                        default:
                            break;
                    }
                    break;
                // End ER4 Weekly
                // Start ER4 Monthly
                case (payFreqScale == 3):
                    switch (true) {
                        case (turnoverScale == 0):
                            payrollTotal = 32;
                            break;
                        case (turnoverScale == 1):
                            payrollTotal = 33;
                            break;
                        case (turnoverScale == 2):
                            payrollTotal = 33;
                            break;
                        case (turnoverScale == 3):
                            payrollTotal = 34;
                            break;
                        default:
                            break;
                    }
                    break;
                // End ER4 Monthly
                default:
                    break;
            }
            break;
        // End ER4
        // Start ER5
        case (employeeRange == 5):
            switch (true) {
                // Start ER5 Bi-Weekly
                case (payFreqScale == 1):
                    switch (true) {
                        case (turnoverScale == 0):
                            payrollTotal = 33;
                            break;
                        case (turnoverScale == 1):
                            payrollTotal = 34;
                            break;
                        case (turnoverScale == 2):
                            payrollTotal = 34;
                            break;
                        case (turnoverScale == 3):
                            payrollTotal = 35;
                            break;
                        default:
                            break;
                    }
                    break;
                // End ER5 Bi-Weekly
                // Start ER5 Weekly
                case (payFreqScale == 2):
                    switch (true) {
                        case (turnoverScale == 0):
                            payrollTotal = 42;
                            break;
                        case (turnoverScale == 1):
                            payrollTotal = 42;
                            break;
                        case (turnoverScale == 2):
                            payrollTotal = 43;
                            break;
                        case (turnoverScale == 3):
                            payrollTotal = 43;
                            break;
                        default:
                            break;
                    }
                    break;
                // End ER5 Weekly
                // Start ER5 Monthly
                case (payFreqScale == 3):
                    switch (true) {
                        case (turnoverScale == 0):
                            payrollTotal = 30;
                            break;
                        case (turnoverScale == 1):
                            payrollTotal = 31;
                            break;
                        case (turnoverScale == 2):
                            payrollTotal = 31;
                            break;
                        case (turnoverScale == 3):
                            payrollTotal = 32;
                            break;
                        default:
                            break;
                    }
                    break;
                // End ER5 Monthly
                default:
                    break;
            }
            break;
        // End ER5
        // Start ER6&7
        case (employeeRange == 6):
        case (employeeRange == 7):
            switch (true) {
                // Start ER6&7 Bi-Weekly
                case (payFreqScale == 1):
                    switch (true) {
                        case (turnoverScale == 0):
                            payrollTotal = 30;
                            break;
                        case (turnoverScale == 1):
                            payrollTotal = 31;
                            break;
                        case (turnoverScale == 2):
                            payrollTotal = 31;
                            break;
                        case (turnoverScale == 3):
                            payrollTotal = 32;
                            break;
                        default:
                            break;
                    }
                    break;
                // End ER6&7 Bi-Weekly
                // Start ER6&7 Weekly
                case (payFreqScale == 2):
                    switch (true) {
                        case (turnoverScale == 0):
                            payrollTotal = 38;
                            break;
                        case (turnoverScale == 1):
                            payrollTotal = 39;
                            break;
                        case (turnoverScale == 2):
                            payrollTotal = 39;
                            break;
                        case (turnoverScale == 3):
                            payrollTotal = 40;
                            break;
                        default:
                            break;
                    }
                    break;
                // End ER6&7 Weekly
                // Start ER6&7 Monthly
                case (payFreqScale == 3):
                    switch (true) {
                        case (turnoverScale == 0):
                            payrollTotal = 28;
                            break;
                        case (turnoverScale == 1):
                            payrollTotal = 28;
                            break;
                        case (turnoverScale == 2):
                            payrollTotal = 29;
                            break;
                        case (turnoverScale == 3):
                            payrollTotal = 29;
                            break;
                        default:
                            break;
                    }
                    break;
                // End ER6&7 Monthly
                default:
                    break;
            }
            break;
        // End ER6&7
        default:
            break;
    }

    // HR: LOA Admin
    switch (true) {
        case (employeeRange < 4):
            loaAdmin = 15;
            break;
        case (employeeRange == 4):
            loaAdmin = 10;
            break;
        case (employeeRange == 5):
            loaAdmin = 9;
            break;
        case (employeeRange == 6):
            loaAdmin = 8;
            break;
        case (employeeRange == 7):
            loaAdmin = 7;
            break;
        default:
            break;
    }

    // HR: Compliance
    switch (true) {
        case (employeeRange < 3):
            compliance = 20;
            break;
        case (employeeRange == 3):
            compliance = 15;
            break;
        case (employeeRange < 6):
            compliance = 10;
            break;
        case (employeeRange > 5):
            compliance = 8;
            break;
        default:
            break;
    }

    // HR Tier 2
    switch (true) {
        case (turnoverScale == 0):
            switch (true) {
                case (employeeRange < 3):
                    hr2 = 20;
                    break;
                case (employeeRange < 6):
                    hr2 = 15;
                    break;
                case (employeeRange > 5):
                    hr2 = 10;
                    break;
                default:
                    break;
            }
            break;
        case (turnoverScale == 1):
            switch (true) {
                case (employeeRange < 3):
                    hr2 = 21;
                    break;
                case (employeeRange < 6):
                    hr2 = 16;
                    break;
                case (employeeRange > 5):
                    hr2 = 11;
                    break;
                default:
                    break;
            }
            break;
        case (turnoverScale == 2):
            switch (true) {
                case (employeeRange < 3):
                    hr2 = 22;
                    break;
                case (employeeRange < 6):
                    hr2 = 17;
                    break;
                case (employeeRange > 5):
                    hr2 = 11;
                    break;
                default:
                    break;
            }
            break;
        case (turnoverScale == 3):
            switch (true) {
                case (employeeRange < 3):
                    hr2 = 23;
                    break;
                case (employeeRange < 6):
                    hr2 = 17;
                    break;
                case (employeeRange > 5):
                    hr2 = 12;
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }

    // HR Tier 3
    switch (true) {
        case (turnoverScale == 0):
            switch (true) {
                case (employeeRange < 3):
                    hr3 = 15;
                    break;
                case (employeeRange > 2):
                    hr3 = 10;
                    break;
                default:
                    break;
            }
            break;
        case (turnoverScale == 1):
            switch (true) {
                case (employeeRange < 3):
                    hr3 = 16;
                    break;
                case (employeeRange > 2):
                    hr3 = 11;
                    break;
                default:
                    break;
            }
            break;
        case (turnoverScale == 2):
            switch (true) {
                case (employeeRange < 3):
                    hr3 = 17;
                    break;
                case (employeeRange > 2):
                    hr3 = 11;
                    break;
                default:
                    break;
            }
            break;
        case (turnoverScale == 3):
            switch (true) {
                case (employeeRange < 3):
                    hr3 = 17;
                    break;
                case (employeeRange > 2):
                    hr3 = 12;
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }

    // HR Total
    hrTotal = loaAdmin + compliance + hr2 + hr3;

    // Estimate
    estimate = technology + benefitsTotal + payrollTotal + hrTotal;

    embedTechTotal.innerHTML = technology;
    embedBenefitsTotal.innerHTML = benefitsTotal;
    embedPayrollTotal.innerHTML = payrollTotal;
    embedHrTotal.innerHTML = hrTotal;
    embedEstimateTotal.innerHTML = estimate;
}

numEmployees.addEventListener('change', calculation);
payFrequency.addEventListener('change', calculation);
turnoverRate.addEventListener('change', calculation);
benefitsBroker.addEventListener('change', calculation);

function formv3(){
    // Create the new request 
    var xhr = new XMLHttpRequest();
    var url = 'https://api.hsforms.com/submissions/v3/integration/submit/22410818/45ecaec0-c9e8-431c-b199-f9a525c1a7fe';
    const utcTimestamp = new Date().getTime();
    const requestCall = document.getElementById('request-consultation').checked ? "Yes" : "No";
    
    // Example request JSON:
    var data = {
    "submittedAt": utcTimestamp,
    "fields": [
        {
        "objectTypeId": "0-1",
        "name": "number_of_employees__pricing_",
        "value": numEmployees.value
        },
        {
        "objectTypeId": "0-1",
        "name": "pay_frequency",
        "value": payFrequency.value
        },
        {
        "objectTypeId": "0-1",
        "name": "employee_turnover_rate",
        "value": turnoverRate.value
        },
        {
        "objectTypeId": "0-1",
        "name": "will_melita_be_your_benefits_broker_",
        "value": benefitsBroker.value
        },
        {
        "objectTypeId": "0-1",
        "name": "hr_estimate",
        "value": hrTotal
        },
        {
        "objectTypeId": "0-1",
        "name": "benefits_estimate",
        "value": benefitsTotal
        },
        {
        "objectTypeId": "0-1",
        "name": "payroll_estimate",
        "value": payrollTotal
        },
        {
        "objectTypeId": "0-1",
        "name": "technology_estimate",
        "value": technology
        },
        {
        "objectTypeId": "0-1",
        "name": "pricing_estimate",
        "value": estimate
        },
        {
        "objectTypeId": "0-1",
        "name": "email",
        "value": email.value
        },
        {
        "objectTypeId": "0-1",
        "name": "request_a_consultation_pricing_",
        "value": requestCall
        },
    ]
    }

    var final_data = JSON.stringify(data)

    xhr.open('POST', url);
    // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) { 
            // alert(xhr.responseText); // Returns a 200 response if the submission is successful.
            const calcContainer = document.querySelector('.calculator-section .container');
            calcContainer.innerHTML = "";
            calcContainer.innerHTML = "<div class='calculator-submission-content'><p>Thank you for requesting a call. One of our Solution Advisors will contact you shortly.</p><p>Interested in learning more about how Melita can help with your business\'s long-term success?</p><p><a href='https://melitagroup.com/resources' class='btn btn-full'>Explore Resource Hub</a></p></div>";    
        } else if (xhr.readyState == 4 && xhr.status == 400){ 
            // alert(xhr.responseText); // Returns a 400 error the submission is rejected.
            const calcEmail = document.querySelector('.calc-email-field');
            const emailError = document.createElement("p");	// Create a new element
            emailError.innerText = 'Please enter a valid email address.';
            const errorText = calcEmail.querySelector('p');
            if (!errorText){
                calcEmail.appendChild(emailError);
            }
        } else if (xhr.readyState == 4 && xhr.status == 403){ 
            alert(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.           
        } else if (xhr.readyState == 4 && xhr.status == 404){ 
            alert(xhr.responseText); //Returns a 404 error if the formGuid isn't found     
        }
    }


    // Sends the request 
    xhr.send(final_data)
}