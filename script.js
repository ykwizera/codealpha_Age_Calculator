function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    if (!dobInput) {
        document.getElementById('result').innerText = "Please select a date of birth.";
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();
    let ageYears = today.getFullYear() - dob.getFullYear();
    let ageMonths = today.getMonth() - dob.getMonth();
    let ageDays = today.getDate() - dob.getDate();

    // Adjust months and years if the current month/day is before the birth month/day
    if (ageDays < 0) {
        // Borrow days from the previous month
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += previousMonth.getDate();
        ageMonths--;
    }

    if (ageMonths < 0) {
        ageMonths += 12;
        ageYears--;
    }

    document.getElementById('result').innerText = `Your age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days.`;
}