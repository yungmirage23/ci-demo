const statusBox = document.getElementById('status')
const checkBtn = document.getElementById('check-btn')

// Навмисна помилка 1: змінна оголошена але не використовується
const unusedVariable = 'я ніде не використовуюсь'

// Навмисна помилка 2: нестрога рівність замість ===
function getStatus() {
  const now = new Date()
  const timeString = now.toLocaleTimeString('uk-UA')

  if (timeString == null) {  // == замість ===, порушення eqeqeq
    return
  }
  statusBox.textContent = `✅ Все працює. Перевірено о ${timeString}`
}
checkBtn.addEventListener('click', getStatus)
getStatus()
