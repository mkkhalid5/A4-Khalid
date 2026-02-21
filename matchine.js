function showHide(id) {
    const jobsCard = document.getElementById("jobsCard");
    const interviewCard = document.getElementById("interviewCard");
    const rejectedCard = document.getElementById("rejectedCard");

    //all hide
    jobsCard.classList.add("hidden");
    interviewCard.classList.add("hidden");
    rejectedCard.classList.add("hidden");

    // show section 
    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}
