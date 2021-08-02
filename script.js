/* .js files add interaction to your website */


// KEY FEATURE: Generate a fact
var factList = [
  "One in five American adults experienced a mental health issue.", 
  "3.8% of U.S. adults experienced a co-occurring substance use disorder and mental illness in 2019 (9.5 million people).", 
  "One in 25 Americans lived with a serious mental illness, such as schizophrenia, bipolar disorder, or major depression", 
  "The prevalence of AMI (any mental illness) was higher among females (24.5%) than males (16.3%).", 
  "In 2019, among the 51.5 million adults with AMI, 23.0 million (44.8%) received mental health services in the past year.", 
  "In 2019, there were an estimated 13.1 million adults aged 18 or older in the United States with SMI. This number represented 5.2% of all U.S. adults."
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
