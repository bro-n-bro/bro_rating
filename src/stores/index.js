import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
    state: () => ({
        tooltip: '',
        compareLimit: 3,
        compareValidators: [],
        currentNetwork: 'cosmos_hub',
        showCompareErrorModal: false,
        ratingData: {},
        networks: {
            'cosmos_hub': {
                name: 'Cosmos Hub',
                token: 'ATOM',
                alias: 'cosmos_hub'
            },
            'bostrom': {
                name: 'Bostrom',
                token: 'BOOT',
                alias: 'bostrom'
            },
            'evmos': {
                name: 'Evmos',
                token: 'EVMOS',
                alias: 'evmos'
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
            'gravity_bridge': {
                name: 'Gravity bridge',
                token: 'GRAVITION',
                alias: 'gravity_bridge'
            },
            'osmosis': {
                name: 'Osmosis',
                token: 'OSMO',
                alias: 'osmosis'
            },
            'emoney': {
                name: 'E-money',
                token: 'NGM',
                alias: 'emoney'
            },
            'desmos': {
                name: 'Desmos',
                token: 'DSM',
                alias: 'desmos'
            },
            'omniflix': {
                name: 'OmniFlix network',
                token: 'FLIX',
                alias: 'omniflix'
            }
        }
    }),


    actions: {
        // Get rating data
        async getRatingData() {
            try {
                await fetch('https://rpc.bronbro.io/bro_score/')
                    .then(response => response.json())
                    .then(data => this.ratingData = data)
            } catch (error) {
                console.log(error)
            }
        },


        // Add to compare
        addToCompare(valoper) {
            this.compareValidators.push(valoper)
        },


        // Remove from compare
        removeFromCompare(valoper) {
            this.compareValidators.push(valoper)
        }
    }
})
