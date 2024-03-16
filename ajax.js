const apiHost = 'https://bakesaleforgood.com';

export default {
    async fetchInitialDeals() {
        try {
            const url = new URL('/api/deals', apiHost);
            const response = await fetch(url);

            if (!response.ok) {
                const errorMessage = `Network response was not ok - Status: ${response.status} ${response.statusText}`;
                throw new Error(errorMessage);
            }

            const responseJson = await response.json();
            return responseJson;

        } catch(error) {
            console.error('Error fetching initial deals:', error);
            throw error;
        }
    }
};
