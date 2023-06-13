export async function getShibes(count: number = 1): Promise<string[]> {
    try {
        const url = `http://shibe.online/api/shibes?count=${count}&urls=true&httpsUrls=true`;

        const response = await fetch(url);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
    return [];
}

export async function getDog(): Promise<object[]> {
    try {
        const url = "https://random.dog/woof.json";

        const response = await fetch(url);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }

    return [];
}

export async function getFox(): Promise<string[]> {
    try {
        const apiUrl = "https://randomfox.ca/floof/";

        const response = await fetch(apiUrl);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }

    return [];
}

export async function getRandomText(): Promise<any> {
    try {
        const response = await fetch(
            "https://contentai-net-text-generation.p.rapidapi.com/text-generation/api?category=health-and-medicine",
            {
                method: "GET",

                headers: {
                    "X-RapidAPI-Key": "a5eaa64a73msh85c9f18a18b2b75p189ad2jsn99b9913cb83b",
                    "X-RapidAPI-Host": "contentai-net-text-generation.p.rapidapi.com",
                },
            }
        );

        const data = await response.json();

        debugger;

        return data.output;
    } catch (error) {
        console.error(error);
    }
    return null;
}
