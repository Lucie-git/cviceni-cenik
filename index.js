// 2. Napište funkci `selectPlan` s jedním parametrem `planNumber`. Tento parametr bude představovat číslo plánu. Funkce podle čísla plánu vybere ze stránky správný DOM element a přidá k němu CSS třídu `plan--selected`.
// 3. Vyzkoušejte vaši funkci použít ve stránce pro výběr plánu.
// 4. Opakovaným voláním funkce `selectPlan` lze na stránce postupně vybrat všechny plány. My bychom však chtěli, aby mohl být vybrán vždy nejvýš jeden. Upravte funkci `selectPlan` tak, že vybere plán zadaný v parametru a u ostatních plánů výběr zruší. Ke zrušení výběru stačí z příslušného prvku odebrat třídu `plan--selected`.
// 5. Opět vyzkoušejte funkci ve stránce. Neuvidíte výběr jednotlivých plánů (JavaScript je vybere velmi rychle), ale na stránce by měl zůstat poslední vybraný plán.

const selectPlan = (planNumber) => {
  const plans = document.querySelectorAll('.plan'); // Vybere všechny plány
  plans.forEach((plan) => {
    plan.classList.remove('plan--selected'); // Odebere třídu 'plan--selected' ze všech
  });

  if (planNumber === 1) {
    plans[0].classList.add('plan--selected'); // Přidá třídu pro první plán
  } else if (planNumber === 2) {
    plans[1].classList.add('plan--selected'); // Přidá třídu pro druhý plán
  } else if (planNumber === 3) {
    plans[2].classList.add('plan--selected'); // Přidá třídu pro třetí plán
  }
};

console.log('Vybrán plán 2');
