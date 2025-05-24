let selectedRating = null;

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.emoticon').forEach(emoticon => {
    emoticon.addEventListener('click', () => {
      document.querySelectorAll('.emoticon').forEach(e => e.classList.remove('selected'));
      emoticon.classList.add('selected');
      selectedRating = emoticon.getAttribute('data-rating');
    });
  });
});

function submitFeedback() {
  const category = document.getElementById('category').value;
  const result = document.getElementById('feedback-result');

  if (!selectedRating) {
    result.style.color = 'red';
    result.textContent = 'Please select a rating.';
    return;
  }

  result.style.color = 'green';
  result.textContent = `Thank you for your feedback on ${category} - Rating: ${selectedRating.replace('-', ' ')}`;
}
