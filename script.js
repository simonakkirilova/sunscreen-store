// Поръчка
document.addEventListener("DOMContentLoaded", function () {
    const orderForm = document.getElementById("order-form");
    const orderMessage = document.getElementById("order-message");
  
    if (orderForm) {
      orderForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const nameInput = orderForm.querySelector('input[name="name"]');
        const customerName = nameInput.value;
  
        orderMessage.textContent = `${customerName}, благодарим за поръчката!`;
        orderForm.reset();
      });
    }
  
    // Ревю
    const reviewForm = document.getElementById("review-form");
    const reviewsList = document.getElementById("reviews-list");
  
    if (reviewForm && reviewsList) {
      reviewForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const textarea = reviewForm.querySelector('textarea[name="comment"]');
        const commentText = textarea.value;

        const newReview = document.createElement("p");
        newReview.textContent = commentText;
  
        reviewsList.prepend(newReview);
  
        reviewForm.reset();
      });
    }
  });
  