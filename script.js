document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".toggle button");
    const priceElements = document.querySelectorAll(".price");
  
    const plans = [
      { id: "mobile", monthly: 100, yearly: 1000 },
      { id: "basic", monthly: 200, yearly: 2000 },
      { id: "standard", monthly: 500, yearly: 5000 },
      { id: "premium", monthly: 700, yearly: 7000 }
    ];
  
    // Set initial pricing display
    priceElements.forEach((priceElement, index) => {
      priceElement.textContent = `₹ ${plans[index].monthly}/month`;
    });
  
    // Toggle button functionality
    toggleButtons.forEach(button => {
      button.addEventListener("click", function () {
        const plan = button.closest(".plan");
        const isMonthly = button.classList.contains("monthly");
        const priceElement = plan.querySelector(".price");
  
        toggleButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
  
        const planIndex = plans.findIndex(p => p.id === plan.id);
        const selectedPlan = plans[planIndex];
        
        if (isMonthly) {
          priceElement.textContent = `₹ ${selectedPlan.monthly}/month`;
        } else {
          priceElement.textContent = `₹ ${selectedPlan.yearly}/year`;
        }
      });
    });
  });

