import React from "react";

type Recipe = {
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
  healthScore: number;
  pricePerServing: number;
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  ingredients: {
    name: string;
    amount: number;
    unit: string;
  }[];
  instructions: { name: string; steps: { number: number; step: string }[] }[];
};

type RecipeProps = {
  recipe: Recipe;
};

const RecipeDetails: React.FC<RecipeProps> = ({ recipe }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Title & Image */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-2xl font-bold text-gray-800">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full max-w-md rounded-md mt-4"
        />
      </div>

      {/* Summary */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-700">Summary</h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>Ready in: {recipe.readyInMinutes} minutes</li>
          <li>Servings: {recipe.servings}</li>
          <li>Health Score: {recipe.healthScore}</li>
          <li>
            Price per Serving: ${recipe.pricePerServing.toFixed(2)}
          </li>
        </ul>
      </div>

      {/* Dietary Info */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-700">Dietary Info</h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {[
            { label: "Vegetarian", value: recipe.vegetarian },
            { label: "Vegan", value: recipe.vegan },
            { label: "Gluten Free", value: recipe.glutenFree },
            { label: "Dairy Free", value: recipe.dairyFree },
            { label: "Very Healthy", value: recipe.veryHealthy },
          ].map((info) => (
            <div
              key={info.label}
              className={`p-4 border rounded-md ${
                info.value ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}
            >
              {info.label}: {info.value ? "Yes" : "No"}
            </div>
          ))}
        </div>
      </div>

      {/* Ingredients */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-700">Ingredients</h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          {recipe?.ingredients?.map((ingredient, index) => (
            <li key={index}>
              {ingredient.amount} {ingredient.unit} {ingredient.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      {Array.isArray(recipe?.instructions) &&
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-700">Instructions</h2>
        {recipe?.instructions?.map((section, idx) => (
          <div key={idx} className="mt-4">
            {section.name && (
              <h3 className="text-lg font-medium text-gray-800">{section.name}</h3>
            )}
            <ol className="list-decimal list-inside mt-2 text-gray-600">
              {section.steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
}
    </div>
  );
};

export default RecipeDetails;
