// Régression linéaire en TypeScript

type Point = { x: number; y: number };

// Générer 20 points (par exemple en suivant approximativement y = 2x + 5 + bruit)
const data: Point[] = Array.from({ length: 20 }, (_, i) => {
  const x = i + 1;
  const y = 2 * x + 5 + Math.random() * 4 - 2; // y ≈ 2x + 5 avec un petit bruit
  return { x, y };
});

// Fonction pour calculer les coefficients a (pente) et b (ordonnée à l'origine)
function linearRegression(points: Point[]): { a: number; b: number } {
  const n = points.length;
  const sumX = points.reduce((acc, p) => acc + p.x, 0);
  const sumY = points.reduce((acc, p) => acc + p.y, 0);
  const sumXY = points.reduce((acc, p) => acc + p.x * p.y, 0);
  const sumX2 = points.reduce((acc, p) => acc + p.x * p.x, 0);

  const a = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  const b = (sumY - a * sumX) / n;

  return { a, b };
}

// Calculer la régression
const { a, b } = linearRegression(data);

console.log("Points :", data);
console.log(`Équation de la régression: y ≈ ${a.toFixed(2)}x + ${b.toFixed(2)}`);
