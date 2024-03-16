const apiHost = 'https://bakesaleforgood.com'

export default {
    async fetchInitiailDeals() {
        try {
            let response = await fetch(apiHost + '/api/deals')
            let responseJson = await response.json()
            return responseJson;
        } catch(error) {
            console.log(error)
        }
    }
}