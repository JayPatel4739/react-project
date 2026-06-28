import OpenAI from "openai";
const client = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
    baseURL: import.meta.env.VITE_OPENAI_URL
});


export default async function generateRecipe(ingredients){
    const response = await client.responses.create({
        model: import.meta.env.VITE_MODEL,
        input: [
            {
                role: "system",
                content: "You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page",
            },
            {
                role:"user",
                content: `${ingredients}`
            }
        ],
    });
    return (response.output_text);
}
