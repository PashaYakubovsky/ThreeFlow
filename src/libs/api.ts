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
