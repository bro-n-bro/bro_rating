import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
    state: () => ({
        tooltip: '',
        compareLimit: 3,
        compareValidators: [],
        compareIdenticalOptions: [],
        compareMinMaxValue: [],
        searchValidators: [],
        currentNetwork: '',
        showCompareErrorModal: false,
        ratingData: {},
        colors: ['#950FFF', '#1BC562', '#EB5757', '#0343E8', '#F79400', '#DB11D3'],
        networks: {
            'cosmoshub': {
                name: 'Cosmos Hub',
                token: 'ATOM',
                alias: 'cosmoshub',
                mintscanAlias: 'cosmos',
                exponent: 1000000,
                token_name: 'ATOM',
                chainId: 'cosmoshub-4'
            },
            'bostrom': {
                name: 'Bostrom',
                token: 'BOOT',
                alias: 'bostrom',
                exponent: 1000000,
                token_name: 'MBOOT',
                chainId: 'bostrom'
            },
            'stargaze': {
                name: 'Stargaze',
                token: 'STARS',
                alias: 'stargaze',
                mintscanAlias: 'stargaze',
                exponent: 1000000,
                token_name: 'STARS',
                chainId: 'stargaze-1'
            },
            'juno': {
                name: 'Juno',
                token: 'JUNO',
                alias: 'juno',
                mintscanAlias: 'juno',
                exponent: 1000000,
                token_name: 'JUNO',
                chainId: 'juno-1'
            },
            'crescent': {
                name: 'Crescent hub',
                token: 'CRE',
                alias: 'crescent',
                mintscanAlias: 'crescent',
                exponent: 1000000,
                token_name: 'CRE',
                chainId: 'crescent-1'
            },
            'gravity': {
                name: 'Gravity bridge',
                token: 'GRAV',
                alias: 'gravity',
                mintscanAlias: 'gravity-bridge',
                exponent: 1000000,
                token_name: 'GRAV',
                chainId: 'gravity-bridge-3'
            },
            'osmosis': {
                name: 'Osmosis',
                token: 'OSMO',
                alias: 'osmosis',
                mintscanAlias: 'osmosis',
                exponent: 1000000,
                token_name: 'OSMO',
                chainId: 'osmosis-1'
            },
            'stride': {
                name: 'Stride',
                token: 'STRD',
                alias: 'stride',
                mintscanAlias: 'stride',
                exponent: 1000000,
                token_name: 'STRD',
                chainId: 'stride-1'
            }
        }
    }),


    actions: {
        // Get rating data
        async getRatingData() {
            try {
                await fetch(`https://rpc.bronbro.io/bro_score/?network=${this.currentNetwork}`)
                    .then(response => response.json())
                    .then(data => {
                        this.ratingData = data

                        // Add blurring
                        this.ratingData.schema.push('blurring')

                        this.ratingData.result.forEach(el => {
                            el.push(el[this.ratingData.schema.indexOf('staked')] / el[this.ratingData.schema.indexOf('delegator_shares')])
                        })
                    })
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
        },


        // Set identical options
        setIdenticalOptions() {
            let tempArr = []

            this.compareValidators.forEach((el, index) => {
                el.forEach((feature, i) => {
                    if (tempArr[i] == feature) {
                        if (index > 1) {
                            if (this.compareIdenticalOptions[this.ratingData.schema[i]]) {
                                this.compareIdenticalOptions[this.ratingData.schema[i]] = true
                            }
                        } else {
                            this.compareIdenticalOptions[this.ratingData.schema[i]] = true
                        }
                    } else {
                        this.compareIdenticalOptions[this.ratingData.schema[i]] = false
                    }

                    tempArr[i] = feature
                })
            })
        },


        // Set min/max value
        setMinMaxValue() {
            let tempArr = []

            this.compareValidators.forEach(el => {
                el.forEach((feature, i) => {
                    tempArr[this.ratingData.schema[i]]
                        ? tempArr[this.ratingData.schema[i]].push(feature)
                        : tempArr[this.ratingData.schema[i]] = [feature]
                })
            })

            setTimeout(() => {
                for (let feature in tempArr) {
                    let maxIndex = tempArr[feature].indexOf(Math.max.apply(null, tempArr[feature])),
                        minIndex = tempArr[feature].indexOf(Math.min.apply(null, tempArr[feature]))

                    this.compareMinMaxValue[feature] = {
                        max: tempArr[feature].filter(value => value == tempArr[feature][maxIndex]).length > 1 ? null : maxIndex,
                        min: tempArr[feature].filter(value => value == tempArr[feature][minIndex]).length > 1 ? null : minIndex
                    }
                }
            })
        }
    }
})
