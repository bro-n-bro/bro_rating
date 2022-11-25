import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
    state: () => ({
        tooltip: '',
        compareLimit: 3,
        compareValidators: [],
        searchValidators: [],
        currentNetwork: 'cosmoshub',
        showCompareErrorModal: false,
        ratingData: {},
        networks: {
            'cosmoshub': {
                name: 'Cosmos Hub',
                token: 'ATOM',
                alias: 'cosmoshub'
            },
            'bostrom': {
                name: 'Bostrom',
                token: 'BOOT',
                alias: 'bostrom'
            },
            'stargaze': {
                name: 'Stargaze',
                token: 'STARS',
                alias: 'stargaze'
            },
            'juno': {
                name: 'Juno',
                token: 'JUNO',
                alias: 'juno'
            },
            'crescent': {
                name: 'Crescent hub',
                token: 'CRE',
                alias: 'crescent'
            },
            'gravity': {
                name: 'Gravity bridge',
                token: 'GRAVITION',
                alias: 'gravity'
            },
            'osmosis': {
                name: 'Osmosis',
                token: 'OSMO',
                alias: 'osmosis'
            },
            'stride': {
                name: 'Stride',
                token: 'STRD',
                alias: 'stride'
            }
        }
    }),


    actions: {
        // Get rating data
        async getRatingData() {
            try {
                await fetch(`https://rpc.bronbro.io/bro_score/?network=${this.currentNetwork}`)
                    .then(response => response.json())
                    .then(data => this.ratingData = data)
            } catch (error) {
                console.log(error)
            }
        },


        // Add to compare
        addToCompare(valoper) {
            this.ratingData.result.forEach((el, i) => {
                if (this.ratingData.result[i].indexOf(valoper) != -1) {
                    this.compareValidators.push(this.ratingData.result[i])
                    this.ratingData.result[i].pinned = true
                }
            })
        },


        // Remove from compare
        removeFromCompare(valoper) {
            this.compareValidators.forEach((el, i) => {
                if (this.compareValidators[i].indexOf(valoper) != -1) {
                    this.compareValidators.splice(i, 1)
                }
            })

            this.ratingData.result.forEach((el, i) => {
                if (this.ratingData.result[i].indexOf(valoper) != -1) {
                    this.ratingData.result[i].pinned = false
                }
            })
        },


        // Sort data
        sortData(column, direction) {
            let arr = this.ratingData.result.sort((a, b) => {
                if (a[column] > b[column]) { return 1 }
                if (a[column] < b[column]) { return -1 }
                return 0
            })

            if (direction == 'DESC') { arr.reverse() }

            return arr
        }
    }
})