const apiHost = 'https://bakesaleforgood.com';

export default {
    async fetchInitialDeals() {
        try {
            const url = new URL('/api/deals', apiHost);
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseJson = await response.json();
            return responseJson;
        } catch(error) {
            console.error('Error fetching initial deals:', error);
            throw error;
        }
    }
};
